import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF6EF',
          100: '#F5EFE0',
          200: '#EADFC6',
          300: '#DDCDA6',
        },
        sage: {
          50: '#EEF4EA',
          100: '#E1ECDA',
          300: '#A8C8A0',
          500: '#6B9E5E',
          700: '#4A7340',
        },
        skysoft: {
          50: '#EFF6F8',
          100: '#E3EEF2',
          300: '#AECDD7',
          500: '#5E93A5',
          700: '#3F6D7D',
        },
        plum: {
          50: '#F5EEF6',
          100: '#EBDDEF',
          300: '#CFB0D4',
          500: '#9B6FA4',
          700: '#6E4A78',
        },
        peach: {
          50: '#FDF1EA',
          100: '#FCE5D7',
          300: '#F4B894',
          500: '#E89A78',
          700: '#B46F51',
        },
        ink: {
          400: '#7A7266',
          600: '#514B42',
          700: '#3D3A33',
          900: '#2A2721',
        },
        isa: {
          100: '#F9E9D3',
          200: '#F4DDC1',
          400: '#D6A87A',
          600: '#A87B4E',
        },
        nra: '#C2272D',
      },
      fontFamily: {
        sans: ['Huninn', 'var(--font-noto)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        kai: ['LXGW WenKai TC', 'Huninn', 'var(--font-noto)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-noto)', 'Huninn', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 24px rgba(60, 45, 30, 0.06)',
        float: '0 14px 36px rgba(60, 45, 30, 0.12)',
        pop: '0 20px 44px rgba(60, 45, 30, 0.18)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-slow': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'tail-wag': {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
        'fade-in-slow': 'fade-in-slow 1.2s ease-out both',
        'bounce-slow': 'bounce-slow 2.4s ease-in-out infinite',
        'tail-wag': 'tail-wag 0.6s ease-in-out infinite',
        'wiggle': 'wiggle 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
