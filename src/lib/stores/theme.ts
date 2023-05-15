import { browser } from '$app/environment';

import { createLocalStorageStore } from './createLocalStorageStore';

export type Theme = 'light' | 'dark';

export const theme = createLocalStorageStore<Theme>({
	key: 'goals-tab-svelte/theme',
	defaultValue: 'dark'
});

export function toggleTheme() {
	theme.update((prev) => {
		return prev === 'light' ? 'dark' : 'light';
	});
}

theme.subscribe((value) => {
	if (browser) {
		document.getElementsByTagName('html')[0]?.setAttribute('data-theme', value);
	}
});
