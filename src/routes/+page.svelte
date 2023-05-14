<script>
	import CurrentDateTime from './CurrentDateTime.svelte';
	import SearchBar from './SearchBar.svelte';
</script>

<div class="container">
	<CurrentDateTime />
	<SearchBar />
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 10px;
	}
</style>
