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
      title: 'Sponsors',
      preset: {
        avatar: {
          size: 50
        },
        boxWidth: 80,
        boxHeight: 90,
        container: {
          sidePadding: 20
        },
        name: {
          maxLength: 13,
        }
      },
    },
  ],

  // Fallback avatar for users without avatars
  fallbackAvatar: 'https://github.com/yamadashy.png',
  
  // Include private sponsors
  includePrivate: true,
})