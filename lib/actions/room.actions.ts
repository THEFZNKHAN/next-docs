"use server";

import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";
import { liveblocks } from "../liveblocks";

export const createDocument = async ({
    userId,
    email,
}: CreateDocumentParams) => {
    const roomId = nanoid();

    try {
        const metadata = {
            createId: userId,
            email,
            title: "Untitled",
        };

        const usersAccesses: RoomAccesses = {
            [email]: ["room:write"],
        };

        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: ["room:write"],
        });

        revalidatePath("/");

        return parseStringify(room);
    } catch (error) {
        console.error(`Error happened while creating room: ${error}`);
    }
};

export const getDocument = async ({
    roomId,
    userId,
}: {
    roomId: string;
    userId: string;
}) => {
    try {
        const room = await liveblocks.getRoom(roomId);

        const hasAccess = Object.keys(room.usersAccesses).includes(userId);

        if (!hasAccess) {
            throw new Error("You don't have access to this document");
        }

        return parseStringify(room);
    } catch (error) {
        console.error(`Error happened while getting room: ${error}`);
    }
};