import React from 'react';
import { motion } from 'framer-motion';

const languages = [
    { name: 'JavaScript', color: 'border-yellow-500/50 hover:border-yellow-500 hover:text-yellow-400' },
    { name: 'TypeScript', color: 'border-blue-500/50 hover:border-blue-500 hover:text-blue-400' },
    { name: 'Python', color: 'border-emerald-500/50 hover:border-emerald-500 hover:text-emerald-400' },
    { name: 'Go', color: 'border-cyan-500/50 hover:border-cyan-500 hover:text-cyan-400' },
    { name: 'PHP', color: 'border-purple-500/50 hover:border-purple-500 hover:text-purple-400' },
    { name: 'SQL', color: 'border-pink-500/50 hover:border-pink-500 hover:text-pink-400' },
    { name: 'HTML/CSS', color: 'border-red-500/50 hover:border-red-500 hover:text-red-400' },
    { name: 'C++', color: 'border-indigo-500/50 hover:border-indigo-500 hover:text-indigo-400' },
];

const frameworks = [
    'Flask', 'FastAPI', 'Next.js', 'Laravel', 'Fiber',
    'TailwindCSS', 'Bootstrap', 'Material-UI', 'Shadcn UI', 'Framer Motion'
];

const tools = [
    'Git', 'Docker', 'GCP',
    'PostgreSQL', 'MongoDB', 'Redis', 'GitHub Actions', 'Nginx', 'Linux'
];

const ideTools = [
    'VS Code',
    'Claude Code', 'Antigravity', 'GitHub Copilot', 'Codex',
    'ChatGPT',
];

export default function TechStack() {
    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] text-white mb-4">
                        Tech Stack & Tools
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Technologies I work with to build scalable and efficient solutions
                    </p>
                </motion.div>

                {/* Programming Languages */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-white mb-6 font-['Outfit']">Programming Languages</h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        {languages.map((lang, index) => (
                            <motion.span
                                key={lang.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className={`px-5 py-2.5 bg-slate-900 border-2 rounded-lg text-slate-300 text-sm font-medium transition-all cursor-default ${lang.color}`}
                            >
                                {lang.name}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Frameworks & Libraries */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-white mb-6 font-['Outfit']">Frameworks & Libraries</h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        {frameworks.map((framework, index) => (
                            <motion.span
                                key={framework}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default"
                            >
                                {framework}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Tools & Platforms */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 font-['Outfit']">Tools & Platforms</h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        {tools.map((tool, index) => (
                            <motion.span
                                key={tool}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 text-sm hover:border-amber-500/50 hover:text-amber-400 transition-all cursor-default"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* IDE & AI Tools */}
                <div className="mt-16">
                    <h3 className="text-xl font-bold text-white mb-6 font-['Outfit']">IDE & AI Tools</h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        {ideTools.map((tool, index) => (
                            <motion.span
                                key={tool}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 text-sm hover:border-violet-500/50 hover:text-violet-400 transition-all cursor-default"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
