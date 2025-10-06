/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './slides.md',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Chart color palette - high contrast, accessible
        chart: {
          blue: '#1e40af',      // Dark blue
          green: '#15803d',     // Dark green
          orange: '#ea580c',    // Dark orange
          purple: '#7c3aed',    // Purple
          red: '#dc2626',       // Red
          teal: '#0f766e',      // Teal
          pink: '#db2777',      // Pink
          yellow: '#ca8a04',    // Dark yellow
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "retro",  // Using daisyUI's built-in Retro theme
      {
        light: {
          "primary": "#1e40af",        // Dark blue - matches chart.blue
          "secondary": "#0f766e",      // Teal
          "accent": "#7c3aed",         // Purple
          "neutral": "#1f2937",        // Dark gray
          "base-100": "#ffffff",       // White background
          "base-200": "#f9fafb",       // Light gray
          "base-300": "#f3f4f6",       // Lighter gray
          "info": "#0ea5e9",           // Light blue
          "success": "#15803d",        // Dark green
          "warning": "#ca8a04",        // Dark yellow
          "error": "#dc2626",          // Red
        },
      },
    ],
    darkTheme: false, // Disable dark mode for presentations
    base: true,
    styled: true,
    utils: true,
  },
}
