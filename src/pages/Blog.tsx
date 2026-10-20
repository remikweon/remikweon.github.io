
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { posts } from "../lib/blog";

const Blog = () => {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Blog
        </h1>
      </div>

      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group block py-8 first:pt-0"
          >
            <time
              dateTime={post.date}
              className="text-sm text-gray-500"
            >
              {post.date}
            </time>

            <div className="mt-2 flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                {post.title}
              </h2>

              <ArrowUpRight
                size={20}
                className="shrink-0 text-gray-400"
              />
            </div>

            <p className="mt-3 leading-7 text-gray-600">
              {post.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Blog;
