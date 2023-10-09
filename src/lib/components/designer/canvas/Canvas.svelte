<script lang="ts">
	import { getEditor } from '$lib/context';
	import { TextBlock } from './blocks';

	const editor = getEditor();

	$: aspectRatio = $editor.canvas.height / $editor.canvas.width;
</script>

<div class="w-full h-full p-12">
	<svg
		on:click|self={() => ($editor.activeBlock = null)}
		viewBox="0 0 {$editor.canvas.height} {$editor.canvas.width}"
		xmlns="http://www.w3.org/2000/svg"
		stroke="red"
		fill="grey"
		class="mx-auto aspect max-h-full bg-white select-none"
		style="--width:{$editor.canvas.width};--height:{$editor.canvas.height}"
	>
		{#each $editor.blocks as block}
			{#if block.type === 'text'}
				<TextBlock {block} />
			{/if}
		{/each}
	</svg>
</div>

<style>
	.aspect {
		aspect-ratio: var(--width) / var(--height);
	}
</style>
