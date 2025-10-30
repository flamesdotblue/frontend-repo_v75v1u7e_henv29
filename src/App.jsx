import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ConceptLabs from "./components/ConceptLabs";
import Contact from "./components/Contact";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="font-semibold tracking-tight">dev.portfolio</a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#skills" className="text-slate-300 hover:text-white">Skills</a>
          <a href="#concepts" className="text-slate-300 hover:text-white">Concept Labs</a>
          <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-lg bg-emerald-500 px-3 py-2 text-xs font-medium text-slate-950 transition hover:bg-emerald-400"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <Skills />
        <ConceptLabs />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name. Built with React + Tailwind.
      </footer>
    </div>
  );
}
