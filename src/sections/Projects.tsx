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
                        className="glass p-6 group cursor-pointer hover:border-white/12 transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                        whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                        style={{ transformPerspective: 800 }}
                        onClick={() => setSelected(proj)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelected(proj)}
                        aria-label={`${proj.title} – ${t('viewDetails')}`}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="font-display font-semibold text-white/90 text-base group-hover:text-accent-cyan transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-xs text-white/40">{proj.client}</p>
                            </div>
                            <HiArrowRight className="text-white/20 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all mt-1" />
                        </div>

                        <p className="text-xs text-white/60 mb-4 leading-relaxed">
                            {t(proj.descriptionKey)}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                            {proj.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-accent-cyan/8 text-accent-cyan/70 border border-accent-cyan/10"
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
