import { motion } from "framer-motion";
import { Code2, Database, Globe, Boxes } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "Vite", "Tailwind", "Framer Motion"],
    note: "Pixel‑perfect, accessible UI with smooth interactions",
  },
  {
    icon: Globe,
    title: "Backend",
    items: ["FastAPI", "Node/Express", "REST", "Auth"],
    note: "Clean APIs, validation, and sound error handling",
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma"],
    note: "Schema design, indexes, aggregation, and migrations",
  },
  {
    icon: Boxes,
    title: "Dev Practices",
    items: ["Git/GitHub", "CI basics", "Testing", "Docker"],
    note: "Modular architecture, readable code, and docs",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Skills that ship products</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              I focus on practical, job‑ready skills – building features end‑to‑end and explaining the
              trade‑offs behind each technical decision.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-medium">{s.title}</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {s.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-400">{s.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
