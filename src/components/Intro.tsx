import { ExternalLink, Mail } from "lucide-react";


const Intro = () => {
  return (
    <section
      id="intro"
      className="mx-auto flex min-h-[85vh] max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 py-20 md:flex-row md:gap-20"
    >
      {/* Left: Introduction */}
      <div className="text-center md:text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Hi, I'm
        </p>

        <h1 className="mb-5 text-4xl font-medium tracking-tight text-gray-900 md:text-4xl">
          Yoonyoung Kweon.
        </h1>

        <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
          I'm a Master's student in Computer Science at {" "}
           <a
    href="https://www.gatech.edu/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900"
  >
    Georgia Institute of Technology
    <ExternalLink size={14} aria-hidden="true" />
  </a>
 a background in production software engineering. Before pursuing my master's degree, I worked as a Software Engineer at LINE for nearly four years, developing products including a cryptocurrency exchange platform, an NFT marketplace, and a game item payment platform.

I previously earned dual B.A. degrees in Aesthetics and Information Science from 
{" "}
<a
    href="https://en.snu.ac.kr/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900"
  > Seoul National University
      <ExternalLink size={14} aria-hidden="true" />
  </a>
. Currently, I'm also serving on the 2027 CRIDC Committee of Georgia Tech's Graduate Student Government Association (Graduate SGA).
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 md:justify-start">
          <a
            href="https://github.com/remikweon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/yoonyoungkweon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:ykweon32@gatech.edu"
            className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
        >
            <Mail size={18} aria-hidden="true" />
            Email
        </a>
        </div>
      </div>

      {/* Right: Profile Photo */}
      <div className="flex w-full max-w-[250px] flex-shrink-0 justify-center md:max-w-[300px]">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Yoonyoung Kweon"
          className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Intro;
