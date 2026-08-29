import React from 'react';
import { motion } from 'framer-motion';

const status = [
    ['role', 'Information System Logic Analyst'],
    ['org', 'KKP · BPPSDM — Ministry of Marine Affairs and Fisheries'],
    ['since', '2020'],
    ['shipped', '8 systems in production'],
    ['location', 'Jakarta, Indonesia · GMT+7'],
    ['available', 'yes — full-time or contract'],
];

export default function Hero() {
    const scrollTo = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="term pt-28 pb-20 md:pt-36 md:pb-28">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <p className="cmd">whoami</p>

                <h1 className="mt-6 text-[clamp(1.9rem,7.5vw,4.5rem)] font-semibold uppercase leading-[1.05] tracking-[-0.02em] text-bright">
                    Bagja Lazwardi
                </h1>

                <p className="mt-3 text-base text-dim sm:text-lg">
                    s.mat · backend &amp; systems engineer
                </p>

                <p className="mt-8 max-w-[68ch] text-body">
                    Builds the information systems that issue certificates, run competency
                    examinations, and track budget realisation across Indonesia&apos;s marine
                    and fisheries sector. System integration, service architecture, and the
                    unglamorous reliability that public infrastructure runs on.
                </p>
            </motion.div>

            {/* Portrait and status sit together: whoami returns a personnel
                record, and the plate is listed with its real file metadata. */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-12 grid max-w-[72ch] gap-6 sm:grid-cols-[13rem_1fr] sm:items-start"
            >
                <figure className="m-0 border border-rule p-2">
                    <img
                        src="./foto-profiile.jpeg"
                        alt="Bagja Lazwardi"
                        width="1201"
                        height="1600"
                        className="aspect-[3/4] w-full object-cover grayscale-[35%] transition-[filter] duration-500 hover:grayscale-0"
                    />
                    <figcaption className="mt-2 flex flex-wrap justify-between gap-x-3 text-[0.6875rem] text-dim">
                        <span>foto-profiile.jpeg</span>
                        <span className="tnum">1201×1600 · 122K</span>
                    </figcaption>
                </figure>

                <div className="frame">
                    <span className="frame-label">status</span>
                    <dl className="grid gap-y-1.5">
                        {status.map(([key, value]) => (
                            <div key={key} className="grid gap-x-4 sm:grid-cols-[6.5rem_1fr]">
                                <dt className="text-dim">{key}</dt>
                                <dd className={key === 'available' ? 'text-amber' : 'text-body'}>
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
            >
                <a
                    href="#projects"
                    onClick={(e) => scrollTo(e, '#projects')}
                    className="inline-flex w-fit items-center gap-2.5 border border-amber px-5 py-2.5 text-amber transition-colors hover:bg-amber hover:text-void"
                >
                    open ./register
                </a>
                <a
                    href="#contact"
                    onClick={(e) => scrollTo(e, '#contact')}
                    className="inline-flex w-fit items-center gap-2.5 border border-rule px-5 py-2.5 text-body transition-colors hover:border-rule-lit hover:text-bright"
                >
                    mail bagja
                </a>
            </motion.div>

            {/* The single moving element on the page. */}
            <p className="mt-12 flex items-center gap-2 text-dim">
                <span className="font-semibold text-amber">$</span>
                <span
                    aria-hidden="true"
                    className="cursor"
                />
            </p>
        </section>
    );
}
