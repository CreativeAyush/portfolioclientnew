import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiEye } from 'react-icons/hi';
import SkillOrbit from '../components/SkillOrbit';
import { personalInfo, orbitSkills } from '../data';
import { useMousePosition } from '../hooks/useMousePosition';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useWindowSize } from '../hooks/useWindowSize';

export default function Hero() {
    const { t } = useTranslation();
    const mouse = useMousePosition();
    const reduced = useReducedMotion();
    const { width, height } = useWindowSize();

    // Responsive sizing logic
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isSmallDesktop = width >= 1024 && width < 1280;

    // Radius calculation based on viewport
    let innerR = 140;
    let outerR = 210;
    let profileSize = 170;

    if (isMobile) {
        innerR = width * 0.3;
        outerR = width * 0.5;
        profileSize = width * 0.35;
        // Clamp mobile sizes
        innerR = Math.max(90, Math.min(130, innerR));
        outerR = Math.max(160, Math.min(220, outerR));
        profileSize = Math.max(110, Math.min(160, profileSize));
    } else if (isTablet) {
        innerR = 120;
        outerR = 180;
        profileSize = 140;
    } else if (isSmallDesktop) {
        innerR = 130;
        outerR = 190;
        profileSize = 150;
    }

    const parallaxX = reduced ? 0 : mouse.x * 14;
    const parallaxY = reduced ? 0 : mouse.y * 14;

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-12 overflow-hidden"
        >
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
                {/* Left: Text + CTA — Always centered across breakpoints for better balance */}
                <motion.div
                    className="text-center max-w-2xl flex-1 z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    <p className="text-accent-cyan/70 text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-3">
                        {t('hero.greeting')}
                    </p>
                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                        <span className="text-gradient">{personalInfo.name}</span>
                    </h1>
                    <h2 className="text-xl sm:text-3xl font-display font-semibold text-white/85 mb-5">
                        {t('hero.title')}
                    </h2>
                    <p className="text-white/50 text-sm sm:text-lg leading-relaxed max-w-lg mx-auto mb-8 lg:mb-10">
                        {t('hero.subtitle')}
                    </p>

                    {/* CTA Buttons — centered justify-center */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-base px-8 py-3.5"
                        >
                            <HiEye className="text-xl" />
                            {t('hero.cta.resume')}
                        </a>
                        <a href="#contact" className="btn-outline text-base px-8 py-3.5">
                            <HiMail className="text-xl" />
                            {t('hero.cta.contact')}
                        </a>
                    </div>
                </motion.div>

                {/* Right: Orbit + Profile — reactive sizing */}
                <motion.div
                    className="relative flex items-center justify-center flex-shrink-0"
                    style={{
                        x: parallaxX,
                        y: parallaxY,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <SkillOrbit
                        skills={orbitSkills}
                        innerRadius={innerR}
                        outerRadius={outerR}
                    />

                    {/* Profile Image */}
                    <motion.div
                        className="absolute rounded-full overflow-hidden border-[4px] border-accent-cyan/40 shadow-[0_0_80px_rgba(0,229,255,0.3)] ring-4 ring-dark-900/50"
                        style={{ width: profileSize, height: profileSize }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
                    >
                        <img
                            src={personalInfo.profileImage}
                            alt={personalInfo.name}
                            className="w-full h-full object-cover scale-110"
                            loading="eager"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                    <div className="w-1 h-2 rounded-full bg-accent-cyan" />
                </div>
            </motion.div>
        </section>
    );
}
