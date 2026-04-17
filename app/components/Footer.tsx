import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 mt-16">
            <div className="max-w-[1800px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Branding */}
                    <div className="flex flex-col gap-3">
                        <Image src="/assets/yc-zh-name.svg" alt="油成" width={56} height={30} style={{ height: 'auto' }} />
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
                            { label: '最近忙這些', href: 'https://blog.imych.one/now', external: true },
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
    );
}
