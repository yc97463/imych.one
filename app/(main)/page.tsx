'use client';

import { useState } from "react";
import { Check, Copy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import ProjectsSection from "../components/ProjectsSection";
import TimelineSection from "../components/TimelineSection";
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
        <main>
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
                                src="/assets/yc-and-ULB.jpeg"
                                alt="yc's avatar"
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                                priority
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
                                    <Image src="/assets/yc-zh-name.svg" alt="油成" width={100} height={53} style={{ height: 'auto' }} />
                                </h1>
                                <div className="space-y-3 text-base text-gray-600 leading-relaxed">
                                    <p>嗨我是油成！是個從國中即開始秉持著以小工具的理念解決日常問題的大學生。</p>
                                    <p className="text-gray-900 font-medium hover:text-primary transition-colors py-2">
                                        工具雖小，卻能一再解決問題。
                                    </p>
                                    <p>三個開發 hashtag #全端 #DevOps #Cloud。目前深入數學科學與資訊安全，朝跨領域工程師發展。</p>
                                    <p>此外，我也喜歡研究人文、交通與城市設計等議題，著迷於發現人事物之間細微的關聯。歡迎聊聊！</p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={handleCopy}
                                    className="text-base text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
                                >
                                    {isCopied ? (
                                        <><Check className="w-4 h-4 text-primary" /> Copied!</>
                                    ) : (
                                        <>{email} <Copy className="w-4 h-4" /></>
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
                                    最近忙這些 ↗
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content sections */}
            <div className="w-full">
                <div className="max-w-[1800px] mx-auto px-6 flex flex-col gap-16">
                    <div id="experience">
                        <TimelineSection
                            title="社群經歷"
                            items={experiences}
                            renderItem={(item) => <ExperienceItem item={item} />}
                            layout="horizontal"
                        />
                    </div>
                    <div id="projects">
                        <ProjectsSection />
                    </div>
                    <div id="talks">
                        <TimelineSection
                            title="演講與發表"
                            items={talks}
                            renderItem={(item) => <TalkItem item={item} />}
                            layout="horizontal"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
