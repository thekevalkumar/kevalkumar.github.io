import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
