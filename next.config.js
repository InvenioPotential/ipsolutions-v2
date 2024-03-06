// /** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//   })
  
//   module.exports = withPWA({
//     // next.js config
//     reactStrictMode: false,
//     swcMinify: false,
//   })

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
}


