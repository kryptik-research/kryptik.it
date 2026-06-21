/**
 * Site-wide metadata and configuration.
 */

export const site = {
	name: 'Kryptik',
	title: 'Kryptik Research Group',
	description:
		'Kryptik Research Group is a technology research organization.',
	copyright: '© 2026 Kryptik Research Group — sxs.io',
	copyrightLink: 'https://sxs.io',
	email: 'hello@kryptik.it',
	github: 'https://github.com/kryptik-research'
} as const;

export const navigation = [
	{ label: 'Projects', href: '/projects' },
	{ label: 'About', href: '/about' },
	{ label: 'Research', href: '/research' },
	{ label: 'Contact', href: '/contact' }
] as const;
