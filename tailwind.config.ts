import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        notoSansKR: ['NotoSansKR']
      }
    }
  },
  plugins: []
};
export default config;
