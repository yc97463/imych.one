'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/lib/projects';

const VISIBLE_COUNT = 6;

function ProjectCard({ project, i }: { project: typeof projects[number]; i: number }) {
  const firstLink = project.links[0];
  const cardContent = (
    <>
      {project.image && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 gap-2">
        <h3 className="text-gray-900 font-semibold text-lg leading-snug">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        )} */}

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {project.links.map((link) => (
              <span
                key={link.label}
                className="text-sm text-gray-400 group-hover:text-primary transition-colors"
              >
                {link.label} ↗
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: i * 0.05, ease: 'easeOut' }}
      whileHover={{ scale: 0.97 }}
      className="overflow-hidden flex flex-col gap-2 group"
    >
      {firstLink ? (
        <a
          href={firstLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-hidden flex flex-col gap-2"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = expanded ? projects : projects.slice(0, VISIBLE_COUNT);
  const hiddenProjects = projects.slice(VISIBLE_COUNT);

  return (
    <section>
      <h1 className="text-lg tracking-widest uppercase text-gray-400 mb-4">專案</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} i={i} />
        ))}

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
      </div>

      {!expanded && projects.length > VISIBLE_COUNT && (
        <motion.button
          onClick={() => setExpanded(true)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full hover:text-gray-900 transition-colors duration-200 flex items-center justify-center gap-2 py-4 text-sm text-gray-400 tracking-wide uppercase"
        >
          更多專案
        </motion.button>
      )}
    </section>
  );
}
