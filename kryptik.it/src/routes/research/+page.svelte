<script lang="ts">
	import { research } from '$lib/content';
</script>

<div class="container mx-auto px-4">
	<h1 class="text-4xl font-bold mb-4">{research.title}</h1>
	<p class="text-lg">{research.intro}</p>
	<ul class="list-disc list-inside mt-4">
		{#each research.areas as area}
			<li>{area}</li>
		{/each}
	</ul>
	<p class="text-lg mt-4">
		{research.cta.text}
		<a href={research.cta.href} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
			{research.cta.linkText}
		</a>.
	</p>
</div>
