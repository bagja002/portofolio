import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-LAUT Platform',
        category: 'Fullstack Web Application',
        image: './elaut.png',
        description: 'A digital platform by BPPSDM KP – Ministry of Marine Affairs and Fisheries of Indonesia for managing training, certification, and competency development in the marine and fisheries sector.',
        tech: ['Next.Js', 'Tailwind', 'REST API', 'Go', 'Go Fiber', 'Docker', 'MySQL'],
        links: { demo: 'https://elaut-bppsdm.kkp.go.id/' }
    },

    {
        id: 2,
        title: 'E-LATAR Academic Platform',
        category: 'Fullstack Web Application',
        image: './elatar.png',
        description: 'A digital academic platform developed by BPPSDM KP – Ministry of Marine Affairs and Fisheries of Indonesia to support education management and digital learning transformation in the marine and fisheries sector.',
        tech: ['Next.Js', 'Tailwind', 'REST API', 'Go', 'Go Fiber', 'Docker', 'MySQL'],
        links: { demo: 'https://elatar-bppsdm.kkp.go.id/' }
    },

    {
        id: 3,
        title: 'E-PROC Sarpras Dashboard',
        category: 'Fullstack Web Application',
        image: './e-proc.png',
        description: 'A monitoring dashboard for procurement, budgeting, and realization of educational infrastructure modernization at BPPSDM KP, providing real-time insights into contracts, progress, and financial performance.',
        tech: ['Next.js', 'Golang', 'Fiber', 'MySQL', 'REST API', 'Chart.js'],
        links: { demo: 'http://eproc-bppsdm.ikulatluh.cloud/' }
    },

    {
        id: 4,
        title: 'SIKAP – Sistem Informasi Ujian AKP',
        category: 'Fullstack Web Application',
        image: './sikap.png',
        description: 'A web-based examination management system for Fishing Vessel Crew (Awak Kapal Perikanan), enabling scheduling, participant management, exam execution, monitoring, and evaluation of competency tests in accordance with official certification standards.',
        tech: ['Next.js', 'Golang', 'Fiber', 'MySQL', 'REST API'],
        links: { demo: 'https://sikap-dpkakp-dev.vercel.app/' }
    },

    {
        id: 5,
        title: 'SICEPATKU – IKU Management System',
        category: 'Fullstack Web Application',
        image: './siceppatku.png',
        description: 'A performance indicator management system designed to monitor, evaluate, and report Key Performance Indicators (IKU) related to training and extension programs, enabling data-driven decision-making and integrated performance tracking.',
        tech: ['Next.js', 'Golang', 'Fiber', 'MySQL', 'REST API', 'Dashboard Analytics'],
        links: { demo: 'https://siceppatku.ikulatluh.cloud/' }
    },

    {
        id: 6,
        title: 'EDA Climate Data BMKG Jakarta 1995–2022',
        category: 'Machine Learning / Data Science',
        image: './EDA_Curah_Hujan.png',
        description: 'Exploratory data analysis and rainfall prediction modeling using climate data from BMKG Jakarta (1995–2022), involving data cleaning, visualization, and linear regression forecasting.',
        tech: ['Python', 'Pandas', 'Matplotlib', 'Scikit-Learn', 'Data Analysis'],
        links: { demo: 'https://bisa.ai/portofolio/detail/Njk4' }
    },
    {
        id: 7,
        title: 'Starbucks Tea Classification',
        category: 'Machine Learning / Data Science',
        image: './klasifikation-tea.png',
        description: 'A machine learning classification project using Artificial Neural Network (ANN) to categorize Starbucks menu items based on tea content. The project involves data preprocessing, feature analysis, model training, and evaluation to distinguish tea-based and non-tea products.',
        tech: ['Python', 'Artificial Neural Network', 'Machine Learning', 'Data Mining'],
        links: { demo: 'https://bisa.ai/portofolio/detail/NTYw' }
    }


];

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Fullstack Web Application', 'Machine Learning / Data Science'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-16 md:py-20 bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400">A selection of my recent work.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid - New Design */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                key={project.id}
                                className="group relative bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300"
                            >
                                {/* Image with overlay */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-400 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-white mb-2 font-['Outfit'] group-hover:text-emerald-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-2 py-1 text-xs rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                                        <a href={project.links.github} className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                                            <Github size={16} />
                                            <span>Code</span>
                                        </a>
                                        <a href={project.links.demo} className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium">
                                            <span>View Project</span>
                                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
