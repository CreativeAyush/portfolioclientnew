import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, education, certifications } from '../data';
import { HiLocationMarker, HiMail, HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';

export default function About() {
    const { t } = useTranslation();

    return (
        <SectionWrapper id="about">
            <motion.h2
                className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                {t('about.title')}
            </motion.h2>

            <div className="grid md:grid-cols-5 gap-8">
                {/* Bio */}
                <div className="md:col-span-3 space-y-5">
                    <motion.div
                        className="glass p-6 space-y-4"
                        initial={{ opacity: 0, x: -40, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false, margin: '-50px' }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <p className="text-white/70 leading-relaxed text-sm sm:text-base">{t('about.p1')}</p>
                        <p className="text-white/70 leading-relaxed text-sm sm:text-base">{t('about.p2')}</p>
                        <p className="text-white/70 leading-relaxed text-sm sm:text-base">{t('about.p3')}</p>

                        <div className="flex flex-wrap gap-4 pt-4 text-xs text-white/50">
                            <span className="flex items-center gap-1">
                                <HiLocationMarker className="text-accent-cyan" />
                                {personalInfo.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <HiMail className="text-accent-violet" />
                                {personalInfo.email}
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Education & Certs */}
                <div className="md:col-span-2 space-y-4">
                    <motion.div
                        className="glass p-5"
                        initial={{ opacity: 0, x: 40, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false, margin: '-50px' }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-accent-cyan mb-3">
                            <HiAcademicCap /> Education
                        </h3>
                        {education.map((ed) => (
                            <div key={ed.period} className="mb-3 last:mb-0">
                                <p className="text-xs font-semibold text-white/80">{ed.degree}</p>
                                <p className="text-xs text-white/50">{ed.institution}</p>
                                <p className="text-xs text-white/40">{ed.period} · {ed.score}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="glass p-5"
                        initial={{ opacity: 0, x: 40, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false, margin: '-50px' }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                    >
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-accent-violet mb-3">
                            <HiBadgeCheck /> Certifications
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {certifications.map((c) => (
                                <span
                                    key={c.name}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-dark-700/80 border border-white/6 text-white/70 hover:border-accent-violet/30 hover:text-white/90 transition-colors"
                                >
                                    {c.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
