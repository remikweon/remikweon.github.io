
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

        <Link
          to="/projects"
          className="mt-4 inline-block underline"
        >
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Back Navigation */}
      <Link
        to="/projects"
        className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      {/* Project Header */}
      <h1 className="mb-4 text-4xl font-bold tracking-tight">
        {project.title}
      </h1>

      <p className="mb-6 text-lg text-gray-600">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-12 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-semibold">
          Overview
        </h2>

        <p className="whitespace-pre-line leading-8 text-gray-700">
          {project.content}
        </p>
      </section>

      {/* Project Images */}
      {project.images.length > 0 && (
        <section className="space-y-12">

          {project.images.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="space-y-4"
            >
              <div className="overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </div>

              {image.caption && (
                <figcaption className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-500">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </section>
      )}

      {/* GitHub Link */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 font-medium underline"
        >
          View on GitHub
          <ExternalLink size={16} />
        </a>
      )}
    </main>
  );
};

export default ProjectDetail;
