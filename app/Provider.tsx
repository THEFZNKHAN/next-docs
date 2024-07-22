"use client";

import { ReactNode } from "react";
import {
    ClientSideSuspense,
    LiveblocksProvider,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getCLerkUsers } from "@/lib/actions/users.actions";

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <LiveblocksProvider
            authEndpoint="/api/liveblocks-auth"
            resolveUsers={async ({ userIds }) => {
                const users = await getCLerkUsers({ userIds });
                return users;
            }}
        >
            <ClientSideSuspense fallback={<Loader />}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    );
};

export default Provider;
