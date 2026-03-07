import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../data';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const isEn = i18n.language?.startsWith('en');

    const toggleLang = () => {
        const langs = ['en', 'nl', 'de'];
        const current = i18n.language?.split('-')[0] || 'en';
        const currentIndex = langs.indexOf(current);
        const nextIndex = (currentIndex + 1) % langs.length;
        i18n.changeLanguage(langs[nextIndex]);
    };

    const getCurrentLang = () => {
        const lang = i18n.language?.split('-')[0] || 'en';
        return lang.toUpperCase();
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-40 glass-strong"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
                {/* Logo */}
                <a href="#" className="font-display font-bold text-[10px] sm:text-xs tracking-[0.3em] uppercase group">
                    <span className="text-white/40 group-hover:text-white/60 transition-colors uppercase">{t('hero.greeting')}</span>
                    <span className="text-accent-cyan ml-2 drop-shadow-[0_0_8px_rgba(0,229,255,0.3)] uppercase">{personalInfo.name}</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((l) => (
                        <a
                            key={l.key}
                            href={l.href}
                            className="text-sm text-white/70 hover:text-accent-cyan transition-colors duration-200"
                        >
                            {t(l.key)}
                        </a>
                    ))}

                    {/* Language toggle button */}
                    <button
                        onClick={toggleLang}
                        className="relative flex items-center px-3 h-8 rounded-full bg-dark-700 border border-white/10 cursor-pointer transition-colors hover:border-accent-cyan/40 hover:bg-dark-600 group"
                        aria-label="Toggle language"
                    >
                        <span className="text-[10px] font-bold text-accent-cyan mr-2 opacity-50 group-hover:opacity-100 transition-opacity">
                            {getCurrentLang() === 'EN' ? '🇬🇧' : getCurrentLang() === 'DE' ? '🇩🇪' : '🇳🇱'}
                        </span>
                        <span className="text-xs font-bold text-white/90">
                            {getCurrentLang()}
                        </span>
                    </button>
                </div>

                {/* Mobile menu btn */}
                <button
                    className="md:hidden text-2xl text-white/80 hover:text-accent-cyan transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="md:hidden glass-strong mx-4 mb-4 rounded-xl overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col gap-1 p-5">
                            {navLinks.map((l) => (
                                <a
                                    key={l.key}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="text-sm font-medium text-white/70 hover:text-accent-cyan py-3 border-b border-white/5 last:border-0 transition-colors"
                                >
                                    {t(l.key)}
                                </a>
                            ))}
                            <div className="mt-4 pt-2 flex justify-center">
                                <button
                                    onClick={() => { toggleLang(); }}
                                    className="w-full py-3 rounded-xl text-xs font-bold bg-white/5 border border-white/10 hover:border-accent-cyan/30 transition-all flex items-center justify-center gap-3"
                                >
                                    <span className="text-lg">
                                        {getCurrentLang() === 'EN' ? '🇬🇧' : getCurrentLang() === 'DE' ? '🇩🇪' : '🇳🇱'}
                                    </span>
                                    <span>{getCurrentLang()} - Change Language</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
