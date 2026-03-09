import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Cpu,
  Globe,
  Smartphone,
  Server,
  Database,
  Menu,
  X,
  ChevronRight,
  BrainCircuit,
  Award,
  BookOpen,
  Newspaper
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    { name: 'C#', category: 'Backend' },
    { name: '.NET Core', category: 'Backend' },
    { name: 'ASP.NET MVC', category: 'Backend' },
    { name: 'Web API', category: 'Backend' },
    { name: 'SQL Server', category: 'Database' },
    { name: 'Dapper', category: 'Database' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Redux Toolkit', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'Axios/AJAX', category: 'Tools' },
    { name: 'Postman', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'OpenAI/Gemini', category: 'AI Tools' },
    { name: 'Bolt/Grok', category: 'AI Tools' },
  ];

  const projects = [
    {
      title: "Maha Kumbh 2025 FRB Attendance",
      description: "Automated attendance system for Prayagraj Mela Authority using facial recognition for real-time tracking across multiple departments.",
      tags: ["ASP.NET MVC", "Web API", "SQL Server"],
      link: "https://kumbh25.in",
      category: "government"
    },
    {
      title: "UP MDM (Mid-Day Meal)",
      description: "Centralized monitoring for meal distribution, school attendance, and compliance reporting across all of Uttar Pradesh.",
      tags: ["ASP.NET MVC", "Web API", "SQL Server"],
      link: "https://www.upmdm.in",
      category: "government"
    },
    {
      title: "Mission Prerna",
      description: "Community development and citizen service monitoring platform empowering the people of Uttar Pradesh.",
      tags: ["ASP.NET MVC", "Web API", "SQL Server"],
      link: "https://prernaup.in",
      category: "government"
    },
    {
      title: "Samaj Kalyan Attendance",
      description: "Centralized monitoring system for teaching/non-teaching staff across PS, UPS, KGBV, and Jai Prakash Narayan Sarvodaya Vidyalayas.",
      tags: ["ASP.NET MVC", "Web API", "SQL Server"],
      link: "https://skapv.samajkalyanup.in",
      category: "government"
    },
    {
      title: "The Pen Up",
      description: "News & Petition management portal allowing users to track petitions and admins to moderate content efficiently.",
      tags: ["ASP.NET MVC", "Web API", "SQL Server"],
      link: "http://www.thependown.com",
      category: "web"
    },
    {
      title: "Jyotish SaaS",
      description: "AI-enabled React application for birth kundali, planetary matchings, and real-time AI bot chats using OpenAI/Gemini.",
      tags: ["React", "Axios", "AI Bot", "Web API"],
      link: "#",
      category: "ai"
    },
    {
      title: "Event & Workshop Management",
      description: "AI-enabled tracking with participant analytics, predictive scheduling, and real-time reporting dashboards.",
      tags: ["Redux Toolkit", "Web API", "Analytics"],
      link: "#",
      category: "ai"
    },
    {
      title: "Asset Management System",
      description: "Web-based system tracking physical/digital assets with data-driven insights and maintenance planning.",
      tags: ["C#", "Dapper", "React"],
      link: "#",
      category: "ai"
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            MUKESH.
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors uppercase tracking-widest text-xs">
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden text-slate-200 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 py-6 px-6 flex flex-col space-y-4 shadow-xl">
            {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium py-2 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-2/3">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-semibold mb-6 uppercase tracking-wider">
              Software Developer | 3+ Years Experience
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Mukesh <span className="text-blue-500">Kumar</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto md:mx-0">
              Software Developer with 3+ years of experience in C#, ASP.NET, ASP.NET MVC, Web API, SQL Server, and React.js. Skilled in building scalable, secure, and AI-enabled web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all text-center">
                Explore Projects
              </a>
              <div className="flex items-center justify-center space-x-6 px-4 py-4 md:py-0">
                <a href="https://linkedin.com/in/mukesh-kumar-5ab2ab262" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:mukeshkumar25aug2019@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-1/3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-20"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 border border-white/10 aspect-square flex flex-col justify-center items-center text-center">
                <Database size={48} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white uppercase tracking-widest">Full Stack</h3>
                <p className="text-slate-500 text-sm mt-2 font-mono">C# .NET + SQL + React</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-4 sm:px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 sm:mb-16">Work Experience</h2>
          <div className="space-y-12">
            <div className="relative pl-6 sm:pl-8 border-l border-white/10">
              <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <div className="mb-2 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                <h3 className="text-lg sm:text-xl font-bold text-white">Technosys Services Private Limited</h3>
                <span className="text-blue-500 text-xs sm:text-sm font-mono font-bold">2023 — Present</span>
              </div>
              <p className="text-emerald-400 text-xs sm:text-sm font-semibold mb-4 tracking-wider uppercase italic">Software Developer</p>
              <ul className="space-y-3 text-slate-400 text-sm leading-relaxed list-disc list-inside">
                <li>Architected and optimized RESTful APIs in C# for large-scale government platforms.</li>
                <li>Implemented complex data-driven dashboards using React.js and Redux Toolkit.</li>
                <li>Delivered high-security facial recognition attendance systems for Maha Kumbh 2025.</li>
                <li>Specialized in performance tuning with Dapper, stored procedures, and SQL indexing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Portfolio Projects</h2>
              <p className="text-slate-400 text-sm sm:text-base">Government initiatives and AI-powered software solutions.</p>
            </div>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-white/10 self-start overflow-x-auto max-w-full">
              {['all', 'government', 'ai', 'web'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-[10px] sm:text-xs font-bold uppercase transition-all whitespace-nowrap ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div key={i} className="group bg-slate-900/50 rounded-2xl p-6 border border-white/5 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                      {project.category === 'government' ? <Globe size={20} /> : <BrainCircuit size={20} />}
                    </div>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-white/5 rounded text-slate-500 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-wider"
                    >
                      Visit Project <ChevronRight size={14} />
                    </a>
                  ) : (
                    <span className="text-[10px] text-slate-600 uppercase font-bold tracking-widest italic">Live link coming soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="p-4 bg-slate-950 border border-white/5 rounded-xl hover:border-blue-500/20 transition-all group">
                <p className="text-[9px] text-blue-500 font-mono mb-1 uppercase opacity-50">{skill.category}</p>
                <p className="text-slate-200 text-sm sm:text-base font-semibold group-hover:text-white transition-colors">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Info */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="text-blue-500" size={24} /> Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-500/20 pl-4">
                <p className="text-white font-bold text-sm sm:text-base">Bachelor of Technology (B.Tech)</p>
                <p className="text-blue-500 text-xs sm:text-sm">Computer Science & Engineering | 2026</p>
              </div>
              <div className="border-l-2 border-white/10 pl-4">
                <p className="text-white font-bold text-sm sm:text-base">Diploma</p>
                <p className="text-blue-500 text-xs sm:text-sm">Computer Science & Engineering | 2022</p>
              </div>
            </div>
          </div>
          <div id="contact">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Newspaper className="text-blue-500" size={24} /> Contact Details
            </h3>
            <div className="space-y-4 text-slate-400 text-sm sm:text-base">
              <p className="flex items-start gap-3"><Globe size={18} className="mt-1 flex-shrink-0" /> Pratapgarh, Uttar Pradesh</p>
              <p className="flex items-start gap-3"><Smartphone size={18} className="mt-1 flex-shrink-0" /> +91 9506207283</p>
              <p className="flex items-start gap-3"><Mail size={18} className="mt-1 flex-shrink-0 break-all" /> mukeshkumar25aug2019@gmail.com 
              <a href="mailto:mukeshkumar25aug2019@gmail.com" className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={18} /></a>

              </p>
              <p className="flex items-start gap-3"><Linkedin size={18} className="mt-1 flex-shrink-0 break-all" /> linkedin.com/in/mukesh-kumar-5ab2ab262
                <a href="https://linkedin.com/in/mukesh-kumar-5ab2ab262" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-[10px] sm:text-xs">
        <p className="mb-2 uppercase tracking-widest">Mukesh Kumar © 2026</p>
        <p className="text-slate-700">Software Developer Portfolio</p>
      </footer>
    </div>
  );
};

export default Portfolio;