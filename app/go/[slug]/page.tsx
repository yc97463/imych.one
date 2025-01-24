import { shortlinks, Shortlink } from "@/../lib/shortlinks";
import RedirectTo from "@/components/RedirectTo";
import { Metadata } from "next";

// Define all possible static paths for the slug
export function generateStaticParams() {
    return shortlinks.map((link: Shortlink) => ({
        slug: link.slug,
    }));
}

// Dynamic route page component
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const link = shortlinks.find((link: Shortlink) => link.slug === slug);
    const name = link?.name;

    return {
        title: name ? `Redirecting to ${name}` : "Redirecting...",
        description: name ? `You are being redirected to ${name}` : "You are being redirected",
    };
}

export default async function RedirectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // Extract the slug from the params
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Find the destination based on the slug
    const link = shortlinks.find((link: Shortlink) => link.slug === slug);
    const name = link?.name;
    const url = link?.to;

    // Render the redirection component
    if (url) {
        return <RedirectTo to={url} name={name} />;
    } else {
        return <RedirectTo to="/" />;
    }
}
