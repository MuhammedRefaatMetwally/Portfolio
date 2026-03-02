import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
            <span className="text-primary">#</span> Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-secondary-foreground mb-10 text-lg leading-relaxed max-w-xl mx-auto">
            I'm currently open to new opportunities and always happy to connect. 
            Whether you have a role in mind or just want to say hi — feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:muhammedrefaat2020@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} /> Say Hello
          </a>
          <a
            href="https://linkedin.com/in/muhammed-refaat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground hover:border-primary/50 transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/muhammed-refaat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground hover:border-primary/50 transition-colors"
          >
            <Github size={18} /> GitHub
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center text-xs text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} Muhammed Refaat · Built with passion</p>
      </div>
    </section>
  );
};

export default Contact;
