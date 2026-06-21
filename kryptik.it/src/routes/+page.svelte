<script lang="ts">
	import glyph from '$lib/assets/favicon.svg';
	import { hero, pillars } from '$lib/content';
</script>

<div class="container mx-auto px-4">
	<section class="text-center py-20">
		<img src={glyph} alt="" class="mx-auto mb-8 h-24 w-24 rounded-2xl shadow-sm" />
		<h1 class="text-6xl font-bold mb-4">{hero.headline}</h1>
		<p class="text-xl text-gray-600">{hero.subheadline}</p>
	</section>

	<section class="py-20">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each pillars as pillar}
				<div class="p-8 border rounded-lg">
					<h2 class="text-2xl font-bold mb-4">{pillar.title}</h2>
					<p>{pillar.description}</p>
				</div>
			{/each}
		</div>
	</section>
</div>
