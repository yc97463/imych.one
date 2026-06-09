import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ShortlinkLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <Nav />
            {children}
            <Footer />
        </div>
    );
}
