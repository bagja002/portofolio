import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
    {
        name: 'fullstack',
        title: 'Fullstack Development',
        detail: 'End-to-end applications on Next.js, Node.js, and Go — from schema through to deployed interface.',
    },
    {
        name: 'backend',
        title: 'Backend Engineering',
        detail: 'Service architecture and REST APIs sized for real traffic, with the operational detail handled.',
    },
    {
        name: 'data',
        title: 'Data Analysis',
        detail: 'Turning operational datasets into the figures a decision actually rests on.',
    },
    {
        name: 'ai',
        title: 'AI Integration',
        detail: 'Machine learning models and LLMs applied where they earn their place in a system.',
    },
];

export default function Services() {
    return (
        <section id="skills" className="border-t border-rule py-20 md:py-24">
            <div className="term">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="cmd"
                >
                    ls ./capabilities
                </motion.p>

                <div className="mt-10 max-w-[80ch]">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={cap.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            viewport={{ once: true, margin: '-60px' }}
                            className="group grid gap-x-6 gap-y-1.5 border-b border-rule py-6 sm:grid-cols-[9rem_1fr]"
                        >
                            <span className="text-dim transition-colors group-hover:text-amber">
                                {cap.name}/
                            </span>
                            <div>
                                <h3 className="font-medium text-bright">{cap.title}</h3>
                                <p className="mt-1.5 text-body">{cap.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
