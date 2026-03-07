import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data';
import ProjectModal from '../components/ProjectModal';
import type { Project } from '../data';
import { HiArrowRight } from 'react-icons/hi';

export default function Projects() {
    const { t } = useTranslation();
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <SectionWrapper id="projects">
            <motion.h2
                className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                {t('projects.title')}
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((proj, i) => (
                    <motion.div
                        key={proj.id}
                        className="glass p-7 group cursor-pointer hover:border-accent-cyan/20 transition-all duration-500 shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        onClick={() => setSelected(proj)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelected(proj)}
                        aria-label={`${proj.title} – ${t('viewDetails')}`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="font-display font-bold text-white/90 text-lg group-hover:text-accent-cyan transition-colors duration-300">
                                    {proj.title}
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mt-1">{proj.client}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors duration-300">
                                <HiArrowRight className="text-white/20 group-hover:text-accent-cyan group-hover:translate-x-0.5 transition-all text-sm" />
                            </div>
                        </div>

                        <p className="text-xs text-white/50 mb-6 leading-relaxed font-medium">
                            {t(proj.descriptionKey)}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {proj.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 rounded-lg text-[9px] font-bold bg-dark-600/50 text-white/40 border border-white/5 group-hover:border-accent-cyan/10 group-hover:text-white/60 transition-all duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selected && (
                    <ProjectModal project={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
}
