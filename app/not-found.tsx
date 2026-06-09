import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <Nav />

            <main className="flex flex-1 items-center justify-center px-6 py-24">
                <div className="flex w-full max-w-lg flex-col items-center gap-6 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue">
                        Page not found
                    </p>

                    <p className="text-7xl sm:text-8xl font-bold leading-none text-blue/20 select-none">
                        404
                    </p>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-primary">
                            這個頁面走丟了
                        </h1>
                        <p className="text-base text-secondary leading-relaxed">
                            你要找的連結可能已經移動、過期，或從來沒存在過。
                            <br className="hidden sm:block" />
                            不過別擔心，這裡還有很多東西可以逛。
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                        <Link
                            href="/"
                            className="bg-blue px-5 py-2 font-medium text-white hover:bg-blue-600 hover:text-white"
                        >
                            回首頁
                        </Link>
                        <a
                            href="https://blog.imych.one"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-200 px-5 py-2 text-secondary hover:border-blue"
                        >
                            逛逛部落格 ↗
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
