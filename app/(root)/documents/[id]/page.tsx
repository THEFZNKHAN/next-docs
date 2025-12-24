import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUsers } from "@/lib/actions/users.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async ({ params }: SearchParamProps) => {
    const { id } = await params;
    const clerkUser = await currentUser();
    if (!clerkUser) redirect("/sign-in");

    const userEmail = clerkUser.emailAddresses?.[0]?.emailAddress;
    if (!userEmail) {
        console.error("User email not found");
        redirect("/sign-in");
    }

    const room = await getDocument({
        roomId: id,
        userId: userEmail,
    });

    if (!room) redirect("/");

    const userIds = Object.keys(room.usersAccesses);
    const users = await getClerkUsers({ userIds });

    // Create a map of existing Clerk users by email
    const clerkUsersMap = new Map(users.map((user: User) => [user.email, user]));

    // Build usersData including both registered users and pending invites
    const usersData = userIds.map((email): User => {
        const clerkUser = clerkUsersMap.get(email);
        
        if (clerkUser) {
            // Registered Clerk user
            return {
                ...clerkUser,
                userType: room.usersAccesses[email]?.includes("room:write")
                    ? ("editor" as UserType)
                    : ("viewer" as UserType),
            } as User;
        } else {
            // Pending invite (not a registered user yet)
            return {
                id: email,
                name: email,
                email: email,
                avatar: '/assets/icons/file.svg',
                color: '#3371FF',
                userType: room.usersAccesses[email]?.includes("room:write")
                    ? ("editor" as UserType)
                    : ("viewer" as UserType),
            } as User;
        }
    });

    const currentUserType = room.usersAccesses[userEmail]?.includes("room:write")
        ? "editor"
        : "viewer";

    return (
        <main className="flex w-full flex-col items-center">
            <CollaborativeRoom
                roomId={id}
                roomMetadata={room.metadata}
                users={usersData}
                currentUserType={currentUserType}
            />
        </main>
    );
};

export default Document;
