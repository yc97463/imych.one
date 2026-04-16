'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
    return (
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
    );
}
