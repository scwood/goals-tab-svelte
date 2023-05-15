<script lang="ts">
	import '../app.css';
	import CurrentDateTime from './CurrentDateTime.svelte';
	import SearchBar from './SearchBar.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import WeeklyGoals from './WeeklyGoals.svelte';
</script>

<div class="w-screen h-screen flex flex-col justify-center items-center gap-6 relative">
	<ThemeToggle />
	<CurrentDateTime />
	<SearchBar />
	<WeeklyGoals />
</div>
