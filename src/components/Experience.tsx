import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-primary">#</span> Experience
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative pl-8 border-l-2 border-border"
        >
          <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Briefcase size={12} className="text-primary-foreground" />
          </div>

          <div className="rounded-xl border border-border bg-card p-6 card-hover">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
              <h3 className="text-lg font-bold font-mono text-foreground">
                Information Technology Institute (ITI)
              </h3>
              <span className="text-xs font-mono text-muted-foreground">Nov 2024 – May 2025</span>
            </div>
            <p className="text-primary text-sm font-medium mb-3">Full-Stack MERN Internship</p>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">▸</span>
                Completed a structured full-stack internship building a React frontend with API integration and a Node.js/Express REST API with JWT authentication.
              </li>
              <li className="text-sm text-secondary-foreground flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">▸</span>
                Delivered Taleex as the graduation project — an AI hiring platform integrating Vapi AI Voice Agents for real-time mock interviews.
              </li>
              <li className="text-sm text-secondary-foreground flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">▸</span>
                Strengthened communication, teamwork, and agile collaboration through workshops and team sprints.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
