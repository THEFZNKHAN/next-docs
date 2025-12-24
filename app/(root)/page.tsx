import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Header from "@/components/Header";
import Notifications from "@/components/Notifications";
import AddDocumentBtn from "@/components/AddDocumentBtn";
import { dateConverter } from "@/lib/utils";
import { getDocuments } from "@/lib/actions/room.actions";
import { DeleteModal } from "@/components/DeleteModal";

const Home = async () => {
    const clerkUser = await currentUser();
    if (!clerkUser) redirect("/sign-in");

    const userEmail = clerkUser.emailAddresses?.[0]?.emailAddress;
    if (!userEmail) {
        console.error("User email not found");
        redirect("/sign-in");
    }

    const roomDocuments = await getDocuments(userEmail);

    return (
        <main className="home-container">
            <Header className="sticky left-0 top-0">
                <div className="flex items-center gap-2 lg:gap-4">
                    <Notifications />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </Header>

            {roomDocuments.data.length > 0 ? (
                <div className="document-list-container">
                    <div className="document-list-title">
                        <h3 className="text-28-semibold">All documents</h3>
                        <AddDocumentBtn
                            userId={clerkUser.id}
                            email={userEmail}
                        />
                    </div>

                    <ul className="document-ul">
                        {roomDocuments.data.map(
                            (doc: { id: string; metadata: { title: string }; createdAt: string }) => (
                                <li key={doc.id} className="document-list-item">
                                    <Link
                                        href={`/documents/${doc.id}`}
                                        className="flex flex-1 items-center gap-4"
                                    >
                                        <div className="hidden rounded-md bg-dark-500 p-2 sm:block">
                                            <Image
                                                src="/assets/icons/doc.svg"
                                                alt="file"
                                                width={40}
                                                height={40}
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <p className="line-clamp-1 text-lg">
                                                {doc.metadata.title}
                                            </p>

                                            <p className="text-sm font-light text-blue-100">
                                                Created about{" "}
                                                {dateConverter(doc.createdAt)}
                                            </p>
                                        </div>
                                    </Link>

                                    <DeleteModal roomId={doc.id} />
                                </li>
                            )
                        )}
                    </ul>
                </div>
            ) : (
                <div className="document-list-empty">
                    <Image
                        src="/assets/icons/doc.svg"
                        alt="Document"
                        width={40}
                        height={40}
                        className="mx-auto"
                    />

                    <AddDocumentBtn
                        userId={clerkUser.id}
                        email={userEmail}
                    />
                </div>
            )}
        </main>
    );
};

export default Home;
