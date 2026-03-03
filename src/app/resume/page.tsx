import type { Metadata } from "next";
import ResumeViewer from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Resume | Sasank Gamini",
  description:
    "Sasank Gamini's resume — AI/ML Engineer, UC Berkeley CS & Statistics.",
};

export default function ResumePage() {
  return <ResumeViewer />;
}
