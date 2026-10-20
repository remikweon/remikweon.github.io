
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { posts } from "../lib/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-2xl font-bold">
          Post not found
        </h1>

        <Link to="/blog" className="mt-4 inline-block underline">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <Link
        to="/blog"
        className="mb-12 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <article>
        <header className="mb-12 border-b border-gray-200 pb-10">
          <time className="text-sm text-gray-500">
            {post.date}
          </time>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {post.description}
          </p>
        </header>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
};

export default BlogPost;
