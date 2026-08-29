import React from 'react';
import { motion } from 'framer-motion';

const EMAIL = 'barjafaskan9@gmail.com';

const channels = [
    { key: 'email', value: EMAIL, href: `mailto:${EMAIL}` },
    { key: 'github', value: 'github.com/bagja002', href: 'https://github.com/bagja002' },
    {
        key: 'linkedin',
        value: 'in/bagja-lazwardi-221935174',
        href: 'https://www.linkedin.com/in/bagja-lazwardi-221935174/',
    },
];

export default function Contact() {
    return (
        <section id="contact" className="border-t border-rule py-20 md:py-24">
            <div className="term">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="cmd"
                >
                    mail --to bagja
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="mt-10"
                >
                    <h2 className="max-w-[46ch] text-[clamp(1.3rem,3.6vw,2.1rem)] font-semibold leading-tight text-bright">
                        Have a system that needs building?
                    </h2>

                    <a
                        href={`mailto:${EMAIL}`}
                        className="mt-8 inline-flex flex-wrap items-baseline gap-x-3 text-[clamp(1.05rem,4vw,2rem)] font-medium break-all text-amber transition-colors hover:text-bright"
                    >
                        <span className="text-dim">&gt;</span>
                        {EMAIL}
                    </a>

                    <dl className="mt-12 grid max-w-[68ch] gap-y-1.5">
                        {channels.map(({ key, value, href }) => (
                            <div key={key} className="grid gap-x-4 sm:grid-cols-[7rem_1fr]">
                                <dt className="text-dim">{key}</dt>
                                <dd>
                                    <a
                                        href={href}
                                        target={href.startsWith('mailto:') ? undefined : '_blank'}
                                        rel="noopener noreferrer"
                                        className="break-all text-body transition-colors hover:text-amber"
                                    >
                                        {value}
                                    </a>
                                </dd>
                            </div>
                        ))}
                        <div className="grid gap-x-4 sm:grid-cols-[7rem_1fr]">
                            <dt className="text-dim">location</dt>
                            <dd className="text-body">Jakarta, Indonesia · remote welcome</dd>
                        </div>
                        <div className="grid gap-x-4 sm:grid-cols-[7rem_1fr]">
                            <dt className="text-dim">reply</dt>
                            <dd className="text-body">within 24 hours, weekdays GMT+7</dd>
                        </div>
                    </dl>
                </motion.div>
            </div>
        </section>
    );
}
