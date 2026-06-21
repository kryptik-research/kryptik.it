<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { footerLinks, navigation, site } from '$lib/content';
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-stone-50 text-slate-950 font-sans">
	<header
		class="fixed top-0 left-0 right-0 z-10 border-b border-slate-200 bg-stone-50/90 backdrop-blur-md"
	>
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
			<a href="/" class="text-lg font-bold tracking-wide text-slate-950">{site.name}</a>
			<nav class="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-slate-600">
			{#each navigation as link}
				<a href={link.href} class="transition hover:text-cyan-700">{link.label}</a>
			{/each}
			</nav>
		</div>
	</header>

	<main class="pt-24">
		<slot />
	</main>

	<footer class="mt-24 border-t border-slate-200 bg-white">
		<div
			class="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
		>
			<div>
				<p class="font-semibold text-slate-900">{site.title}</p>
				<p class="mt-1 max-w-2xl">{site.tagline}</p>
				<p class="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">{site.copyright}</p>
			</div>
			<nav class="flex flex-wrap gap-4">
				{#each footerLinks as link}
					<a href={link.href} target="_blank" rel="noopener noreferrer" class="hover:text-cyan-700">
						{link.label}
					</a>
				{/each}
			</nav>
		</div>
	</footer>
</div>
