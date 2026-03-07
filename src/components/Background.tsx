import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Background() {
    const reduced = useReducedMotion();

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />

            {/* Animated blobs */}
            {!reduced && (
                <>
                    <div
                        className="absolute -top-40 -left-20 w-[800px] h-[800px] rounded-full opacity-[0.12] animate-blob"
                        style={{
                            background: 'radial-gradient(circle, #00e5ff 0%, rgba(0, 229, 255, 0.2) 40%, transparent 70%)',
                            animationDelay: '0s',
                        }}
                    />
                    <div
                        className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.08] animate-blob"
                        style={{
                            background: 'radial-gradient(circle, #b388ff 0%, rgba(179, 136, 255, 0.2) 40%, transparent 70%)',
                            animationDelay: '4s',
                        }}
                    />
                    <div
                        className="absolute -bottom-60 left-1/4 w-[900px] h-[900px] rounded-full opacity-[0.1] animate-blob"
                        style={{
                            background: 'radial-gradient(circle, #00e5ff 0%, rgba(0, 229, 255, 0.1) 50%, transparent 80%)',
                            animationDelay: '8s',
                        }}
                    />
                    {/* Aurora effect */}
                    <div
                        className="absolute top-0 left-0 right-0 h-[50vh] opacity-[0.05] pointer-events-none"
                        style={{
                            background: 'linear-gradient(to bottom, #00e5ff, #0a0a12)',
                            filter: 'blur(100px)',
                        }}
                    />
                </>
            )}

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Noise overlay */}
            <div className="noise-overlay" />
        </div>
    );
}
