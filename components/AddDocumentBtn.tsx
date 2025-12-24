"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { createDocument } from "@/lib/actions/room.actions";
import { toast } from "sonner";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const addDocumentHandler = async () => {
        setLoading(true);
        try {
            const room = await createDocument({ userId, email });

            if (room) {
                router.push(`/documents/${room.id}`);
                toast.success("Document created successfully!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to create document. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            type="submit"
            onClick={addDocumentHandler}
            className="gradient-blue flex gap-1 shadow-md"
            disabled={loading}
        >
            <Image
                src="/assets/icons/add.svg"
                alt="add"
                width={24}
                height={24}
            />

            <p className="hidden sm:block">
                {loading ? "Creating..." : "Start a blank document"}
            </p>
        </Button>
    );
};

export default AddDocumentBtn;
