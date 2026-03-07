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
        const next = isEn ? 'nl' : 'en';
        i18n.changeLanguage(next);
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
                <a href="#" className="font-display font-bold text-xl text-gradient tracking-tight">
                    {personalInfo.name}
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

                    {/* Language toggle pill */}
                    <button
                        onClick={toggleLang}
                        className="relative flex items-center w-16 h-8 rounded-full bg-dark-700 border border-white/10 cursor-pointer overflow-hidden transition-colors hover:border-accent-cyan/30"
                        aria-label={`Switch to ${isEn ? 'Dutch' : 'English'}`}
                    >
                        <motion.div
                            className="absolute w-7 h-6 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
                            animate={{ x: isEn ? 3 : 29 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        />
                        <span className="relative z-10 w-1/2 text-center text-xs font-semibold">EN</span>
                        <span className="relative z-10 w-1/2 text-center text-xs font-semibold">NL</span>
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
                        <div className="flex flex-col gap-2 p-4">
                            {navLinks.map((l) => (
                                <a
                                    key={l.key}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="text-sm text-white/70 hover:text-accent-cyan py-2 transition-colors"
                                >
                                    {t(l.key)}
                                </a>
                            ))}
                            <button
                                onClick={() => { toggleLang(); setOpen(false); }}
                                className="mt-2 self-start px-4 py-2 rounded-full text-xs font-semibold bg-dark-700 border border-white/10 hover:border-accent-cyan/30 transition-colors"
                            >
                                {isEn ? '🇳🇱 NL' : '🇬🇧 EN'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
