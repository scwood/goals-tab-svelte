<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { IconSunHigh, IconMoon } from '@tabler/icons-svelte';
</script>

<button class="absolute top-2 right-2 btn btn-sm btn-ghost" on:click={toggleTheme}>
	{#if $theme === 'dark'}
		<IconSunHigh />
	{:else}
		<IconMoon />
	{/if}
</button>
