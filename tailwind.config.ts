import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'knife': "url('../../public/images/knife.png')",
        'drink': "url('../../public/images/drink.png')",
        'chef': "url('../../public/images/chef.png')",
        'award': "url('../../public/images/awardImage.jpg')"
      },
      spacing: {
        '1/10': "10%",
        '1/5': "20%",
        '1/2': "50%",
        '4/5': "80%",
        '9/20': "45%",
      }
    },
  },
  plugins: [],
}
export default config
