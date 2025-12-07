import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="about" className="mb-12">
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:w-2/3">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Hi, I'm Keval — a front-end developer building thoughtful web experiences.
          </h2>
          <p className="text-slate-600 mb-6">
            I focus on clean UI, performance and accessibility. I enjoy turning
            design into production-ready interfaces with modern tooling.
          </p>
          <div className="flex gap-3">
            <a
              href="#projects"
              className="inline-block px-4 py-2 bg-slate-900 text-white rounded-md hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-block px-4 py-2 border rounded-md text-slate-900 hover:bg-slate-50"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
          <div className="w-36 h-36 rounded-full bg-slate-200 flex items-center justify-center">
            <span className="text-slate-600">Your Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
