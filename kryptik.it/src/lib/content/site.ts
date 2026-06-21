/**
 * Site-wide metadata and configuration.
 */

export const site = {
	name: 'Kryptik',
	title: 'Kryptik Research Group',
	description:
		'Kryptik Research Group is a research technology organization focused on secure systems, agent tooling, and networked creative software.',
	tagline: 'Research technology for secure, networked, human-scale systems.',
	copyright: '© 2026 Kryptik Research Group',
	email: 'hello@kryptik.it',
	adminEmail: 'root@kryptik.it',
	github: 'https://github.com/kryptik-research',
	domain: 'kryptik.it'
} as const;

export const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Research', href: '/research' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact', href: '/contact' }
] as const;

export const footerLinks = [
	{ label: 'GitHub', href: 'https://github.com/kryptik-research' },
	{ label: 'SXS', href: 'https://sxs.io' },
	{ label: 'Eventide', href: 'https://eventide.cc/archipelago/' },
	{ label: 'Exarcos', href: 'https://exarcos.net' }
] as const;
