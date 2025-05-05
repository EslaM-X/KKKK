export const config = {
  app: {
    name: 'Pi Eats',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  },
  api: {
    baseUrl: process.env.VITE_API_BASE_URL || 'http://localhost:3000',
    timeout: 30000,
  },
  supabase: {
    url: process.env.VITE_SUPABASE_URL,
    anonKey: process.env.VITE_SUPABASE_ANON_KEY,
  },
  piNetwork: {
    appId: process.env.VITE_PI_APP_ID,
    apiKey: process.env.VITE_PI_API_KEY,
    walletUrl: process.env.VITE_PI_WALLET_URL || 'https://wallet.pi',
  },
  features: {
    enableRewards: true,
    enableHomeFood: true,
    enableRestaurants: true,
    enableAdminPanel: true,
  },
  security: {
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    maxLoginAttempts: 5,
    passwordMinLength: 8,
  },
  cache: {
    defaultTTL: 5 * 60 * 1000, // 5 minutes
  },
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 50,
  },
} as const;

export type Config = typeof config; 