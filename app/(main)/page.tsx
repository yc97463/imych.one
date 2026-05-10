import Link from 'next/link';
import Image from 'next/image';
import HomeSections from '@/components/HomeSections';
import CopyEmailButton from '@/components/CopyEmailButton';
import HomepageHero from '@/components/HomepageHero';
import { getAllProjectPosts } from '@/lib/markdown';

export default function HomePage() {
    const projects = getAllProjectPosts();


    return (
        <main>
            {/* Hero / About */}
            <section id="about" className="w-full py-16">
                <div className="max-w-[1800px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <HomepageHero />

                        <div className="flex flex-col gap-6 pt-2">
                            <div>
                                <h1 className="font-bold text-primary mb-5">
                                    <Image src="/assets/yc-zh-name.svg" alt="油成" width={100} height={53} style={{ height: 'auto' }} />
                                </h1>
                                <div className="space-y-3 text-base text-secondary leading-relaxed">
                                    <p>嗨我是油成！是個從國中即開始秉持著以小工具的理念解決日常問題的大學生。</p>
                                    <p className="text-primary font-medium hover:text-blue transition-colors py-2">
                                        工具雖小，卻能一再解決問題。
                                    </p>
                                    <p>三個開發 hashtag #全端 #DevOps #Cloud。目前深入數學科學與資訊安全，朝跨領域工程師發展。</p>
                                    <p>此外，我也喜歡研究人文、交通與城市設計等議題，著迷於發現人事物之間細微的關聯。歡迎聊聊！</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <CopyEmailButton email="hi@imych.one" />
                                <Link href="/cal" className="text-base text-secondary">
                                    預約時間 ↗
                                </Link>
                                <Link href="https://blog.imych.one/now" className="text-base text-secondary" target="_blank">
                                    最近忙這些 ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content sections */}
            <div className="w-full">
                <div className="max-w-[1800px] mx-auto px-6 flex flex-col gap-16">
                    <HomeSections projects={projects} />

                </div>
            </div>
        </main>
    );
}
