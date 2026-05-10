import ProjectsSection from '@/components/ProjectsSection';
import { getAllProjectPosts } from '@/lib/markdown';

export const metadata = {
  title: 'Projects | yc97463',
  description: '油成做過的專案。',
};

export default function ProjectsPage() {
  const projects = getAllProjectPosts();

  return (
    <>
      <main className="max-w-[1800px] mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Projects</h1>
        <ProjectsSection projects={projects} />
      </main>
    </>
  );
}
