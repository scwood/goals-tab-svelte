<script lang="ts">
	import { onDestroy } from 'svelte';

	let now = new Date();

	const interval = setInterval(() => {
		now = new Date();
	}, 1000);

	onDestroy(() => clearInterval(interval));
</script>

<div class="date">
	{now.toLocaleTimeString(undefined, { timeStyle: 'short' })}
</div>
<div class="time">
	{now.toLocaleDateString(undefined, { dateStyle: 'long' })}
</div>

<style>
	.date {
		font-weight: 600;
		font-size: 36px;
	}

	.time {
		font-weight: 600;
		font-size: 18px;
	}
</style>
