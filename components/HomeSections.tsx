'use client';

import TimelineSection from './TimelineSection';
import { experiences, type Experience } from '@/lib/experience';
import ProjectsSection from '@/components/ProjectsSection';
import { talks, type Talk } from '@/lib/talks';
import type { ProjectMeta } from '@/lib/markdown';

function ExperienceItem({ item }: { item: Experience }) {
    return (
        <div>
            <p className="text-primary text-lg font-medium leading-snug">{item.role}</p>
            {item.link ? (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary text-base mt-0.5 inline-flex items-center gap-0.5"
                >
                    {item.org} <span>↗</span>
                </a>
            ) : (
                <p className="text-secondary text-base mt-0.5">{item.org}</p>
            )}
        </div>
    );
}

function TalkItem({ item }: { item: Talk }) {
    return (
        <>
            {item.link ? (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-lg font-medium leading-snug"
                >
                    {item.title} <span>↗</span>
                </a>
            ) : (
                <p className="text-primary text-lg font-medium leading-snug">{item.title}</p>
            )}
            <p className="text-secondary text-base mt-0.5">{item.event}</p>
        </>
    );
}

export default function HomeSections({ projects }: { projects: ProjectMeta[] }) {
    return (
        <>
            <div id="experience">
                <TimelineSection
                    title="社群經歷"
                    items={experiences}
                    renderItem={(item) => <ExperienceItem item={item} />}
                    layout="horizontal"
                />
            </div>
            <div id="projects">
                <ProjectsSection projects={projects} />
            </div>
            <div id="talks">
                <TimelineSection
                    title="演講與發表"
                    items={talks}
                    renderItem={(item) => <TalkItem item={item} />}
                    layout="horizontal"
                />
            </div>
        </>
    );
}
