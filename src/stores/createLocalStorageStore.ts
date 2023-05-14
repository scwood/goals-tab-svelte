import { writable } from 'svelte/store';

export function createLocalStorageStore<T>(config: { key: string; defaultValue: T }) {
	const localStorageValue =
		JSON.parse(localStorage.getItem(config.key) ?? 'null') ?? config.defaultValue;

	const store = writable<T>(localStorageValue);

	store.subscribe((value) => {
		localStorageValue.setItem(config.key, JSON.stringify(value));
	});

	return store;
}
