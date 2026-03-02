import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Kotlin"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "Node.js", "Express.js", "Prisma ORM", "BullMQ", "Socket.io", "JWT", "REST APIs", "Swagger"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Shadcn/UI", "React Query", "Zustand", "Zod", "React Hook Form"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Firebase", "Cloudinary", "GitHub API", "Gemini AI API", "Vite"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "Clean Architecture", "Async Processing", "RESTful APIs", "Agile", "MVVM"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-primary">#</span> Technical Skills
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
