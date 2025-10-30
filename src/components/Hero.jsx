import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone, Rocket } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4c0Xb1v2kAou1qQ6/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlay to improve text readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur"
        >
          <Rocket className="h-4 w-4 text-emerald-400" />
          <span className="text-sm text-slate-200">B.Tech Final Year • Full‑Stack Developer in the making</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          Turning learning into products — even without certificates
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-slate-300"
        >
          I build real‑world features, document the thinking, and ship polished UI. This portfolio
          highlights hands‑on skills, Concept Labs, and open source proofs instead of paper credentials.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-slate-950 transition hover:bg-emerald-400"
          >
            <ArrowRight className="h-4 w-4" /> Let's talk
          </a>
          <a
            href="#concepts"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
          >
            Explore Concept Labs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex items-center gap-4"
        >
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
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
