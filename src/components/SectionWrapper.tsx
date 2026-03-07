import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Props {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({ children, className = '', id }: Props) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false, margin: '-80px' });
    const reduced = useReducedMotion();

    return (
        <motion.section
            ref={ref}
            id={id}
            className={`section-padding max-w-6xl mx-auto ${className}`}
            initial={reduced ? {} : { opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
            {children}
        </motion.section>
    );
}
