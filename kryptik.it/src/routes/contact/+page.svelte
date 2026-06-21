<script lang="ts">
	import { contact } from '$lib/content';
</script>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="max-w-3xl">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Contact</p>
		<h1 class="mt-4 text-5xl font-bold text-slate-950">{contact.title}</h1>
		<p class="mt-6 text-xl leading-9 text-slate-700">{contact.intro}</p>
	</div>

	<div class="mt-12 grid gap-5 md:grid-cols-3">
		{#each contact.channels as channel}
			<article class="rounded-lg border border-slate-200 bg-white p-6">
				<h2 class="text-xl font-bold text-slate-950">{channel.label}</h2>
				<p class="mt-4 leading-7 text-slate-600">{channel.body}</p>
				<a
					href={channel.href}
					target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
					rel={channel.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
					class="mt-6 inline-flex text-sm font-semibold text-cyan-700 hover:text-slate-950"
				>
					{channel.linkText}
				</a>
			</article>
		{/each}
	</div>
</section>
