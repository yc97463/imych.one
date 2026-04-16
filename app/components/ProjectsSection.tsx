'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/lib/projects';

const VISIBLE_COUNT = 6;

function ProjectCard({ project, i }: { project: typeof projects[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: i * 0.05, ease: 'easeOut' }}
      className="relative rounded-2xl border border-white/10 bg-primary/50 overflow-hidden flex flex-col"
    >
      {/* sheen overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[8%] to-transparent pointer-events-none rounded-2xl" />

      {project.image && (
        <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="relative flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-white font-semibold text-base leading-snug">{project.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed flex-1">{project.description}</p>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200 px-3 py-1 text-xs text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = expanded ? projects : projects.slice(0, VISIBLE_COUNT);
  const hiddenProjects = projects.slice(VISIBLE_COUNT);

  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-6">專案</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} i={i} />
        ))}

        {/* Hidden cards that animate in */}
        <AnimatePresence>
          {expanded &&
            hiddenProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                i={VISIBLE_COUNT + i}
              />
            ))}
        </AnimatePresence>

        {/* Expand button — full-width grid item */}
        {!expanded && (
          <motion.button
            onClick={() => setExpanded(true)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3, delay: VISIBLE_COUNT * 0.05, ease: 'easeOut' }}
            className="col-span-1 sm:col-span-2 rounded-2xl border border-white/10 bg-primary/20 hover:bg-primary/30 transition-colors duration-200 flex items-center justify-center gap-2 py-4 text-white/60 hover:text-white"
          >
            <span className="text-sm">更多專案</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        )}
      </div>
    </section>
  );
}
