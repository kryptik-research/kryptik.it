<script lang="ts">
	import { currentWork, featuredProjects, hero, pillars, projectIntro, quickFacts } from '$lib/content';
</script>

<div>
	<section class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
		<div class="flex flex-col justify-center">
			<p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">{hero.eyebrow}</p>
			<h1 class="mt-5 max-w-4xl text-5xl font-bold leading-tight text-slate-950 sm:text-6xl">
				{hero.headline}
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{hero.subheadline}</p>
			<div class="mt-8 flex flex-wrap gap-3">
				{#each hero.actions as action, index}
					<a
						href={action.href}
						class={`inline-flex items-center rounded-md border border-slate-950 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-cyan-700 ${
							index === 0
								? 'bg-slate-950 text-white hover:bg-cyan-700 hover:text-white'
								: 'text-slate-950 hover:text-cyan-700'
						}`}
					>
						{action.label}
					</a>
				{/each}
			</div>
		</div>

		<aside
			class="grid content-between gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
			aria-label="Kryptik signal map"
		>
			<div class="grid gap-3">
				{#each ['identity', 'agents', 'federation', 'knowledge'] as node, index}
					<div class="flex items-center gap-3">
						<span class="h-3 w-3 border border-cyan-700 bg-cyan-50"></span>
						<span class="h-px flex-1 bg-slate-200"></span>
						<span class="w-32 rounded border border-slate-200 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-600">
							{node}
						</span>
						<span class="text-xs text-slate-400">0{index + 1}</span>
					</div>
				{/each}
			</div>
			<div class="grid gap-3 sm:grid-cols-3">
				{#each quickFacts as fact}
					<div class="border-t border-slate-200 pt-4">
						<p class="text-xs uppercase tracking-[0.18em] text-slate-400">{fact.label}</p>
						<p class="mt-2 text-sm font-semibold text-slate-900">{fact.value}</p>
					</div>
				{/each}
			</div>
		</aside>
	</section>

	<section class="border-y border-slate-200 bg-white py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-6 md:grid-cols-3">
			{#each pillars as pillar}
					<div class="rounded-lg border border-slate-200 p-6">
						<h2 class="text-xl font-bold text-slate-950">{pillar.title}</h2>
						<p class="mt-4 leading-7 text-slate-600">{pillar.description}</p>
				</div>
			{/each}
			</div>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
			<div>
				<p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
					{currentWork.title}
				</p>
				<p class="mt-4 text-2xl font-semibold leading-9 text-slate-950">{currentWork.body}</p>
			</div>
			<div id="projects">
				<div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<h2 class="text-3xl font-bold text-slate-950">{projectIntro.title}</h2>
						<p class="mt-3 max-w-2xl leading-7 text-slate-600">{projectIntro.intro}</p>
					</div>
					<a href="/projects" class="text-sm font-semibold text-cyan-700 hover:text-slate-950">
						All projects
					</a>
				</div>
				<div class="grid gap-4 sm:grid-cols-2">
					{#each featuredProjects as project}
						<article class="rounded-lg border border-slate-200 bg-white p-5">
							<div class="flex items-center justify-between gap-3">
								<h3 class="text-lg font-bold text-slate-950">{project.name}</h3>
								<span class="rounded border border-amber-300 bg-amber-50 px-2 py-1 text-xs text-amber-800">
									{project.status}
								</span>
							</div>
							<p class="mt-3 leading-7 text-slate-600">{project.summary}</p>
							<div class="mt-4 flex flex-wrap gap-2">
								{#each project.tags as tag}
									<span class="rounded border border-slate-200 px-2 py-1 text-xs text-slate-500">
										{tag}
									</span>
								{/each}
							</div>
							<div class="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
								<a href={project.href} target="_blank" rel="noopener noreferrer" class="text-cyan-700 hover:text-slate-950">
									Open
								</a>
								{#if project.repo}
									<a href={project.repo} target="_blank" rel="noopener noreferrer" class="text-cyan-700 hover:text-slate-950">
										Repo
									</a>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
