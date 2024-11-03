import { writable } from 'svelte/store';

interface IState {
	value: number;
}
export const counterStore = writable<IState>({ value: 0 });
