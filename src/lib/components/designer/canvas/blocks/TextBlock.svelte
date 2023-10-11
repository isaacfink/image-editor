<script lang="ts">
	import { getEditor } from '$lib/context';
	import type { TextBlock } from '$types';

	export let block: TextBlock;

	const editor = getEditor();
	function handleClick() {
		editor.update((e) => {
			e.activeBlock = block;
			return e;
		});
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<text x={block.x} y={block.y} on:keypress on:click={handleClick}>
	{#each block.text.split('\n') as line}
		<tspan x={block.x} dy="{block.font.lineheight}em">{line}</tspan>
	{/each}
</text>
