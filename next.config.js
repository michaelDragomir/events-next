/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
				port: '',
				pathname:
					'/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
				port: '',
				pathname:
					'/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/640px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg',
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
				port: '',
				pathname:
					'/wikipedia/commons/thumb/b/bb/Teatro_de_M%C3%A9rida%2C_Espa%C3%B1a%2C_2017_18.jpg/640px-Teatro_de_M%C3%A9rida%2C_Espa%C3%B1a%2C_2017_18.jpg',
			},
		],
	},
	experimental: {
		appDir: true,
	},
	swcMinify: true,
	optimizeFonts: true,
};

module.exports = nextConfig;
