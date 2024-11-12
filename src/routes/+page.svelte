<script lang="ts">
	import { fade } from 'svelte/transition';
	import Component from '../component/Component.svelte';
	import { counter } from '../store/store';

	let state = true;

	let arr = [0, 1, 2, 3];
	let promise = new Promise<number>((resolve, reject) => {
		// reject('Error');
		resolve(30);
	});

	let reverseCounter: number | null;
	let inputValue = '';
	let buttonRef: HTMLButtonElement;

	$: reverseCounter = 100 - $counter.value;

	$: if ($counter.value > 5) {
		console.log('Counter: ', $counter.value);
	}
</script>

<section>
	<h1>스벨트 5 - 이게 프론트다 희망편</h1>
	<p>Counter: {$counter.value}</p>
	<p>Reverse Counter: {reverseCounter}</p>
	<div class="stateDiv" transition:fade>
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
	<input type="text" bind:value={inputValue} />
	<p>Input: {inputValue}</p>
	<button
		onclick={() => {
			if (buttonRef) {
				if (buttonRef.textContent == '역시 정상화는') {
					buttonRef.textContent = '해창섭';
				} else buttonRef.textContent = '역시 정상화는';
			}
		}}>Click Me!</button
	>
	<button bind:this={buttonRef}>역시 정상화는</button>
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
