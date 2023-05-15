import { createLocalStorageStore } from './createLocalStorageStore';

export interface Goal {
	id: string;
	name: string;
	timesPlanned: number;
	timesCompleted: number;
}

export const goals = createLocalStorageStore<Goal[]>({
	key: 'goals-tab-svelte/goals',
	defaultValue: []
});
