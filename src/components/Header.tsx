import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Header = () => {
  const blogUrl = "https://your-blog-url.com";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-end px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Projects
          </Link>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Resume
          </a>

          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Blog
            <ExternalLink size={14} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
