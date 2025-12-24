"use client";

import { ReactNode } from "react";
import {
    ClientSideSuspense,
    LiveblocksProvider,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers, getDocumentUsers } from "@/lib/actions/users.actions";
import { useUser } from "@clerk/nextjs";

const Provider = ({ children }: { children: ReactNode }) => {
    const { user: clerkUser } = useUser();

    return (
        <LiveblocksProvider
            authEndpoint="/api/liveblocks-auth"
            resolveUsers={async ({ userIds }) => {
                const users = await getClerkUsers({ userIds });
                return users;
            }}
            resolveMentionSuggestions={async ({ text, roomId }) => {
                const currentUserEmail = clerkUser?.emailAddresses?.[0]?.emailAddress;
                if (!currentUserEmail) return [];
                
                const roomUsers = await getDocumentUsers({
                    roomId,
                    currentUser: currentUserEmail,
                    text,
                });
                return roomUsers;
            }}
        >
            <ClientSideSuspense fallback={<Loader />}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    );
};

export default Provider;
