import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, education, certifications } from '../data';
import { HiLocationMarker, HiMail, HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { TbExternalLink } from 'react-icons/tb';

export default function About() {
    const { t } = useTranslation();

    return (
        <SectionWrapper id="about">
            <motion.h2
                className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                {t('about.title')}
            </motion.h2>

            <div className="grid lg:grid-cols-5 gap-10 items-start">
                {/* Left: Bio */}
                <motion.div
                    className="lg:col-span-3 glass-strong p-8 md:p-10"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="space-y-6 text-white/70 leading-relaxed text-base md:text-lg font-medium">
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                        <p>{t('about.p3')}</p>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/5">
                        <div className="flex items-center gap-2 text-xs font-bold text-white/40 tracking-wider">
                            <HiLocationMarker className="text-accent-cyan text-base" />
                            {personalInfo.location}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-white/40 tracking-wider">
                            <HiMail className="text-accent-violet text-base" />
                            {personalInfo.email}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Education & Certs */}
                <div className="lg:col-span-2 space-y-6">
                    <motion.div
                        className="glass p-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="flex items-center gap-3 text-sm font-bold text-accent-cyan uppercase tracking-[0.2em] mb-6">
                            <HiAcademicCap size={20} /> {t('about.education')}
                        </h3>
                        <div className="space-y-6">
                            {education.map((ed) => (
                                <div key={ed.degree} className="group/ed relative pl-4 border-l border-white/5 hover:border-accent-cyan/30 transition-colors">
                                    <div className="absolute -left-[1px] top-0 w-px h-0 bg-accent-cyan group-hover/ed:h-full transition-all duration-500" />
                                    {ed.link ? (
                                        <a
                                            href={ed.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-white/90 hover:text-accent-cyan transition-colors"
                                        >
                                            {ed.degree} <TbExternalLink size={12} className="opacity-40" />
                                        </a>
                                    ) : (
                                        <h4 className="text-sm font-bold text-white/90">{ed.degree}</h4>
                                    )}
                                    <p className="text-xs font-semibold text-white/50 mt-1">{ed.institution}</p>
                                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-wider mt-1">
                                        {ed.period} {ed.score ? `· ${ed.score}` : ''}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="glass p-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <h3 className="flex items-center gap-3 text-sm font-bold text-accent-violet uppercase tracking-[0.2em] mb-6">
                            <HiBadgeCheck size={20} /> {t('about.certifications')}
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {certifications.map((c) => (
                                <a
                                    key={c.name}
                                    href={c.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-[10px] font-bold bg-white/5 border border-white/5 text-white/60 hover:border-accent-violet/30 hover:text-white transition-all duration-300"
                                >
                                    {c.name}
                                    {c.link && <TbExternalLink size={10} className="opacity-30" />}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
