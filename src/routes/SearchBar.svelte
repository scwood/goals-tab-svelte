<script lang="ts">
	let searchQuery = '';

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			const queryParms = new URLSearchParams({ q: searchQuery });
			window.location.href = 'http://www.google.com/search?' + queryParms.toString();
		}
	}
</script>

<input
	class="search"
	placeholder="Search google"
	bind:value={searchQuery}
	on:keydown={handleKeyDown}
/>

<style>
	.search {
		width: 400px;
		padding: 8px;
	}
</style>
