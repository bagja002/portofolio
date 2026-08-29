import React from 'react';
import { motion } from 'framer-motion';

const groups = [
    {
        name: 'languages',
        items: ['Go', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'C++', 'HTML/CSS'],
    },
    {
        name: 'frameworks',
        items: ['Fiber', 'Next.js', 'FastAPI', 'Flask', 'Laravel', 'TailwindCSS', 'Shadcn UI', 'Material-UI', 'Bootstrap', 'Framer Motion'],
    },
    {
        name: 'infrastructure',
        items: ['Docker', 'Linux', 'Nginx', 'GCP', 'GitHub Actions', 'Git'],
    },
    {
        name: 'datastores',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
        name: 'tooling',
        items: ['VS Code', 'Claude Code', 'GitHub Copilot', 'Codex', 'Antigravity', 'ChatGPT'],
    },
];

export default function TechStack() {
    return (
        <section id="stack" className="border-t border-rule py-20 md:py-24">
            <div className="term">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="cmd"
                >
                    stack --list
                </motion.p>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {groups.map((group, i) => (
                        <motion.div
                            key={group.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true, margin: '-60px' }}
                            className={`frame ${group.name === 'tooling' ? 'md:col-span-2' : ''}`}
                        >
                            <span className="frame-label">
                                {group.name}
                                <span className="tnum ml-2 text-rule-lit">
                                    {String(group.items.length).padStart(2, '0')}
                                </span>
                            </span>
                            <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                                {group.items.map((item) => (
                                    <li key={item} className="text-body transition-colors hover:text-amber">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
