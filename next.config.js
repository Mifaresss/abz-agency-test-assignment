/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'frontend-test-assignment-api.abz.agency',
			},
		],
	},
}

module.exports = nextConfig
