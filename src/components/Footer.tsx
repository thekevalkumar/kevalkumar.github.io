import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-slate-600 flex justify-between">
        <span>© {year} keval kumar</span>
        <nav className="space-x-4">
          <a href="https://github.com/thekevalkumar" target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="#" className="hover:underline">
            Twitter
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
