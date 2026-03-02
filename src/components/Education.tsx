import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Back-end Web Development Diploma (Node.js) — SFE Academy, Sep 2025",
  "Front-end Web Development Diploma (React.js) — SFE Academy, Jan 2024",
  "Data Structures & Algorithms — Cloud Native Base Camp, 2024",
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-primary">#</span> Education & Certifications
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-xl border border-border bg-card p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="font-mono text-primary text-sm font-semibold uppercase tracking-wide">Education</h3>
            </div>
            <h4 className="font-bold text-foreground mb-1">
              B.Sc. Computer & Information Sciences
            </h4>
            <p className="text-sm text-muted-foreground mb-1">Software Engineering</p>
            <p className="text-sm text-secondary-foreground">Mansoura University, Egypt</p>
            <p className="text-xs text-muted-foreground mt-2 font-mono">Sep 2020 – Jul 2024 · GPA: 3.0 / 4.0</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-xl border border-border bg-card p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award size={20} className="text-primary" />
              </div>
              <h3 className="font-mono text-primary text-sm font-semibold uppercase tracking-wide">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <li key={i} className="text-sm text-secondary-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
