import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold"
          >
            Let's build something great
          </motion.h3>
          <p className="mx-auto mt-2 max-w-2xl text-slate-300">
            I'm actively seeking full‑stack roles and internships. If you value strong fundamentals,
            clear communication, and fast learning — I'm your person.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:your.name@email.com"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-slate-950 transition hover:bg-emerald-400"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
