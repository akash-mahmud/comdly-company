/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const withImages = require('next-images');
const withInterceptStdout = require('next-intercept-stdout');
const nextConfig = withInterceptStdout(
	withImages({
		experimental: {
			images: {
				allowFutureImage: true
			}
		},
		images: {
			disableStaticImages: true
		},
		reactStrictMode: true,
		swcMinify: true,
		i18n
	}),
	// (log) => (hideWarn.some((warn) => log.includes(warn)) ? '' : log),
);

module.exports = nextConfig
