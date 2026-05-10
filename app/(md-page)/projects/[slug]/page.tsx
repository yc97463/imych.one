import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowUpRight } from 'lucide-react';
import { getAllProjectSlugs, getProjectPost } from '@/lib/markdown';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs
    .map((slug) => {
      const post = getProjectPost(slug);
      if (!post || !post.isPublished || !post.isPage) return null;
      return { slug };
    })
    .filter(Boolean);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getProjectPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | yc97463`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      ...(post.cover ? { images: [{ url: post.cover }] } : {}),
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getProjectPost(slug);

  if (!post || !post.isPublished || !post.isPage) notFound();

  return (
    <>
      {post.cover && (
        <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <main className="max-w-[1800px] mx-auto px-6">
        {/* <Link
          href="/projects/"
          className="text-sm text-gray-400 hover:text-primary inline-flex items-center gap-1 mb-10 transition-colors"
        >
          ← Projects
        </Link> */}

        <article>
          <header className="my-4 flex flex-col gap-8 md:grid md:grid-cols-5">
            <div className="col-span-4 gap-4 flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 leading-snug">
                {post.title}
              </h1>

              {post.description && (
                <p className="text-gray-900 text-lg leading-relaxed">
                  {post.description}
                </p>
              )}
            </div>

            <div className="col-span-1 border border-gray-200 p-4 h-max overflow-hidden">
              {post.links.length > 0 ? (
                <div className="flex gap-4">
                  <div className="flex-1 min-w-0 text-gray-600">
                    <h2 className="text-sm font-semibold uppercase mb-2 transition-colors">年份</h2>
                    {post.date && (
                      <time className="text-lg group-hover:text-gray-400 transition-colors">{post.date.slice(0, 4)}</time>
                    )}
                  </div>
                  <a
                    href={post.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 group/link relative flex-1 min-w-0 border-l border-gray-200 pl-4 flex items-end transition-colors hover:bg-gray-900 -mr-4 pr-4 -my-4 py-4"
                  >
                    <span className="text-lg group-hover/link:text-white transition-colors truncate">{post.links[0].label}</span>
                    <ArrowUpRight strokeWidth={1} className="absolute top-2 right-2 w-8 h-8 group-hover/link:text-white transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="text-sm font-semibold text-gray-400 uppercase mb-2">年份</h2>
                  {post.date && (
                    <time className="text-lg text-gray-400">{post.date.slice(0, 4)}</time>
                  )}
                </>
              )}
            </div>
          </header>

          {/* a line */}
          <div className="md:w-full md:h-px md:bg-gray-200 my-8" />

          <div className="prose prose-gray max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </>
  );
}
