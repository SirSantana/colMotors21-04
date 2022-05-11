/** @type {import('next').NextConfig} */
require("dotenv").config()

const nextConfig = {
  reactStrictMode: true,
  env: {
    USER: process.env.USER,
    PASSWORD: "C1Dgz8ycXDQVpHiB",
    BASE_URL:'http://localhost:3000',
    DBNAME: process.env.DBNAME,
    ACCESS_TOKEN_SECRET: "test",
        REFRESH_TOKEN_SECRET: "test",
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/posts',
  //       destination: 'http://localhost:3000/posts',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
