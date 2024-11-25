/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mvaeqayvhighbhnkrydl.supabase.co'          
        },
      ],
    },
  }

export default nextConfig;
