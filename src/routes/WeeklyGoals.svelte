<script lang="ts">
	import { goals } from '$lib/stores/goals';
	import GoalModal from './GoalModal.svelte';
	const modalId = crypto.randomUUID();
</script>

<div class="text-2xl font-semibold">Weekly goals</div>
<label for={modalId} class="btn btn-sm">Create new goal</label>
<GoalModal id={modalId} />
