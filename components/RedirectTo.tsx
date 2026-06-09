"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const REDIRECT_DELAY = 1200;

interface RedirectToProps {
    name?: string;
    to: string;
}

function hostnameOf(url: string): string {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return url;
    }
}

export default function RedirectTo({ name, to }: RedirectToProps) {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const isExternal = /^https?:\/\//i.test(to);

    useEffect(() => {
        // Kick off the progress bar fill on the next frame so the transition runs.
        const raf = requestAnimationFrame(() => setProgress(100));
        const timeout = setTimeout(() => router.push(to), REDIRECT_DELAY);
        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(timeout);
        };
    }, [to, router]);

    return (
        <main className="flex min-h-[70vh] items-center justify-center px-6">
            <div className="flex w-full max-w-md flex-col items-center gap-5 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue">
                    Redirecting
                </p>

                <h1 className="text-2xl font-bold leading-snug text-primary">
                    {name ?? "正在為您跳轉"}
                </h1>

                {isExternal && (
                    <p className="text-sm text-secondary">
                        即將前往{" "}
                        <span className="font-medium text-primary">{hostnameOf(to)}</span>
                    </p>
                )}

                <div className="h-1 w-44 overflow-hidden rounded-full bg-blue-50">
                    <div
                        className="h-full rounded-full bg-blue ease-linear"
                        style={{
                            width: `${progress}%`,
                            transitionProperty: "width",
                            transitionDuration: `${REDIRECT_DELAY}ms`,
                        }}
                    />
                </div>

                <a
                    href={to}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-sm text-secondary underline decoration-gray-300 underline-offset-4 hover:decoration-blue"
                >
                    沒有自動跳轉？點此前往{isExternal ? " ↗" : ""}
                </a>
            </div>
        </main>
    );
}
