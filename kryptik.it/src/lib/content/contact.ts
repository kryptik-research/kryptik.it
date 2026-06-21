/**
 * Contact page content.
 */

export const contact = {
	title: 'Contact',
	intro:
		'Use email for direct notes, GitHub for project-specific issues, and the linked project pages for the fastest path into active work.',
	email: 'hello@kryptik.it',
	channels: [
		{
			label: 'General inquiries',
			body: 'Research questions, collaboration notes, and anything that does not belong in a repository issue.',
			href: 'mailto:hello@kryptik.it',
			linkText: 'hello@kryptik.it'
		},
		{
			label: 'Project issues',
			body: 'Bug reports, implementation discussion, and pull requests for public Kryptik repositories.',
			href: 'https://github.com/kryptik-research',
			linkText: 'GitHub organization'
		},
		{
			label: 'Site operations',
			body: 'Domain, security, or administrative mail for kryptik.it.',
			href: 'mailto:root@kryptik.it',
			linkText: 'root@kryptik.it'
		}
	]
} as const;
