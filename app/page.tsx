'use client';

import { useState } from 'react';
import { Check, Copy, Calendar } from 'lucide-react';
import Link from 'next/link';


export default function HomePage() {
    const [isCopied, setIsCopied] = useState(false);
    const email = 'hi@imych.one'; // Replace with actual email

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col items-center justify-center p-4">
            <h1 className="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">油成</h1>

            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6">
                <div className="flex items-center space-x-4">
                    <div className="flex-grow flex bg-white/20 rounded-2xl overflow-hidden">
                        <input
                            type="text"
                            value={email}
                            readOnly
                            className="flex-grow bg-transparent text-white p-3 outline-none placeholder-gray-400"
                        />
                        <button
                            onClick={handleCopy}
                            className="bg-transparent text-white p-3 hover:bg-white/10 transition-all duration-300 ease-in-out"
                        >
                            {isCopied ? (
                                <Check className="w-6 h-6 text-green-400" />
                            ) : (
                                <Copy className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                    <Link href="/cal" className="bg-white/20 text-white p-3 rounded-xl hover:bg-white/30 transition-all duration-300 ease-in-out">
                        <Calendar className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </main>
    );
}