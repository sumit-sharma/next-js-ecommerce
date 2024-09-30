/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'picsum.photos',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'cdn.dummyjson.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'reqres.in',
              port: '',
              pathname: '/**',
            },
          ]
        },


};

export default nextConfig;
