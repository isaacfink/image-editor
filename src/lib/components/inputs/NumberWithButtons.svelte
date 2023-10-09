<script lang="ts">
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	export let prefix: string = '';
	export let value: number = 100;

	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;

	function increment() {
		value = max ? Math.min(value + 1, max) : value + 1;
	}

	function decrement() {
		value = min ? Math.max(value - 1, min) : value - 1;
	}
</script>

<div
	class="rounded border border-slate-400 flex focus-within:border-slate-800 items-center gap-x-1 text-base pl-1 h-6"
>
	<span class="text-slate-300 shrink-0 min-w-3 empty:min-w-0">{prefix}</span>
	<input
		type="number"
		bind:value
		class="border-transparent outline-transparant ring-transparent focus:ring-0 focus:border-none focus:outline-none grow w-20 h-5 text-slate-400"
	/>
	<div class="flex flex-col shrink-0 border-l border-slate-400">
		<button
			on:click={increment}
			class="flex items-center justify-center px-1 border-b border-slate-400 hover:bg-slate-100 rounded-tr-md"
		>
			<ChevronUp size={10} />
		</button>
		<button
			on:click={decrement}
			class="flex items-center justify-center px-1 hover:bg-slate-100 rounded-br-md"
		>
			<ChevronDown size={10} />
		</button>
	</div>
</div>

<style>
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
