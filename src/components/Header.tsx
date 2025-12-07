import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">keval kumar</h1>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
