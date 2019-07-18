module.exports = {
  apps: [
    {
      name: 'pubnow-staging',
      script: 'npm run dev',
      watch: true,
      env: {
        NUXT_HOST: '0.0.0.0',
        NODE_ENV: 'production',
        NUXT_PORT: 3333,
        API_URL: 'https://api.staging.pubnow.co/api',
      },
    },
    {
      name: 'pubnow-production',
      script: 'npm start',
      watch: true,
      env: {
        NUXT_HOST: '0.0.0.0',
        NODE_ENV: 'production',
        NUXT_PORT: 4444,
        API_URL: 'https://api.pubnow.co/api',
      },
    },
  ],
}
