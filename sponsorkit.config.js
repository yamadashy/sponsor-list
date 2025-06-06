import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  // GitHub configuration
  github: {
    login: 'yamadashy',
    type: 'user',
  },

  // Output configuration
  outputDir: './sponsors',
  formats: ['json', 'svg', 'png'],
  
  // Rendering configuration
  width: 800,
  renderer: 'tiers',
  
  // Tiers configuration
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.xl,
    },
  ],

  // Fallback avatar for users without avatars
  fallbackAvatar: 'https://github.com/yamadashy.png',
  
  // Include private sponsors
  includePrivate: true,
})