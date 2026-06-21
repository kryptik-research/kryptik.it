/**
 * Home page content.
 */

export const hero = {
	eyebrow: 'Kryptik Research Group',
	headline: 'Secure systems, agent tooling, and strange useful software.',
	subheadline:
		'Kryptik is a research technology organization exploring cryptographic identity, decentralized infrastructure, AI-assisted development, and creative systems that can be inspected, forked, and improved.',
	actions: [
		{ label: 'Explore projects', href: '/projects' },
		{ label: 'Read research areas', href: '/research' }
	]
} as const;

export const quickFacts = [
	{ label: 'Public code', value: '12 GitHub repositories' },
	{ label: 'Primary surface', value: 'kryptik.it' },
	{ label: 'Working mode', value: 'open research and practical tools' }
] as const;

export const pillars = [
	{
		title: 'Trustworthy Systems',
		description:
			'Identity, signatures, permissions, and auditable decision records for software that needs clear authority boundaries.'
	},
	{
		title: 'Agent Infrastructure',
		description:
			'Model Context Protocol tools, skill marketplaces, Discord agents, and evaluation patterns for AI systems people can actually operate.'
	},
	{
		title: 'Networked Worlds',
		description:
			'Federated text worlds, literary interfaces, etymology graphs, and other projects where software becomes a readable place.'
	}
] as const;

export const currentWork = {
	title: 'Current Direction',
	body: 'The public work clusters around three questions: how authority moves through software, how AI tools can remain understandable under real use, and how networked systems can support authored, intimate experiences instead of only scale.'
} as const;
