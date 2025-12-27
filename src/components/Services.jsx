import React from 'react';
import { motion } from 'framer-motion';
import { Database, Monitor, Brain, BarChart, Server, Layers } from 'lucide-react';

const services = [
    {
        icon: <Monitor className="w-8 h-8 text-emerald-400" />,
        title: 'Fullstack Development',
        description: 'Building end-to-end web applications using modern tech stacks like Next.js, Node.js, and Golang.',
    },
    {
        icon: <Brain className="w-8 h-8 text-amber-400" />,
        title: 'AI Integration',
        description: 'Implementing Machine Learning models and LLMs to create intelligent, adaptive systems.',
    },
    {
        icon: <BarChart className="w-8 h-8 text-cyan-400" />,
        title: 'Data Analysis',
        description: 'Extracting actionable insights from complex datasets to drive informed decision-making.',
    },
    {
        icon: <Server className="w-8 h-8 text-orange-400" />,
        title: 'Backend Engineering',
        description: 'Designing scalable microservices and robust API architectures for high-performance apps.',
    },
];

export default function Services() {
    return (
        <section id="skills" className="py-16 md:py-20 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] text-white mb-4">
                        My Expertise
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolset to tackle any technical challenge.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group"
                        >
                            <div className="mb-4 p-3 rounded-xl bg-slate-800 w-fit group-hover:bg-slate-800/80 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-['Outfit']">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
