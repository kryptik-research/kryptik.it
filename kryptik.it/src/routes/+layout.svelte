<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<title>Kryptik</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-white text-gray-900 font-sans">
	<header class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white/80 backdrop-blur-md">
		<a href="/" class="text-2xl font-bold">Kryptik</a>
		<nav>
			<a href="/about" class="ml-4">About</a>
			<a href="/research" class="ml-4">Research</a>
			<a href="/contact" class="ml-4">Contact</a>
		</nav>
	</header>

	<main class="pt-24">
		<slot />
	</main>

	<footer class="p-4 mt-20 text-center text-gray-500">
		<p>&copy; 2025 Kryptik Research Group</p>
	</footer>
</div>
