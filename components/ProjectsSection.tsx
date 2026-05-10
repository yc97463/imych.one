'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { type ProjectMeta } from '@/lib/markdown';

const VISIBLE_COUNT = 6;

function ProjectCard({ project, i }: { project: ProjectMeta; i: number }) {
  const href = project.isPage
    ? `/projects/${project.slug}/`
    : project.links[0]?.href ?? '#';
  const isExternal = !project.isPage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: i * 0.05, ease: 'easeOut' }}
      whileHover={{ scale: 0.97 }}
      className="overflow-hidden flex flex-col gap-2 group"
    >
      <Link
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="overflow-hidden flex flex-col gap-2"
      >
        {project.cover && (
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300"
            />
          </div>
        )}

        <div className="flex flex-col flex-1 gap-2">
          <h3 className="text-primary font-semibold text-lg leading-snug group-hover:text-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-secondary text-sm leading-relaxed flex-1">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsSection({ projects }: { projects: ProjectMeta[] }) {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = expanded ? projects : projects.slice(0, VISIBLE_COUNT);
  const hiddenProjects = projects.slice(VISIBLE_COUNT);

  return (
    <section>
      <h1 className="text-lg tracking-widest uppercase text-secondary mb-4">專案</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} i={i} />
        ))}

        <AnimatePresence>
          {expanded &&
            hiddenProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} i={VISIBLE_COUNT + i} />
            ))}
        </AnimatePresence>
      </div>

      {!expanded && projects.length > VISIBLE_COUNT && (
        <motion.button
          onClick={() => setExpanded(true)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full hover:text-primary transition-colors duration-200 flex items-center justify-center gap-2 py-4 text-sm text-secondary tracking-wide uppercase"
        >
          更多專案
        </motion.button>
      )}
    </section>
  );
}
