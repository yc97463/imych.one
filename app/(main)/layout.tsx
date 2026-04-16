import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Nav />
            {children}
            <Footer />
        </div>
    );
}
