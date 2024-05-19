/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/reservations",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
