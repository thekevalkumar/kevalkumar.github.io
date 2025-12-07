import React from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tech?: string;
  url?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Personal Website",
    description: "This portfolio site built with Vite, React, TypeScript and Tailwind.",
    tech: "React · TypeScript · Tailwind",
    repo: "",
    url: "",
  },
  {
    id: "p2",
    title: "Project Two",
    description: "Short description of another project. Add details and links.",
    tech: "Next.js · Node",
    repo: "",
    url: "",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mt-8">
      <h3 className="text-2xl font-bold mb-6">Selected projects</h3>

      <div className="grid gap-6">
        {projects.map((p) => (
          <article key={p.id} className="p-6 border rounded-lg hover:shadow-sm">
            <h4 className="text-lg font-semibold">{p.title}</h4>
            <p className="text-slate-600 my-2">{p.description}</p>
            {p.tech && <p className="text-sm text-slate-500">{p.tech}</p>}
            <div className="mt-4 flex gap-3">
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-900 underline"
                >
                  Visit
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-900 underline"
                >
                  Source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
