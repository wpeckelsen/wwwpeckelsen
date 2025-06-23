/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'smsawksgndzfznnvthzb.supabase.co'          
        },
      ],
    },
  }

export default nextConfig;
