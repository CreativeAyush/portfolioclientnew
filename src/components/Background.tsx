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
                        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07] animate-blob"
                        style={{
                            background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)',
                            animationDelay: '0s',
                        }}
                    />
                    <div
                        className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.05] animate-blob"
                        style={{
                            background: 'radial-gradient(circle, #b388ff 0%, transparent 70%)',
                            animationDelay: '4s',
                        }}
                    />
                    <div
                        className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full opacity-[0.06] animate-blob"
                        style={{
                            background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)',
                            animationDelay: '8s',
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
