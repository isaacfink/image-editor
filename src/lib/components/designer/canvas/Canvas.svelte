<script lang="ts">
	import { getEditor } from '$lib/context';
	import Grid from './Grid.svelte';
	import { TextBlock } from './blocks';

	const editor = getEditor();

	$: aspectRatio = $editor.current.canvas.height / $editor.current.canvas.width;
</script>

<div class="w-full h-full p-12 min-h-0 max-h-full">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg
		on:click|self={() => ($editor.current.activeBlock = null)}
		viewBox="0 0 {$editor.current.canvas.width} {$editor.current.canvas.height}"
		xmlns="http://www.w3.org/2000/svg"
		stroke="red"
		fill="grey"
		class="mx-auto aspect max-h-full max-w-full bg-white select-none"
		style="--width:{$editor.current.canvas.width};--height:{$editor.current.canvas.height}"
	>
		{#each $editor.current.blocks as block}
			{#if block.type === 'text'}
				<TextBlock {block} />
			{/if}
		{/each}
		{#if $editor.current.canvas.grid.show}
			<Grid />
		{/if}
	</svg>
</div>

<style>
	.aspect {
		aspect-ratio: var(--width) / var(--height);
	}
</style>
