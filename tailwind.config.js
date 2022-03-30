module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': '#252525',
        'secondBack': '#202020',
        'white': 'rgba(255, 255, 255, 0.82);'
      },
      screens: {
        'sm': { 'min': '350px', 'max': '767px' },
      },
      height: {
        'm': 'calc(100vh - 3.5rem)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
  corePlugins: {
    // 解决组件库中的组件样式冲突
    preflight: false,
  },
};
