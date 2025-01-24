"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface RedirectToProps {
    name?: string;
    to: string;
}

export default function RedirectTo({ name, to }: RedirectToProps) {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push(to);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [to, router]);

    return (
        <header className="py-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-3xl font-bold">Redirecting {
                    name ? `to ${name}` : ""
                }...</h1>
            </div>
        </header>
    );
}