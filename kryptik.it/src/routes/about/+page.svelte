<script lang="ts">
	import { about } from '$lib/content';
</script>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="max-w-3xl">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">About</p>
		<h1 class="mt-4 text-5xl font-bold text-slate-950">{about.title}</h1>
		<p class="mt-6 text-xl leading-9 text-slate-700">{about.intro}</p>
		<p class="mt-6 leading-8 text-slate-600">{about.mission}</p>
	</div>

	<div class="mt-14 grid gap-5 md:grid-cols-2">
		{#each about.principles as principle}
			<article class="rounded-lg border border-slate-200 bg-white p-6">
				<h2 class="text-xl font-bold text-slate-950">{principle.title}</h2>
				<p class="mt-4 leading-7 text-slate-600">{principle.body}</p>
			</article>
		{/each}
	</div>

	<section class="mt-16 border-t border-slate-200 pt-10">
		<div class="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
			<div>
				<p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Affiliations</p>
				<h2 class="mt-3 text-3xl font-bold text-slate-950">Project and governance links</h2>
			</div>
			<div class="grid gap-4">
				{#each about.affiliations as affiliation}
					<a
						href={affiliation.href}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-cyan-700"
					>
						<span class="text-lg font-bold text-slate-950">{affiliation.name}</span>
						<span class="mt-2 block leading-7 text-slate-600">{affiliation.body}</span>
					</a>
				{/each}
			</div>
		</div>
	</section>
</section>
