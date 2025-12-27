import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">Get in Touch</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-['Outfit'] text-white mt-2 mb-6">
                        Let's Create{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-amber-500 bg-clip-text text-transparent">
                            Something Amazing
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss the latest in AI & Web Tech?
                        I'm always open to new opportunities.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">

                    {/* Large Email CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-8 md:mb-12"
                    >
                        <a
                            href="mailto:bagja@example.com"
                            className="group block p-6 sm:p-12 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-amber-500/10 border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
                        >
                            <div className="flex items-center justify-between flex-wrap gap-6">
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="p-3 sm:p-4 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                                        <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Email Me</p>
                                        <p className="text-lg sm:text-3xl font-bold text-white font-['Outfit'] group-hover:text-emerald-400 transition-colors break-all sm:break-normal">
                                            barjafaskan9@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>
                        </a>
                    </motion.div>

                    {/* Contact Info Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12"
                    >
                        {/* Location */}
                        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Location</p>
                                    <p className="text-lg font-semibold text-white">Jakarta, Indonesia</p>
                                    <p className="text-sm text-slate-400 mt-1">Available for remote work</p>
                                </div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                                    <Send className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Availability</p>
                                    <p className="text-lg font-semibold text-white">Open for Projects</p>
                                    <p className="text-sm text-slate-400 mt-1">Full-time or contract work</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4"
                    >
                        <p className="text-slate-500 text-sm">or connect via</p>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/bagja002"
                                target="_blank"
                                className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 transition-all"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bagja-lazwardi-221935174/"
                                target="_blank"
                                className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
