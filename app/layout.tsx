
import "./globals.css";
import { Metadata } from 'next';
import { Roboto_Condensed, Noto_Sans_TC } from "next/font/google"

// import Header from './components/Header';
// import ContactSection from './components/ContactSection';
// import AboutSection from './components/AboutSection';
// import SkillsSection from './components/SkillsSection';

const notoSans = Noto_Sans_TC({
    variable: "--font-noto-sans-tc",
    preload: false
});

const robotoCondensed = Roboto_Condensed({
    variable: "--font-roboto-condensed",
    preload: false
});

export const metadata: Metadata = {
    title: 'yc97463 | 油成',
    description: 'About Me. 油成是個秉持著以小工具的理念解決日常問題的大三青年。',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/assets/youu.png',
    },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-Hant">
            <body className={`${robotoCondensed.variable} ${notoSans.variable}`}>
                {children}
                {/* <Header />
                    <main>
                    <ContactSection />
                    <AboutSection />
                    <SkillsSection />
                    {children}
                    </main> */
                }
            </body>
        </html>
    );
}