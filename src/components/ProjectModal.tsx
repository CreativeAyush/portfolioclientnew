import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Project } from '../data';
import { HiX } from 'react-icons/hi';

interface Props {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
    const { t } = useTranslation();

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
                className="relative glass-strong max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white/60 hover:text-white hover:bg-dark-600 transition-colors"
                    aria-label={t('modal.close')}
                >
                    <HiX />
                </button>

                <h3 className="font-display text-xl font-bold text-gradient mb-1">
                    {project.title}
                </h3>
                <p className="text-sm text-white/50 mb-4">{project.client}</p>

                <p className="text-sm text-white/70 mb-5 leading-relaxed">
                    {t(project.descriptionKey)}
                </p>

                <ul className="space-y-3 mb-6">
                    {project.bullets.map((key) => (
                        <li key={key} className="flex items-start gap-2 text-sm text-white/60">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                            {t(key)}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent-violet/10 text-accent-violet/80 border border-accent-violet/15"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
