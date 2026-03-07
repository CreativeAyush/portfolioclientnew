/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    950: '#050508',
                    900: '#0a0a12',
                    800: '#10101c',
                    700: '#181828',
                    600: '#22223a',
                },
                accent: {
                    cyan: '#00e5ff',
                    violet: '#b388ff',
                    cyanDim: '#00b8d4',
                    violetDim: '#9c64ff',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'noise': "url('/noise.svg')",
            },
            animation: {
                'orbit-slow': 'orbit 30s linear infinite',
                'orbit-fast': 'orbit 20s linear infinite',
                'orbit-reverse': 'orbit-reverse 25s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'blob': 'blob 12s ease-in-out infinite',
            },
            keyframes: {
                orbit: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'orbit-reverse': {
                    '0%': { transform: 'rotate(360deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
                blob: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
            },
        },
    },
    plugins: [],
};
