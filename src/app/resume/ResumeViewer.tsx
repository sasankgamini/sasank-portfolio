"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumeViewer() {
  return (
    <div className="min-h-screen bg-black grid-bg">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">
            SG
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              &larr; Back
            </Link>
            <a
              href="/resume.pdf"
              download
              className="text-sm px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-12 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden">
            <iframe
              src="/resume.pdf"
              className="w-full h-[80vh] md:h-[85vh]"
              title="Sasank Gamini Resume"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
