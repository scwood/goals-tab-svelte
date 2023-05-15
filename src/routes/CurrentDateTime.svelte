<script lang="ts">
	import { onDestroy } from 'svelte';

	let now = new Date();

	const interval = setInterval(() => {
		now = new Date();
	}, 1000);

	onDestroy(() => clearInterval(interval));
</script>

<div class="text-center">
	<div class="font-semibold text-4xl">
		{now.toLocaleTimeString(undefined, { timeStyle: 'short' })}
	</div>
	<div class="font-semibold text-lg">
		{now.toLocaleDateString(undefined, { dateStyle: 'long' })}
	</div>
</div>
