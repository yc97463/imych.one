import { Metadata } from 'next';
import Nav from '../components/Nav';

export const metadata: Metadata = {
    title: '油成的行事曆',
};

export default function CalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gray-100 h-dvh">
            <Nav />
            <div className="h-14" />
            {children}
        </div>
    );
}
