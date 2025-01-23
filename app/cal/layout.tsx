import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '油成的行事曆',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-Hant">
            <body>
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