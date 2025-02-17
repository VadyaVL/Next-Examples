import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import * as React from "react";

import "./globals.css";

import { Navigation } from "@/components/navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cook Book App",
    description: "Recipes and users",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <div className='layout'>
                    <header>
                        <Navigation />
                    </header>
                    <main>
                        {children}
                    </main>
                    <footer>
                        <p>© {new Date().getFullYear()} Усі права захищені</p>
                    </footer>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
