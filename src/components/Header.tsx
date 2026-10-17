
const Header = () => {
  const blogUrl = "https://your-blog-url.com";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-end px-6">
        {/* Home */}
        {/* Navigation */}
        <div className="flex items-center gap-6 md:gap-10">
               <a
          href="#home"
         className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          Home
        </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Resume
          </a>

          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Blog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
