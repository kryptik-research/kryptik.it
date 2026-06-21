/**
 * About page content.
 */

export const about = {
	title: 'About Kryptik',
	intro:
		'Kryptik Research Group is a research technology organization for systems that need trust, legibility, and room for creative use. The work moves between practical software and speculative infrastructure: tools for agents, cryptographic identity, public knowledge systems, and networked worlds.',
	mission:
		'The goal is not to make software feel mysterious. It is to make complex systems inspectable enough that people can rely on them, modify them, and understand what authority they are granting.',
	principles: [
		{
			title: 'Open trails',
			body: 'Public repositories, architecture decision records, and plain-language project pages make the work easier to inspect and reuse.'
		},
		{
			title: 'Authority as a first-class design problem',
			body: 'Permissions, signatures, tenant boundaries, provenance, and revocation are treated as product behavior, not plumbing hidden at the edge.'
		},
		{
			title: 'Tools that stay operable',
			body: 'AI agents and automation need clear contracts, evaluation points, and fallbacks so they remain useful after the demo is over.'
		},
		{
			title: 'Creative infrastructure',
			body: 'The lab also studies systems as expressive media: text worlds, language graphs, and interfaces where technical structure shapes the experience.'
		}
	],
	affiliations: [
		{
			name: 'Kryptik Research on GitHub',
			body: 'The public organization is verified for kryptik.it and hosts the current Kryptik repositories.',
			href: 'https://github.com/kryptik-research'
		},
		{
			name: 'Exarcos Foundation',
			body: 'An open ADR in this repository tracks a proposed relationship with Exarcos as a governance and foundation context.',
			href: 'https://exarcos.net'
		},
		{
			name: 'SXS',
			body: 'Adjacent AI systems consulting work informs the agent tooling, evaluation, and production-readiness side of the lab.',
			href: 'https://sxs.io'
		}
	]
} as const;
