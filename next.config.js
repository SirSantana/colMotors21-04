/** @type {import('next').NextConfig} */
require("dotenv").config()

const nextConfig = {
  reactStrictMode: true,
  env: {
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    BASE_URL:'http://localhost:3000',
    DBNAME: process.env.DBNAME,
    ACCESS_TOKEN_SECRET: "test",
        REFRESH_TOKEN_SECRET: "test",
  },
}

module.exports = nextConfig
