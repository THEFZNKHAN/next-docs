import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Provider from "./provider";
import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Next Docs",
    description: "A collaborative Live Docs app build using Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                variables: { colorPrimary: "#3371FF", fontSize: "16px" },
            }}
        >
            <html lang="en" suppressHydrationWarning>
                <head />
                <body
                    className={cn(
                        "min-h-screen font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    <Provider>
                        {children}
                    </Provider>
                </body>
            </html>
        </ClerkProvider>
    );
}
