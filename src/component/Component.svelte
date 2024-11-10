<script lang="ts">
	import { onDestroy } from 'svelte';
	import { counter } from '../store/store';

	export let data: string;
	export let number: number;
</script>

<section>
	<p>{data}</p>
	<p>{number}</p>
	<div class="counterDiv">
		<p>Counter: {$counter.value}</p>
		<p>#No need Redux/Recoil/Zustand anymore!</p>
	</div>
</section>

<style>
	section {
		border: 1px solid red;
		width: fit-content;
		margin: 30px 0;
		display: grid;
		gap: 10px;
	}

	p {
		margin: 0;
		padding: 5px;
	}

	.counterDiv {
		display: flex;
		gap: 3px;
	}

	.counterDiv p:last-child {
		opacity: 0.5;
	}
</style>
