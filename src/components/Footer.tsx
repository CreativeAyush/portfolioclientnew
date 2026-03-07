import { personalInfo } from '../data';
import { SiLinkedin } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const socials = [
    { icon: SiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: HiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-white/40">
                    © {year} {personalInfo.name}. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    {socials.map((s) => {
                        const Icon = s.icon;
                        return (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-dark-700/60 border border-white/6 flex items-center justify-center text-white/50 hover:text-accent-cyan hover:border-accent-cyan/30 hover:shadow-[0_0_12px_rgba(0,229,255,0.15)] transition-all duration-200"
                                aria-label={s.label}
                            >
                                <Icon size={16} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
