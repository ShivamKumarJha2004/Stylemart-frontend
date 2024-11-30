/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        pingOnce: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(1.5)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' }, // Revert to original state
        },
      },
      animation: {
        'ping-once': 'pingOnce 2s ease-out forwards', // Run the animation once, and revert at the end
      },
    },
  },
  plugins: [],
};
