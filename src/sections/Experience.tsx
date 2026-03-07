import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { experiences } from '../data';
import { HiExternalLink } from 'react-icons/hi';

export default function Experience() {
    const { t } = useTranslation();

    return (
        <SectionWrapper id="experience">
            <motion.h2
                className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                {t('experience.title')}
            </motion.h2>

            <div className="relative">
                {/* Timeline line */}
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-cyan/20 to-transparent" />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={exp.id}
                        className={`relative flex flex-col md:flex-row gap-4 mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: '-60px' }}
                        transition={{ duration: 0.7, delay: 0.15 + i * 0.2 }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(0,229,255,0.4)] z-10 mt-6" />

                        {/* Spacer */}
                        <div className="hidden md:block md:w-1/2" />

                        {/* Card */}
                        <motion.div
                            className="ml-10 md:ml-0 md:w-[calc(50%-2rem)] glass p-7 hover:border-accent-cyan/30 transition-all duration-500 shadow-xl"
                            whileHover={{ y: -5, scale: 1.01 }}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="font-display font-semibold text-white/90 text-base">
                                        {exp.role}
                                    </h3>
                                    <a
                                        href={exp.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-accent-cyan/80 hover:text-accent-cyan transition-colors"
                                    >
                                        {exp.company}
                                        <HiExternalLink className="text-xs" />
                                    </a>
                                </div>
                                <span className="text-xs text-white/40 whitespace-nowrap mt-1">{exp.period}</span>
                            </div>
                            <p className="text-xs text-white/40 mb-3">{exp.location}</p>
                            <ul className="space-y-2">
                                {exp.bullets.map((key) => (
                                    <li key={key} className="flex items-start gap-2 text-xs text-white/60">
                                        <span className="inline-block w-1 h-1 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                                        {t(key)}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
