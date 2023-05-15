<script lang="ts">
	let searchQuery = '';

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			const queryParams = new URLSearchParams({ q: searchQuery });
			window.location.href = 'http://www.google.com/search?' + queryParams.toString();
		}
	}
</script>

<input
	class="input input-bordered input-md w-[500px]"
	placeholder="Search google"
	bind:value={searchQuery}
	on:keydown={handleKeyDown}
/>
