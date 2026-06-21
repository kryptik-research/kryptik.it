/**
 * Research page content.
 */

export const research = {
	title: 'Research',
	intro:
		'Kryptik research is organized around applied questions. Each area connects to software that can be read, tested, and reused rather than remaining only a statement of interest.',
	areas: [
		{
			title: 'Cryptographic Identity and Authority',
			body: 'How should signatures, capabilities, provenance, and revocation show up in everyday software? This thread appears in Archipelago, ADR practice, tenant isolation, and security research collections.',
			questions: [
				'What authority did this actor actually have?',
				'Can the system explain why a decision or action was allowed?',
				'Can trust be carried across organizational or network boundaries?'
			],
			links: [
				{ label: 'Archipelago', href: 'https://github.com/thinkingsage/archipelago' },
				{ label: 'ADR Tools', href: 'https://github.com/steven-exarcos/adr-tools' }
			]
		},
		{
			title: 'Agent Tools and Skill Markets',
			body: 'Kryptik explores how agents gain useful capabilities without becoming opaque operators. The practical work includes Discord agents, MCP tools, skill packaging, and marketplace architecture.',
			questions: [
				'Which actions should require explicit user approval?',
				'How should reusable skills declare their contracts?',
				'What makes an AI feature debuggable in production?'
			],
			links: [
				{ label: 'Discordclaw', href: 'https://github.com/kryptik-research/discordclaw' },
				{ label: 'Korafex', href: 'https://github.com/kryptik-research/korafex' },
				{ label: 'SXS', href: 'https://sxs.io' }
			]
		},
		{
			title: 'Federated Text Worlds',
			body: 'The Archipelago and Eventide work treats networked software as a literary medium: sovereign realms, player identity, provenance, and small-scale federation.',
			questions: [
				'What does privacy mean in a shared fictional space?',
				'How can federation be experienced as geography rather than configuration?',
				'How can persistent history become readable narrative?'
			],
			links: [
				{ label: 'Eventide', href: 'https://eventide.cc/archipelago/' },
				{ label: 'Archipelago repo', href: 'https://github.com/thinkingsage/archipelago' }
			]
		},
		{
			title: 'Knowledge Interfaces',
			body: 'Projects such as Rhiza investigate how AI analysis and graph visualization can turn complex domains into explorable maps.',
			questions: [
				'How can source material remain visible when AI assists analysis?',
				'Which visual structures help people compare related concepts?',
				'How should exploratory tools show uncertainty and provenance?'
			],
			links: [{ label: 'Rhiza', href: 'https://github.com/thinkingsage/rhiza' }]
		}
	],
	cta: {
		text: 'Follow the public work on',
		linkText: 'GitHub',
		href: 'https://github.com/kryptik-research'
	}
} as const;
