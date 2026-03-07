import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { skills, skillCategories } from '../data';
import { TbCloud, TbDatabaseCog, TbHierarchy, TbShieldCheck, TbCloudUpload, TbApi } from 'react-icons/tb';

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
                className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-12 text-center mx-auto block w-fit"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                {t('skills.title')}
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((cat, i) => {
                    const categorySkills = skills.filter((s) => s.category === cat.category);
                    const CategoryIcon =
                        cat.category === 'cloud' ? TbCloud :
                            cat.category === 'data_eng' ? TbDatabaseCog :
                                cat.category === 'data_arch' ? TbHierarchy :
                                    cat.category === 'devops' ? TbCloudUpload :
                                        cat.category === 'governance' ? TbShieldCheck :
                                            TbApi;

                    return (
                        <motion.div
                            key={cat.key}
                            className="glass p-7 hover:border-accent-cyan/20 transition-all duration-500 group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                                    <CategoryIcon size={20} />
                                </div>
                                <h3 className="text-xs font-bold text-white/90 uppercase tracking-[0.2em]">
                                    {t(cat.key)}
                                </h3>
                            </div>

                            <motion.div
                                className="flex flex-wrap gap-2.5"
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
                                            whileHover={{
                                                scale: 1.05,
                                                y: -3,
                                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                                borderColor: 'rgba(255, 255, 255, 0.2)'
                                            }}
                                            className="group/skill flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-dark-700/40 border border-white/5 transition-all duration-300 cursor-default"
                                        >
                                            <div className="relative">
                                                <Icon
                                                    size={16}
                                                    style={{ color: skill.color }}
                                                    className="relative z-10 transition-transform group-hover/skill:rotate-12"
                                                />
                                                <div
                                                    className="absolute inset-0 blur-md opacity-0 group-hover/skill:opacity-40 transition-opacity"
                                                    style={{ backgroundColor: skill.color }}
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-white/60 group-hover/skill:text-white transition-colors">
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
