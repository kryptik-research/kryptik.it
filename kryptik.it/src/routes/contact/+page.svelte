<script lang="ts">
	import { contact } from '$lib/content';
</script>

<div class="container mx-auto px-4">
	<h1 class="text-4xl font-bold mb-4">{contact.title}</h1>
	<p class="text-lg">{contact.intro}</p>
	<a href="mailto:{contact.email}" class="text-lg text-blue-500">{contact.email}</a>
</div>
