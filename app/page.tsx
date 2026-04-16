'use client';

import { useState } from "react";
import { Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import ProjectsSection from "./components/ProjectsSection";
import TimelineSection from "./components/TimelineSection";
import { experiences, type Experience } from "@/lib/experience";
import { talks, type Talk } from "@/lib/talks";

function ExperienceItem({ item }: { item: Experience }) {
    return (
        <div>
            <p className="text-gray-900 text-lg font-medium leading-snug">{item.role}</p>
            {item.link ? (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-base mt-0.5 inline-flex items-center gap-0.5"
                >
                    {item.org} <span>↗</span>
                </a>
            ) : (
                <p className="text-gray-500 text-base mt-0.5">{item.org}</p>
            )}
        </div>
    );
}

function TalkItem({ item }: { item: Talk }) {
    return (
        <>
            {item.link ? (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 text-lg font-medium leading-snug"
                >
                    {item.title} <span>↗</span>
                </a>
            ) : (
                <p className="text-gray-900 text-lg font-medium leading-snug">{item.title}</p>
            )}
            <p className="text-gray-500 text-base mt-0.5">{item.event}</p>
        </>
    );
}

export default function HomePage() {
    const [isCopied, setIsCopied] = useState(false);
    const email = 'hi@imych.one';

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <main className="bg-gray-100 min-h-screen">
            {/* Nav */}
            <nav className="border-b border-gray-200 sticky top-0 z-50 bg-gray-100">
                <div className="max-w-[1800px] mx-auto px-6 h-14 flex items-center justify-between">
                    <Link href="/">
                        <Image src="/assets/yc-zh-name.svg" alt="油成" width={40} height={20} />
                    </Link>
                    <div className="flex gap-6 text-base">
                        <Link href="/" className="text-gray-500 hover:text-gray-900">Me</Link>
                        <a href="https://blog.imych.one" className="text-gray-500" target="_blank">Blog ↗</a>
                    </div>
                </div>
            </nav>

            {/* Hero / About */}
            <section id="about" className="w-full py-16">
                <div className="max-w-[1800px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Left: Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="aspect-video overflow-hidden bg-gray-100"
                        >
                            <Image
                                src="/assets/yc-avatar.webp"
                                alt="yc's avatar"
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Right: Text + contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="flex flex-col gap-6 pt-2"
                        >
                            <div>
                                <h1 className="font-bold text-gray-900 mb-5">
                                    <Image src="/assets/yc-zh-name.svg" alt="油成" width={100} height={50} />
                                </h1>
                                <div className="space-y-3 text-base text-gray-600 leading-relaxed">
                                    <p>嗨我是油成！是個從國中即開始秉持著以小工具的理念解決日常問題的大學生。</p>
                                    <p className="text-gray-900 font-medium hover:text-primary transition-colors py-2">
                                        工具雖小，卻能一再解決問題。
                                    </p>
                                    <p>累積超過 5 年的專案開發經驗，橫跨前後端框架；目前正在深入數學科學，朝跨領域工程師發展。</p>
                                    <p>也喜歡研究交通、人文與城市設計，著迷於發現人事物之間細微的關聯。</p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={handleCopy}
                                    className="text-base text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5"
                                >
                                    {isCopied ? (
                                        <><Check className="w-4 h-4 text-primary" /> Copied!</>
                                    ) : (
                                        <>{email}</>
                                    )}
                                </button>
                                <Link
                                    href="/cal"
                                    className="text-base text-gray-500"
                                >
                                    預約時間 ↗
                                </Link>
                                <Link
                                    href="https://blog.imych.one/now"
                                    className="text-base text-gray-500"
                                    target="_blank"
                                >
                                    最近在忙些 ↗
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="w-full border-t border-gray-100" />

            {/* Content sections */}
            <div className="w-full pb-24 pt-16">
                <div className="max-w-[1800px] mx-auto px-6 flex flex-col gap-16">
                    <TimelineSection
                        id="experience"
                        title="社群經歷"
                        items={experiences}
                        renderItem={(item) => <ExperienceItem item={item} />}
                        layout="horizontal"
                    />
                    <ProjectsSection id="projects" />
                    <TimelineSection
                        id="talks"
                        title="演講與發表"
                        items={talks}
                        renderItem={(item) => <TalkItem item={item} />}
                        layout="horizontal"
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full border-t border-gray-200">
                <div className="max-w-[1800px] mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Branding */}
                        <div className="flex flex-col gap-3">
                            <Image src="/assets/yc-zh-name.svg" alt="油成" width={56} height={28} />
                            <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
                                工具雖小，卻能一再解決問題。
                            </p>
                            <p className="text-xs tracking-widest uppercase text-gray-400">
                                built with curiosity
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col gap-2">
                            <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">Connect</p>
                            {[
                                { label: 'Email', href: 'mailto:hi@imych.one' },
                                { label: 'Blog', href: 'https://blog.imych.one', external: true },
                                { label: '最近在忙些', href: 'https://blog.imych.one/now', external: true },
                                { label: '預約時間', href: '/cal' },
                            ].map(({ label, href, external }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={external ? '_blank' : undefined}
                                    rel={external ? 'noopener noreferrer' : undefined}
                                    className="text-sm text-gray-500 inline-flex items-center gap-0.5 w-fit"
                                >
                                    {label}{external && <span className="text-xs">↗</span>}
                                </a>
                            ))}
                        </div>

                        {/* Meta */}
                        <div className="flex flex-col gap-2">
                            <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">Pages</p>
                            {[
                                { label: 'About', href: '/#about' },
                                { label: 'Experience', href: '/#experience' },
                                { label: 'Projects', href: '/#projects' },
                                { label: 'Talks', href: '/#talks' },
                            ].map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="text-sm text-gray-500 w-fit"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
