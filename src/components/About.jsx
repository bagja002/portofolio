import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Rocket, Users } from 'lucide-react';

export default function About() {
    const stats = [
        { icon: <Code2 className="w-6 h-6" />, value: '3', label: 'Years Experience' },
        { icon: <Rocket className="w-6 h-6" />, value: '8', label: 'Projects Delivered' },

    ];

    return (
        <section id="about" className="py-16 md:py-24 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16"
                >
                    <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">About Me</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] text-white mt-2">
                        From Self-Taught to{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-amber-500 bg-clip-text text-transparent">
                            Government Systems
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-base md:text-lg text-slate-300 leading-relaxed text-left md:text-justify">
                            Born in 2001, my journey into software development began in <span className="font-semibold text-white">2020</span> as a
                            self-taught developer during the pandemic. What started as curiosity quickly evolved into a passion for
                            building systems that solve real-world problems.
                        </p>

                        <p className="text-sm md:text-base text-slate-400 leading-relaxed text-left md:text-justify">
                            In <span className="text-slate-200">2023</span>, while still in university, I landed an internship as a
                            <span className="font-semibold text-white"> Software Engineer</span> at one of Indonesia's largest toll road companies.
                            There, I dove deep into <span className="text-slate-200">system integration and backend development</span>,
                            building a comprehensive procurement monitoring website to streamline and track procurement processes across the organization.
                        </p>

                        <p className="text-sm md:text-base text-slate-400 leading-relaxed text-left md:text-justify">
                            The experience proved invaluable—before even graduating in <span className="text-slate-200">2024</span>, I was already
                            working as an <span className="font-semibold text-white">Information System Logic Analyst</span> at the
                            <span className="font-semibold text-slate-200"> Ministry of Marine Affairs and Fisheries of Indonesia</span>. Here, I developed key systems including
                            <span className="text-slate-200"> Electronic Signature integration with Electronic Certification Center (BSRE)</span>, the <span className="text-slate-200">Fishery Crew Exam Application</span>,
                            and the <span className="text-slate-200">Fishery Cadets Management System</span>. I also built a nationwide <span className="text-slate-200">Performance Monitoring Application</span> for
                            training centers and utilized my expertise to optimize the <span className="text-slate-200">Fishery Crew Certificate Issuance System</span>.
                        </p>

                        <p className="text-sm md:text-base text-slate-400 leading-relaxed text-left md:text-justify">
                            Today, I specialize in <span className="text-slate-200">fullstack and backend development</span> with a strong focus
                            on system integration, microservices architecture, and building scalable solutions that stand the test of time.
                            My self-taught background gives me a unique perspective—I don't just code, I understand the <span className="text-slate-200">"why"</span>
                            behind every architectural decision.
                        </p>

                        {/* Skills Highlight */}
                        <div className="pt-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Core Competencies</h3>
                            <div className="flex flex-wrap gap-3">
                                {['System Integration', 'API Development', 'Microservices', 'Backend Architecture',
                                    'Database Design', 'DevOps & Cloud'].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats & Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-emerald-500/30 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-1 font-['Outfit']">{stat.value}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quote Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-amber-500/10 border border-emerald-500/20 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="text-6xl text-emerald-400/20 font-serif mb-2">"</div>

                                <p className="text-base text-slate-300 leading-relaxed italic mb-4">
                                    “So indeed, with hardship comes ease. Indeed, with hardship comes ease.”
                                </p>
                                <p className="text-sm text-slate-500">— QS. Al-Insyirah 5–6</p>


                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
