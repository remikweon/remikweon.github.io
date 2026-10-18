import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Project = () => {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          All Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Project;
