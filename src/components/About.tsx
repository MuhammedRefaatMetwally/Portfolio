import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-primary">#</span> About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-secondary-foreground leading-relaxed text-base md:text-lg"
        >
          <p>
            I'm a Full-Stack Software Engineer based in Cairo, Egypt, specializing in the <span className="text-foreground font-medium">MERN stack</span> and <span className="text-foreground font-medium">NestJS</span>. I hold a Bachelor's degree in Software Engineering from Mansoura University and completed an intensive Full-Stack internship at the <span className="text-foreground font-medium">Information Technology Institute (ITI)</span>.
          </p>
          <p>
            I build production-grade web applications with a strong focus on <span className="text-foreground font-medium">clean architecture</span>, <span className="text-foreground font-medium">async job processing</span>, and <span className="text-foreground font-medium">AI integration</span>. From real-time code review platforms to AI-powered hiring tools, I enjoy tackling complex problems and delivering efficient, user-centered solutions.
          </p>
          <p>
            I'm passionate about writing well-structured, maintainable code and continuously expanding my technical toolkit. Currently open to opportunities where I can contribute to impactful products and grow as an engineer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
