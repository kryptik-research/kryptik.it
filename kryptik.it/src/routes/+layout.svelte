<script lang="ts">
	import '../app.css';
	import glyph from '$lib/assets/favicon.svg';
	import { site, navigation } from '$lib/content';
</script>

<svelte:head>
	<title>{site.name}</title>
	<meta name="description" content={site.description} />
	<link rel="icon" href={glyph} />
</svelte:head>

<div class="bg-white text-gray-900 font-sans">
	<header class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white/80 backdrop-blur-md">
		<a href="/" class="flex items-center gap-3 text-2xl font-bold">
			<img src={glyph} alt="" class="h-9 w-9 rounded-md" />
			<span>{site.name}</span>
		</a>
		<nav class="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm sm:text-base">
			{#each navigation as link}
				<a href={link.href} class="hover:text-cyan-700">{link.label}</a>
			{/each}
		</nav>
	</header>

	<main class="pt-32">
		<slot />
	</main>

	<footer class="p-4 mt-20 text-center text-gray-500">
		<p>&copy; 2026 Kryptik Research Group &mdash; <a href={site.copyrightLink} class="underline hover:text-gray-700" target="_blank" rel="noopener noreferrer">sxs.io</a></p>
	</footer>
</div>
