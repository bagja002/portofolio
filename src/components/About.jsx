import React from 'react';
import { motion } from 'framer-motion';

/**
 * The narrative is a real chronology, so it is set as a log: fixed-width
 * timestamps in the left column, entries aligned against them.
 */
const log = [
    {
        stamp: '2020',
        tag: 'init',
        heading: 'Self-taught, during the pandemic',
        body: 'Born 2001. Curiosity became a habit of building systems that solve real problems — no bootcamp, no CS degree, just a compiler and a lot of evenings.',
    },
    {
        stamp: '2023',
        tag: 'intern',
        heading: 'Software engineer, whilst still at university',
        body: 'Internship at one of Indonesia’s largest toll road companies. System integration and backend development, including a procurement monitoring platform tracking purchasing across the organisation.',
    },
    {
        stamp: '2024',
        tag: 'hired',
        heading: 'Information System Logic Analyst, KKP',
        body: 'Recruited by the Ministry of Marine Affairs and Fisheries before graduating. Shipped electronic signature integration with BSRE, the Fishery Crew Exam Application, and the Fishery Cadets Management System — plus nationwide performance monitoring for training centres, and optimisation of the Fishery Crew Certificate Issuance System.',
    },
    {
        stamp: 'now',
        tag: 'focus',
        heading: 'Fullstack and backend, by specialisation',
        body: 'System integration, microservices architecture, and solutions built to outlast their launch. The self-taught route left a habit worth keeping: understanding the why behind an architectural decision, not just the syntax.',
    },
];

export default function About() {
    return (
        <section id="about" className="border-t border-rule py-20 md:py-24">
            <div className="term">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="cmd"
                >
                    cat ./about.log
                </motion.p>

                <div className="mt-10 max-w-[80ch]">
                    {log.map((entry, i) => (
                        <motion.article
                            key={entry.stamp}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            viewport={{ once: true, margin: '-60px' }}
                            className="grid gap-x-6 gap-y-2 border-b border-rule py-7 sm:grid-cols-[9rem_1fr]"
                        >
                            <div className="flex gap-3 sm:block">
                                <span className="tnum text-amber">{entry.stamp}</span>
                                <span className="text-dim sm:mt-0.5 sm:block">[{entry.tag}]</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-bright">{entry.heading}</h3>
                                <p className="mt-2 text-body">{entry.body}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
