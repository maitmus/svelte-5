<script lang="ts">
	import Component from '../component/Component.svelte';
	import { counter } from '../store/store';

	let state = true;

	let arr = [0, 1, 2, 3];
	let promise = new Promise<number>((resolve, reject) => {
		// reject('Error');
		resolve(30);
	});
</script>

<section>
	<h1>스벨트 5 - 이게 프론트다 희망편</h1>
	<p>Counter: {$counter.value}</p>
	<div class="stateDiv">
		<p>State: {state}</p>
		<p>#No dispatch functions!</p>
	</div>
	<button
		onclick={() => {
			$counter.value++;
		}}>증가</button
	>
	<button
		onclick={() => {
			$counter.value--;
		}}
	>
		감소
	</button>
	<button
		onclick={() => {
			$counter.value = 0;
		}}>초기화</button
	>
	<button
		onclick={() => {
			state = !state;
		}}>상태 변경</button
	>
	<Component data="asdf" number={999}></Component>
	{#each arr as i}
		{#if i != 0}
			<p>i: {i}</p>
		{/if}
	{/each}
	{#await promise}
		<p>Loading...</p>
	{:then number}
		<p>Promise done: {number}</p>
	{:catch error}
		<p>Error in promise: {error}</p>
	{/await}
</section>

<style>
	.stateDiv {
		display: flex;
		gap: 10px;
	}

	.stateDiv p:last-child {
		opacity: 0.5;
	}
</style>
