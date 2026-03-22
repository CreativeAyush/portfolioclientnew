import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { OrbitSkill } from '../data';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Props {
    skills: OrbitSkill[];
    innerRadius: number;
    outerRadius: number;
}

export default function SkillOrbit({ skills, innerRadius, outerRadius }: Props) {
    const [hovered, setHovered] = useState<string | null>(null);
    const reduced = useReducedMotion();

    const innerSkills = useMemo(() => skills.filter((s) => s.ring === 'inner'), [skills]);
    const outerSkills = useMemo(() => skills.filter((s) => s.ring === 'outer'), [skills]);

    const isHovering = hovered !== null;

    return (
        <div className="relative" style={{ width: outerRadius * 2 + 60, height: outerRadius * 2 + 60 }}>
            {/* Inner ring line */}
            <div
                className="orbit-ring"
                style={{ width: innerRadius * 2, height: innerRadius * 2 }}
            />
            {/* Outer ring line */}
            <div
                className="orbit-ring"
                style={{ width: outerRadius * 2, height: outerRadius * 2 }}
            />

            {/* Inner orbit */}
            <OrbitRing
                skills={innerSkills}
                radius={innerRadius}
                duration={reduced ? 0 : 30}
                direction={1}
                paused={isHovering}
                hovered={hovered}
                onHover={setHovered}
                containerSize={outerRadius * 2 + 60}
            />

            {/* Outer orbit */}
            <OrbitRing
                skills={outerSkills}
                radius={outerRadius}
                duration={reduced ? 0 : 45}
                direction={-1}
                paused={isHovering}
                hovered={hovered}
                onHover={setHovered}
                containerSize={outerRadius * 2 + 60}
            />
        </div>
    );
}

/* ─── Single Orbit Ring ─── */
interface OrbitRingProps {
    skills: OrbitSkill[];
    radius: number;
    duration: number;
    direction: 1 | -1;
    paused: boolean;
    hovered: string | null;
    onHover: (name: string | null) => void;
    containerSize: number;
}

function OrbitRing({
    skills,
    radius,
    duration,
    direction,
    paused,
    hovered,
    onHover,
    containerSize,
}: OrbitRingProps) {
    const center = containerSize / 2;
    const angleStep = (2 * Math.PI) / skills.length;

    return (
        <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ rotate: direction === 1 ? 360 : -360 }}
            transition={
                duration > 0
                    ? { repeat: Infinity, duration, ease: 'linear' }
                    : { duration: 0 }
            }
            style={{
                animationPlayState: paused ? 'paused' : 'running',
            }}
        >
            {/* Framer Motion handles pausing via whileHover, but we use a style override */}
            <motion.div
                className="w-full h-full"
                animate={paused ? { rotate: 0 } : {}}
                style={{ animationPlayState: paused && duration > 0 ? 'paused' : 'running' }}
            >
                {skills.map((skill, i) => {
                    const angle = angleStep * i;
                    const x = center + radius * Math.cos(angle) - 22;
                    const y = center + radius * Math.sin(angle) - 22;
                    const isActive = hovered === skill.name;

                    return (
                        <SkillIcon
                            key={skill.name}
                            skill={skill}
                            x={x}
                            y={y}
                            angle={angle}
                            direction={direction}
                            isActive={isActive}
                            onHover={onHover}
                        />
                    );
                })}
            </motion.div>
        </motion.div>
    );
}

/* ─── Individual Skill Icon ─── */
interface SkillIconProps {
    skill: OrbitSkill;
    x: number;
    y: number;
    angle: number;
    direction: 1 | -1;
    isActive: boolean;
    onHover: (name: string | null) => void;
}

function SkillIcon({ skill, x, y, angle, direction, isActive, onHover }: SkillIconProps) {
    const Icon = skill.icon;
    const distanceX = 45 * Math.cos(angle);
    const distanceY = 45 * Math.sin(angle);
    const tooltipX = 22 + distanceX;
    const tooltipY = 22 + distanceY;

    const handleFocus = useCallback(() => onHover(skill.name), [onHover, skill.name]);
    const handleBlur = useCallback(() => onHover(null), [onHover]);

    return (
        <motion.button
            className="absolute flex items-center justify-center w-11 h-11 rounded-full bg-dark-800/80 border border-white/10 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan pointer-events-auto"
            style={{
                left: x,
                top: y,
                color: skill.color,
                // Counter-rotate to keep icon upright
                rotate: direction === 1 ? -360 : 360,
                zIndex: isActive ? 50 : 10,
            }}
            animate={{
                scale: isActive ? 1.4 : 1,
                // counter-rotate is handled by the parent's inverse
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-label={skill.name}
            tabIndex={0}
        >
            {/* Glow */}
            <div
                className="skill-icon-glow"
                style={{
                    color: skill.color,
                    opacity: isActive ? 0.5 : 0.15,
                    boxShadow: `0 0 ${isActive ? 20 : 10}px ${skill.color}`,
                }}
            />
            <Icon size={20} />

            {/* Tooltip */}
            {isActive && (
                <motion.div
                    className="absolute px-3 py-1 rounded-lg bg-dark-700 border border-white/10 text-xs font-medium text-white whitespace-nowrap shadow-lg pointer-events-none"
                    style={{
                        left: tooltipX,
                        top: tooltipY,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 100,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    role="tooltip"
                >
                    {skill.name}
                </motion.div>
            )}
        </motion.button>
    );
}
