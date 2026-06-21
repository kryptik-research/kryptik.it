/**
 * Public projects and adjacent project links.
 */

export type ProjectStatus = 'Active' | 'Ongoing' | 'Reference' | 'Proposed';

export type Project = {
	name: string;
	status: ProjectStatus;
	summary: string;
	href: string;
	repo?: string;
	tags: readonly string[];
};

export const projectIntro = {
	title: 'Project Network',
	intro:
		'Kryptik sits in a small constellation of public repositories, research sites, and experimental tools. Some are direct Kryptik projects; others are adjacent work that shares infrastructure, methods, or research questions.'
} as const;

export const projects: readonly Project[] = [
	{
		name: 'Kryptik GitHub',
		status: 'Active',
		summary:
			'The verified public organization for Kryptik code, including this SvelteKit site, Discord agent experiments, and security-oriented research collections.',
		href: 'https://github.com/kryptik-research',
		tags: ['organization', 'open source', 'research']
	},
	{
		name: 'kryptik.it',
		status: 'Active',
		summary:
			'The public web presence for Kryptik Research Group. It documents the lab, links the surrounding project network, and keeps the work discoverable.',
		href: 'https://kryptik.it',
		repo: 'https://github.com/kryptik-research/kryptik.it',
		tags: ['SvelteKit', 'static site', 'portfolio']
	},
	{
		name: 'Discordclaw',
		status: 'Active',
		summary:
			'An AI agent for Discord communities, focused on server-aware automation and conversational operations.',
		href: 'https://github.com/kryptik-research/discordclaw',
		tags: ['AI agent', 'Discord', 'MCP']
	},
	{
		name: 'Korafex',
		status: 'Ongoing',
		summary:
			'A multi-tenant Bedrock access platform and skill marketplace, combining API proxying, billing, tenant isolation, and reusable agent capabilities.',
		href: 'https://github.com/kryptik-research/korafex',
		tags: ['Bedrock', 'marketplace', 'SaaS']
	},
	{
		name: 'SXS',
		status: 'Active',
		summary:
			'A consulting and research surface for the symbolic and subsymbolic stack: LLM architecture, agent tools, evaluations, and production AI systems.',
		href: 'https://sxs.io',
		repo: 'https://github.com/stevenjmiklovic/sxs.io',
		tags: ['AI systems', 'consulting', 'SvelteKit']
	},
	{
		name: 'Archipelago / Eventide',
		status: 'Ongoing',
		summary:
			'A federated text-world platform and documentation site for sovereign, cryptographic, literary multiplayer systems.',
		href: 'https://eventide.cc/archipelago/',
		repo: 'https://github.com/thinkingsage/archipelago',
		tags: ['Elixir', 'federation', 'text worlds']
	},
	{
		name: 'Rhiza',
		status: 'Ongoing',
		summary:
			'An AI-powered Greek etymology explorer using graph visualization to reveal roots, meanings, and linguistic relationships.',
		href: 'https://github.com/thinkingsage/rhiza',
		tags: ['language', 'graphs', 'AI']
	},
	{
		name: 'ADR Tools',
		status: 'Reference',
		summary:
			'A command-line workflow for Architecture Decision Records, useful for keeping research software decisions explicit and reviewable.',
		href: 'https://github.com/steven-exarcos/adr-tools',
		tags: ['ADRs', 'documentation', 'governance']
	},
	{
		name: 'Exarcos Foundation',
		status: 'Proposed',
		summary:
			'A related foundation site and possible organizational home tracked in the Kryptik ADR log as a proposed affiliation.',
		href: 'https://exarcos.net',
		repo: 'https://github.com/steven-exarcos/exarcos.github.io',
		tags: ['foundation', 'governance', 'adjacent']
	}
] as const;

export const featuredProjects = projects.slice(0, 6);
