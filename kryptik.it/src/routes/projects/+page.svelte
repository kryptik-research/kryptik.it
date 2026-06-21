<script lang="ts">
	import { projectIntro, projects } from '$lib/content';
</script>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="max-w-3xl">
		<p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Projects</p>
		<h1 class="mt-4 text-5xl font-bold text-slate-950">{projectIntro.title}</h1>
		<p class="mt-6 text-xl leading-9 text-slate-700">{projectIntro.intro}</p>
	</div>

	<div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
		{#each projects as project}
			<article class="rounded-lg border border-slate-200 bg-white p-6">
				<div class="flex items-start justify-between gap-4">
					<h2 class="text-xl font-bold text-slate-950">{project.name}</h2>
					<span class="rounded border border-amber-300 bg-amber-50 px-2 py-1 text-xs text-amber-800">
						{project.status}
					</span>
				</div>
				<p class="mt-4 leading-7 text-slate-600">{project.summary}</p>
				<div class="mt-5 flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span class="rounded border border-slate-200 px-2 py-1 text-xs text-slate-500">
							{tag}
						</span>
					{/each}
				</div>
				<div class="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
					<a href={project.href} target="_blank" rel="noopener noreferrer" class="text-cyan-700 hover:text-slate-950">
						Open project
					</a>
					{#if project.repo}
						<a href={project.repo} target="_blank" rel="noopener noreferrer" class="text-cyan-700 hover:text-slate-950">
							Source
						</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>
