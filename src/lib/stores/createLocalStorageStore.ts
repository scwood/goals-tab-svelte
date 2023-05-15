import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export function createLocalStorageStore<T>(config: { key: string; defaultValue: T }) {
	let value: T | null = null;

	if (browser) {
		value = JSON.parse(window.localStorage.getItem(config.key) ?? 'null');
	}

	const store = writable<T>(value ?? config.defaultValue);

	store.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem(config.key, JSON.stringify(value));
		}
	});

	return store;
}
