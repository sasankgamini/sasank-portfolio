"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">About</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-8" />

          <div className="glass-card p-8 md:p-10">
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                I&apos;m a Computer Science &amp; Statistics student at{" "}
                <span className="text-white font-medium">UC Berkeley</span>{" "}
                (GPA: 3.95) passionate about building AI systems that ship to
                production.
              </p>
              <p>
                I&apos;ve built infrastructure at{" "}
                <span className="text-white font-medium">Meta</span> and{" "}
                <span className="text-white font-medium">AppLovin</span>,
                working on everything from stream processing reaper systems that
                save $138K/year to AI agents that auto-generate documentation. I
                thrive at the intersection of applied ML, platform engineering,
                and startup building.
              </p>
              <p>
                When I&apos;m not shipping code, I&apos;m hacking at hackathons
                (multiple wins), building startups like Rentora, or
                experimenting with LLMs and intelligent systems.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "AI/ML Systems",
                  "Applied LLMs",
                  "Platform Engineering",
                  "Startup Building",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
