<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import { getEditor } from '$lib/context';
	import { Circle, Eye, Image, Lock, Square, Star, Type } from 'lucide-svelte';
	import Block from './Block.svelte';

	const editor = getEditor();

	function handleDndConsider(e: CustomEvent<{ items: typeof $editor.blocks }>) {
		$editor.blocks = e.detail.items;
	}
	function handleDndFinalize(e: CustomEvent<{ items: typeof $editor.blocks }>) {
		$editor.blocks = e.detail.items;
	}
</script>

<div class="flex justify-between items-center">
	<h3 class="font-semibold text-slate-900">blocks</h3>
	<button class="btn">
		<Lock color="currentcolor" size={18} />
	</button>
</div>

<div
	class="flex flex-col gap-y-1 mt-3 list border border-transparent"
	use:dndzone={{
		items: $editor.blocks,
		flipDurationMs: 100,
		dropTargetClasses: ['dropzone'],
		dropTargetStyle: {}
	}}
	on:consider={handleDndConsider}
	on:finalize={handleDndFinalize}
>
	{#each $editor.blocks as block (block.id)}
		<div class="">
			<Block bind:block />
		</div>
	{/each}
</div>

<style lang="postcss">
	:global(.dropzone) {
		@apply border border-slate-200 rounded-md bg-slate-100/50 dark:bg-slate-700 dark:border-slate-800;
	}
</style>
