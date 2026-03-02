import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DevLens",
    subtitle: "AI-Powered PR Code Review Platform",
    period: "Jan 2026 – Mar 2026",
    description:
      "A full-stack AI code review tool that fetches GitHub PR diffs via the Octokit API, processes them through Gemini 1.5 Flash, and returns structured reports with per-file issue breakdown and a 0–100 quality score.",
    highlights: [
      "Async job processing with BullMQ and Redis — non-blocking, timeout-free API",
      "Modular NestJS backend: AuthModule, GithubModule, AnalysisModule with global exception filter",
      "Next.js frontend with React Query polling, Zustand auth, Zod validation, responsive Shadcn dashboard",
    ],
    stack: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "BullMQ", "Redis", "Gemini AI", "Docker"],
    links: [
      { label: "API", url: "#", icon: "github" },
      { label: "Web", url: "#", icon: "github" },
    ],
  },
  {
    title: "Taleex",
    subtitle: "AI Hiring Platform — ITI Graduation Project",
    period: "Apr 2025 – May 2025",
    description:
      "An AI-powered hiring platform with real-time mock interviews using Vapi AI Voice Agents, featuring automated audio/video recording, admin panel with role-based access, and OAuth authentication.",
    highlights: [
      "Integrated Vapi AI Voice Agents for real-time mock interviews",
      "Built admin panel with role-based access controls and analytics",
      "OAuth authentication with Google & LinkedIn",
    ],
    stack: ["React", "Tailwind CSS", "Shadcn/UI", "React Query", "Vapi AI"],
    links: [
      { label: "Live Demo", url: "https://taleex.vercel.app", icon: "external" },
    ],
  },
  {
    title: "FlowTask",
    subtitle: "Full-Stack Task Management App",
    period: "Jan 2026 – Feb 2026",
    description:
      "A Kanban task manager with real-time board updates, drag-and-drop UI, JWT authentication, file handling via Cloudinary, and full Docker containerization.",
    highlights: [
      "NestJS + Prisma ORM backend with JWT auth and real-time Socket.io updates",
      "Drag-and-drop Kanban UI with dnd-kit",
      "API docs with Swagger/OpenAPI, containerized with Docker",
    ],
    stack: ["NestJS", "Prisma", "Socket.io", "React", "dnd-kit", "Docker", "Cloudinary"],
    links: [
      { label: "Live Demo", url: "#", icon: "external" },
      { label: "Backend", url: "#", icon: "github" },
      { label: "Frontend", url: "#", icon: "github" },
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-primary">#</span> Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6 md:p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                  {project.period}
                </span>
              </div>

              <p className="text-secondary-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-5">
                {project.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    {link.icon === "github" ? <Github size={14} /> : <ExternalLink size={14} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
