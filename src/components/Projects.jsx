import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        ref: 'E-LAUT',
        year: '2024',
        client: 'BPPSDM KP',
        title: 'E-LAUT Platform',
        category: 'systems',
        image: './elaut.png',
        description:
            'National platform for managing training, certification, and competency development across the marine and fisheries sector.',
        tech: ['Go', 'Fiber', 'Next.js', 'MySQL', 'Docker'],
        href: 'https://elaut-bppsdm.kkp.go.id/',
    },
    {
        id: 2,
        ref: 'E-LATAR',
        year: '2024',
        client: 'BPPSDM KP',
        title: 'E-LATAR Academic Platform',
        category: 'systems',
        image: './elatar.png',
        description:
            'Education management and digital learning for the ministry’s marine and fisheries academies.',
        tech: ['Go', 'Fiber', 'Next.js', 'MySQL', 'Docker'],
        href: 'https://elatar-bppsdm.kkp.go.id/',
    },
    {
        id: 3,
        ref: 'E-PROC',
        year: '2024',
        client: 'BPPSDM KP',
        title: 'E-PROC Sarpras Dashboard',
        category: 'systems',
        image: './e-proc.png',
        description:
            'Procurement, budgeting, and realisation monitoring for educational infrastructure — contracts, progress, and financial performance in one view.',
        tech: ['Go', 'Fiber', 'Next.js', 'MySQL', 'Chart.js'],
        href: 'http://eproc-bppsdm.ikulatluh.cloud/',
    },
    {
        id: 4,
        ref: 'SIKAP',
        year: '2024',
        client: 'DPKAKP',
        title: 'SIKAP — Sistem Informasi Ujian AKP',
        category: 'systems',
        image: './sikap.png',
        description:
            'Examination management for fishing vessel crew: scheduling, participants, execution, and evaluation against official certification standards.',
        tech: ['Go', 'Fiber', 'Next.js', 'MySQL'],
        href: 'https://sikap-dpkakp-dev.vercel.app/',
    },
    {
        id: 5,
        ref: 'SICEPATKU',
        year: '2024',
        client: 'BPPSDM KP',
        title: 'SICEPATKU — IKU Management System',
        category: 'systems',
        image: './siceppatku.png',
        description:
            'Key performance indicator tracking for training and extension programmes, reported end to end.',
        tech: ['Go', 'Fiber', 'Next.js', 'MySQL'],
        href: 'https://siceppatku.ikulatluh.cloud/',
    },
    {
        id: 6,
        ref: 'BMKG-EDA',
        year: '2023',
        client: 'independent',
        title: 'EDA Climate Data BMKG Jakarta',
        category: 'data',
        image: './EDA_Curah_Hujan.png',
        description:
            'Exploratory analysis and rainfall forecasting over 27 years of Jakarta climate records — cleaning, visualisation, and linear regression.',
        tech: ['Python', 'Pandas', 'Matplotlib', 'Scikit-Learn'],
        href: 'https://bisa.ai/portofolio/detail/Njk4',
    },
    {
        id: 7,
        ref: 'ANN-TEA',
        year: '2023',
        client: 'independent',
        title: 'Starbucks Tea Classification',
        category: 'data',
        image: './klasifikation-tea.png',
        description:
            'An artificial neural network classifying menu items by tea content, from preprocessing through to evaluation.',
        tech: ['Python', 'ANN', 'Machine Learning', 'Data Mining'],
        href: 'https://bisa.ai/portofolio/detail/NTYw',
    },
];

const filters = [
    { flag: '--all', value: 'all' },
    { flag: '--systems', value: 'systems' },
    { flag: '--data', value: 'data' },
];

const COLS = 'md:grid-cols-[7.5rem_4.5rem_9rem_1fr]';

export default function Projects() {
    const [filter, setFilter] = useState('all');

    const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

    const count = (value) =>
        value === 'all' ? projects.length : projects.filter((p) => p.category === value).length;

    return (
        <section id="projects" className="border-t border-rule py-20 md:py-24">
            <div className="term">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-2"
                >
                    <p className="cmd">cat ./register</p>
                    {filters.map(({ flag, value }) => (
                        <button
                            key={value}
                            onClick={() => setFilter(value)}
                            aria-pressed={filter === value}
                            className={`text-[0.8125rem] transition-colors ${filter === value ? 'text-amber' : 'text-dim hover:text-body'
                                }`}
                        >
                            {flag}
                            <span className="tnum ml-1.5 text-rule-lit">{count(value)}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Column header — the alignment below is real, not decorative. */}
                <div className={`label mt-10 hidden gap-x-6 border-b border-rule-lit pb-2 ${COLS} md:grid`}>
                    <span>ref</span>
                    <span>year</span>
                    <span>client</span>
                    <span>system</span>
                </div>

                <motion.div layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.article
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                className={`group grid gap-x-6 gap-y-4 border-b border-rule py-7 ${COLS}`}
                            >
                                <div className="flex flex-wrap gap-x-4 md:block">
                                    <span className="text-amber">{project.ref}</span>
                                    <span className="tnum text-dim md:hidden">{project.year}</span>
                                    <span className="text-dim md:hidden">{project.client}</span>
                                </div>
                                <span className="tnum hidden text-dim md:block">{project.year}</span>
                                <span className="hidden text-dim md:block">{project.client}</span>

                                <div>
                                    <h3 className="font-medium text-bright">{project.title}</h3>
                                    <p className="mt-2 max-w-[62ch] text-body">{project.description}</p>

                                    <div className="mt-4 max-w-lg border border-rule">
                                        <img
                                            src={project.image}
                                            alt={`${project.title} interface`}
                                            loading="lazy"
                                            className="aspect-[16/10] w-full object-cover object-top opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                                        />
                                    </div>

                                    <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.8125rem] text-dim">
                                        {project.tech.map((t) => (
                                            <span key={t}>{t}</span>
                                        ))}
                                    </p>

                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-2 text-body transition-colors hover:text-amber"
                                    >
                                        <span className="text-amber">&gt;</span>
                                        open
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
