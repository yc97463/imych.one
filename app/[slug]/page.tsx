import { rootShortlinks, findShortlink, reservedSlugs } from "@/lib/shortlinks";
import RedirectTo from "@/components/RedirectTo";
import { Metadata } from "next";

// Pre-generate only the (non-reserved) shortlink slugs at the site root.
// Real top-level routes (/, /projects, /cal) are unaffected.
export function generateStaticParams() {
    return rootShortlinks().map((link) => ({
        slug: link.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const name = findShortlink(slug)?.name;

    return {
        title: name ? `Redirecting to ${name}` : "Redirecting...",
        description: name ? `You are being redirected to ${name}` : "You are being redirected",
    };
}

export default async function RootRedirectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Reserved slugs belong to real routes; don't hijack them.
    const link = reservedSlugs.includes(slug) ? undefined : findShortlink(slug);

    if (link?.to) {
        return <RedirectTo to={link.to} name={link.name} />;
    }
    return <RedirectTo to="/" />;
}
