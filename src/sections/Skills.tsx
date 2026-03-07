import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { skills, skillCategories } from '../data';

export default function Skills() {
    const { t } = useTranslation();

    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.06 },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 },
    };

    return (
        <SectionWrapper id="skills">
            <motion.h2
                className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                {t('skills.title')}
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-6">
                {skillCategories.map((cat, i) => {
                    const categorySkills = skills.filter((s) => s.category === cat.category);
                    return (
                        <motion.div
                            key={cat.key}
                            className="glass p-6 hover:border-white/10 transition-colors duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                        >
                            <h3 className="text-sm font-semibold text-accent-cyan mb-4 uppercase tracking-wider">
                                {t(cat.key)}
                            </h3>
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false }}
                            >
                                {categorySkills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={item}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-dark-700/60 border border-white/5 hover:border-white/15 transition-all duration-200 cursor-default"
                                        >
                                            <Icon
                                                size={16}
                                                style={{ color: skill.color }}
                                                className="transition-transform group-hover:scale-110"
                                            />
                                            <span className="text-xs font-medium text-white/70 group-hover:text-white/90 transition-colors">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
