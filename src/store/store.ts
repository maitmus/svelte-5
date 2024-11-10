import { writable } from 'svelte/store';

interface IState {
	value: number;
}
export const counter = writable<IState>({ value: 0 });
