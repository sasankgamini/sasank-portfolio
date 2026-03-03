"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const titles = ["AI/ML Engineer", "Full-Stack Builder", "UC Berkeley '26"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  const tick = useCallback(() => {
    const currentTitle = titles[titleIndex];

    if (!isDeleting) {
      setText(currentTitle.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
      if (charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setText(currentTitle.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
      if (charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
    }
  }, [charIndex, isDeleting, titleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-glow pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-glow pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-widest text-zinc-500 uppercase mb-6"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Sasank Gamini</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 mb-4 h-8"
        >
          <span>{text}</span>
          <span className="animate-pulse text-blue-400">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-500 max-w-xl mx-auto mb-10"
        >
          Building intelligent systems at the intersection of AI,
          infrastructure, and startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/resume"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
          >
            View Resume
          </a>
          <a
            href="https://github.com/sasankgamini"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/[0.15] text-white hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sasankgamini"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/[0.15] text-white hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-full border border-white/[0.15] text-white hover:bg-white/10 transition-colors"
          >
            Contact
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-zinc-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
