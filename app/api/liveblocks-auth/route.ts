import { redirect } from "next/navigation";
import { getUserColor } from "@/lib/utils";
import { liveblocks } from "@/lib/liveblocks";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(request: Request) {
    const clerkUser = await currentUser();

    if (!clerkUser) redirect("/sign-in");

    const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;

    const user = {
        id,
        info: {
            id,
            name: `${firstName} ${lastName}`,
            email: emailAddresses[0].emailAddress,
            avatar: imageUrl,
            color: getUserColor(id),
        },
    };

    const { status, body } = await liveblocks.identifyUser(
        { userId: user.info.email, groupIds: [] },
        { userInfo: user.info }
    );

    return new Response(body, { status });
}
