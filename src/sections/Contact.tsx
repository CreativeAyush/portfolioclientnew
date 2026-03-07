import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Contact() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(
            `Hi Deepika,\n\n${message}\n\n— ${name}\nReply to: ${email}`
        );
        window.open(
            `mailto:${personalInfo.email}?subject=${subject}&body=${body}`,
            '_blank'
        );
    };

    return (
        <SectionWrapper id="contact">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-4 text-center mx-auto block w-fit">
                {t('contact.title')}
            </h2>
            <p className="text-white/50 text-center text-sm mb-10 max-w-md mx-auto">
                {t('contact.subtitle')}
            </p>

            <div className="grid md:grid-cols-5 gap-8 max-w-3xl mx-auto">
                {/* Contact info */}
                <motion.div
                    className="md:col-span-2 space-y-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="glass p-5 space-y-4">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="flex items-center gap-3 text-sm text-white/70 hover:text-accent-cyan transition-colors"
                        >
                            <div className="w-9 h-9 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                                <HiMail className="text-accent-cyan" />
                            </div>
                            {personalInfo.email}
                        </a>
                        <a
                            href={`tel:${personalInfo.phone}`}
                            className="flex items-center gap-3 text-sm text-white/70 hover:text-accent-cyan transition-colors"
                        >
                            <div className="w-9 h-9 rounded-full bg-accent-violet/10 flex items-center justify-center">
                                <HiPhone className="text-accent-violet" />
                            </div>
                            {personalInfo.phone}
                        </a>
                        <div className="flex items-center gap-3 text-sm text-white/70">
                            <div className="w-9 h-9 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                                <HiLocationMarker className="text-accent-cyan" />
                            </div>
                            {personalInfo.location}
                        </div>
                    </div>
                </motion.div>

                {/* Contact form — opens mailto */}
                <motion.form
                    className="md:col-span-3 glass p-6"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-xs text-white/50 mb-1.5">
                                {t('contact.name')}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg bg-dark-700/60 border border-white/8 text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/40 focus:ring-1 focus:ring-accent-cyan/20 transition-colors"
                                placeholder={t('contact.name')}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs text-white/50 mb-1.5">
                                {t('contact.email')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg bg-dark-700/60 border border-white/8 text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/40 focus:ring-1 focus:ring-accent-cyan/20 transition-colors"
                                placeholder={t('contact.email')}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs text-white/50 mb-1.5">
                                {t('contact.message')}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg bg-dark-700/60 border border-white/8 text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-accent-cyan/40 focus:ring-1 focus:ring-accent-cyan/20 transition-colors resize-none"
                                placeholder={t('contact.message')}
                            />
                        </div>
                        <button type="submit" className="btn-primary w-full justify-center">
                            {t('contact.send')}
                        </button>
                    </div>
                </motion.form>
            </div>
        </SectionWrapper>
    );
}

