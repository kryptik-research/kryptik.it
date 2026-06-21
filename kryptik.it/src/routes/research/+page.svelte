<script lang="ts">
	import { research } from '$lib/content';
</script>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="max-w-3xl">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Research</p>
		<h1 class="mt-4 text-5xl font-bold text-slate-950">{research.title}</h1>
		<p class="mt-6 text-xl leading-9 text-slate-700">{research.intro}</p>
	</div>

	<div class="mt-12 grid gap-6">
		{#each research.areas as area}
			<article class="rounded-lg border border-slate-200 bg-white p-6">
				<div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<h2 class="text-2xl font-bold text-slate-950">{area.title}</h2>
						<p class="mt-4 leading-8 text-slate-600">{area.body}</p>
						<div class="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
							{#each area.links as link}
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									class="rounded border border-cyan-200 bg-cyan-50 px-3 py-2 text-cyan-800 hover:border-cyan-700"
								>
									{link.label}
								</a>
							{/each}
						</div>
					</div>
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
							Working questions
						</p>
						<ul class="mt-4 grid gap-3">
							{#each area.questions as question}
								<li class="border-l-2 border-amber-300 pl-4 leading-7 text-slate-700">{question}</li>
							{/each}
						</ul>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<p class="mt-10 text-lg text-slate-700">
		{research.cta.text}
		<a
			href={research.cta.href}
			target="_blank"
			rel="noopener noreferrer"
			class="font-semibold text-cyan-700 hover:text-slate-950"
		>
			{research.cta.linkText}</a
		>.
	</p>
</section>
