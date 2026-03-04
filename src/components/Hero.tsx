import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowDown, FileText, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import CvContent from "@/components/CvContent";

const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(174 72% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(174 72% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]" 
        style={{ background: 'radial-gradient(circle, hsl(174 72% 50%), transparent)' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-full bg-linear-to-br from-primary to-primary/40 blur-xs opacity-60" />
            <img
              src="/profile.jpg"
              alt="Muhammed Refaat"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-2 border-primary/30"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest uppercase">
            Full-Stack Software Engineer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight mb-6"
        >
          Muhammed{" "}
          <span className="text-gradient">Refaat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Building production-grade web applications with the MERN stack & NestJS. 
          Focused on clean architecture, async systems, and AI-integrated tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <button
            onClick={() => setCvOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <FileText size={16} /> View CV
          </button>
          <a href="mailto:muhammedrefaat2020@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm">
            <Mail size={16} /> Email
          </a>
          <a href="https://www.linkedin.com/in/muhammedrefaat" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://github.com/MuhammedRefaatMetwally" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm">
            <Github size={16} /> GitHub
          </a>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm">
            <MapPin size={16} /> Cairo, Egypt
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors inline-block">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* CV Dialog */}
      <Dialog open={cvOpen} onOpenChange={setCvOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-mono flex items-center justify-between">
              My CV
              <a
                href="/Muhammed_Refaat_Resume.pdf"
                download
                className="inline-flex items-center gap-1.5 text-xs font-normal px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mr-6"
              >
                <Download size={14} /> Download
              </a>
            </DialogTitle>
            <DialogDescription>Full-Stack Software Engineer Resume</DialogDescription>
          </DialogHeader>
          <CvContent />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
