const CvContent = () => {
  return (
    <div className="space-y-6 font-sans text-sm text-foreground">
      {/* Header */}
      <div className="text-center border-b border-border pb-4">
        <h2 className="text-xl font-bold font-mono">Muhammed Refaat Metwally</h2>
        <p className="text-muted-foreground text-xs mt-1">
          Cairo, Egypt · +20 127 156 1961 · muhammedrefaat2020@gmail.com
        </p>
        <div className="flex justify-center gap-3 mt-2">
          <a href="https://linkedin.com/in/muhammed-refaat" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs">LinkedIn</a>
          <a href="https://github.com/muhammed-refaat" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs">GitHub</a>
        </div>
      </div>

      {/* Professional Summary */}
      <div>
        <h3 className="text-sm font-bold font-mono text-primary uppercase tracking-wider mb-2">Professional Summary</h3>
        <p className="text-muted-foreground leading-relaxed">
          Aspiring Full-Stack Software Engineer specializing in the MERN stack and NestJS, with hands-on experience building production-grade web applications, REST APIs, and AI-integrated developer tools. Strong focus on clean architecture, async systems, and delivering efficient, user-centered solutions.
        </p>
      </div>

      {/* Work Experience */}
      <div>
        <h3 className="text-sm font-bold font-mono text-primary uppercase tracking-wider mb-2">Work Experience</h3>
        <div className="border-l-2 border-primary/30 pl-4">
          <h4 className="font-semibold">Information Technology Institute (ITI)</h4>
          <p className="text-xs text-muted-foreground mb-1">Full Stack MERN Internship · Nov 2024 – May 2025</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
            <li>Completed a structured full-stack internship building a React frontend with API integration and a Node.js/Express REST API with JWT authentication.</li>
            <li>Delivered Taleex as the graduation project — an AI hiring platform integrating Vapi AI Voice Agents for real-time mock interviews.</li>
            <li>Strengthened communication, teamwork, and agile collaboration skills through workshops and team sprints.</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h3 className="text-sm font-bold font-mono text-primary uppercase tracking-wider mb-2">Projects</h3>
        <div className="space-y-4">
          <div className="border-l-2 border-primary/30 pl-4">
            <h4 className="font-semibold">DevLens – AI-Powered PR Code Review Platform</h4>
            <p className="text-xs text-muted-foreground mb-1">Full Stack · Feb 2026 – Mar 2026</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
              <li>Built a full-stack AI code review tool using Gemini 1.5 Flash with structured per-file issue breakdown and quality scoring.</li>
              <li>Implemented async job processing using BullMQ and Redis for a non-blocking API.</li>
              <li>Architected a modular NestJS backend with AuthModule, GithubModule, and AnalysisModule.</li>
              <li>Developed a Next.js App Router frontend with React Query polling, Zustand auth store, and Shadcn/Tailwind dashboard.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-1">Stack: NestJS · Next.js · TypeScript · PostgreSQL · Prisma · BullMQ · Redis · Gemini AI · Docker</p>
          </div>

          <div className="border-l-2 border-primary/30 pl-4">
            <h4 className="font-semibold">FlowTask – Full-Stack Task Management App</h4>
            <p className="text-xs text-muted-foreground mb-1">Full Stack · Jan 2026 – Feb 2026</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
              <li>Built a Kanban task manager with NestJS + Prisma, JWT auth, real-time Socket.io updates, and drag-and-drop UI.</li>
              <li>Implemented Cloudinary file handling, Swagger docs, and Docker containerization.</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary/30 pl-4">
            <h4 className="font-semibold">Taleex – AI Hiring Platform</h4>
            <p className="text-xs text-muted-foreground mb-1">Frontend Developer · Apr 2025 – May 2025</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
              <li>Integrated Vapi AI Voice Agents for real-time mock interviews with automated recording.</li>
              <li>Built Admin Panel with RBAC, analytics, and OAuth (Google & LinkedIn).</li>
              <li>Managed state with React Query; responsive UI with Tailwind CSS and Shadcn/UI.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div>
        <h3 className="text-sm font-bold font-mono text-primary uppercase tracking-wider mb-2">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div><span className="font-semibold text-foreground">Languages:</span> JavaScript, TypeScript, Java, Kotlin</div>
          <div><span className="font-semibold text-foreground">Frameworks:</span> React, Next.js, Express, NestJS, Prisma, Docker</div>
          <div><span className="font-semibold text-foreground">Tools:</span> Git, Vite, Firebase, Swagger, Socket.io</div>
          <div><span className="font-semibold text-foreground">Databases:</span> MongoDB, SQL, PostgreSQL</div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-sm font-bold font-mono text-primary uppercase tracking-wider mb-2">Education</h3>
        <div className="border-l-2 border-primary/30 pl-4">
          <h4 className="font-semibold">Faculty of Computer & Information Sciences</h4>
          <p className="text-xs text-muted-foreground">BSc Software Engineering (GPA: 3.0/4.0) · Sep 2020 – Jul 2024</p>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-sm font-bold font-mono text-primary uppercase tracking-wider mb-2">Certifications</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
          <li>Back-end Web Development Diploma (Node JS) – SFE Academy (2025)</li>
          <li>Front-end Web Development Diploma (React JS) – SFE Academy (2024)</li>
          <li>Data Structures Decode – Cloud Native Base Camp (2024)</li>
          <li>Algorithms Analysis and Design – Cloud Native Base Camp (2024)</li>
        </ul>
      </div>

      {/* Languages */}
      <div>
        <h3 className="text-sm font-bold font-mono text-primary uppercase tracking-wider mb-2">Languages</h3>
        <p className="text-xs text-muted-foreground">Arabic (Native) · English (Professional)</p>
      </div>
    </div>
  );
};

export default CvContent;
