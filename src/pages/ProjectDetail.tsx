import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/" className="mt-4 inline-block underline">
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <h1 className="mb-4 text-4xl font-bold tracking-tight">
        {project.title}
      </h1>

      <p className="mb-6 text-lg text-gray-600">{project.description}</p>

      <div className="mb-10 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <img
        src={project.image}
        alt={project.title}
        className="mb-12 w-full rounded-xl object-cover"
      />

      <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
      <p className="leading-8 text-gray-700">{project.content}</p>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-medium underline"
        >
          View on GitHub
          <ExternalLink size={16} />
        </a>
      )}
    </main>
  );
};

export default ProjectDetail;
