import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content/projects');

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
  links: ProjectLink[];
  isPublished: boolean;
  isPage: boolean;
  isFeatured: boolean;
};

export type ProjectPost = ProjectMeta & {
  content: string;
};

function getMdPath(slug: string): string | null {
  const indexPath = path.join(CONTENT_DIR, slug, 'index.md');
  const flatPath = path.join(CONTENT_DIR, `${slug}.md`);
  if (fs.existsSync(indexPath)) return indexPath;
  if (fs.existsSync(flatPath)) return flatPath;
  return null;
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
  const slugs: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const indexPath = path.join(CONTENT_DIR, entry.name, 'index.md');
      if (fs.existsSync(indexPath)) slugs.push(entry.name);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      slugs.push(entry.name.replace(/\.md$/, ''));
    }
  }

  return slugs;
}

export function getProjectPost(slug: string): ProjectPost | null {
  const mdPath = getMdPath(slug);
  if (!mdPath) return null;

  const raw = fs.readFileSync(mdPath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ? String(data.date) : '',
    tags: data.tags ?? [],
    cover: data.cover,
    links: data.links ?? [],
    isPublished: data.isPublished ?? true,
    isPage: data.isPage ?? false,
    isFeatured: data.isFeatured ?? false,
    content,
  };
}

export function getAllProjectPosts(): ProjectMeta[] {
  const slugs = getAllProjectSlugs();
  return slugs
    .map((slug) => {
      const post = getProjectPost(slug);
      if (!post || !post.isPublished) return null;
      const { content: _, ...meta } = post;
      return meta;
    })
    .filter((p): p is ProjectMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
