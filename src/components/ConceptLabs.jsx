import { motion } from "framer-motion";
import { Layers, NotebookPen, ShieldCheck, ShoppingCart } from "lucide-react";

const concepts = [
  {
    icon: ShoppingCart,
    title: "Commerce Core",
    summary:
      "End‑to‑end storefront: product catalog, cart, checkout, and order tracking with clean API contracts.",
    highlights: ["State management", "API integration", "Protected routes", "Responsive UI"],
    link: "https://github.com/",
  },
  {
    icon: ShieldCheck,
    title: "Auth + RBAC",
    summary:
      "Modern authentication with roles, session handling, and secure password flows. Includes API guards.",
    highlights: ["JWT", "Refresh tokens", "Role‑based access", "Validation"],
    link: "https://github.com/",
  },
  {
    icon: Layers,
    title: "Collab Notes",
    summary:
      "Real‑time markdown notes with presence, comments, and version history for teams.",
    highlights: ["WebSockets", "Optimistic UI", "CRDT basics", "Diff view"],
    link: "https://github.com/",
  },
  {
    icon: NotebookPen,
    title: "Learning Journal",
    summary:
      "Daily logs, code snippets, and design decisions. Transparent learning and reproducible steps.",
    highlights: ["Readable docs", "Snippets", "Diagrams", "Postmortems"],
    link: "https://github.com/",
  },
];

export default function ConceptLabs() {
  return (
    <section id="concepts" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Concept Labs (Projects without projects)</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Each lab is a focused case study showing architecture, trade‑offs, and working UI — perfect for
              demonstrating ability without traditional internships.
            </p>
          </div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
          >
            View on GitHub
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.04] p-5"
            >
              <div className="flex items-center gap-3">
                <c.icon className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-medium">{c.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{c.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex-1" />
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-emerald-300 underline-offset-4 hover:underline"
              >
                Explore README →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
