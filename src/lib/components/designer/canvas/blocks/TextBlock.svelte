<script lang="ts">
	import { getEditor } from '$lib/context';
	import type { TextBlock } from '$types';

	export let block: TextBlock;

	const editor = getEditor();
	function handleClick() {
		editor.push((e) => {
			e.activeBlock = block;
			return e;
		});
	}

	$: x =
		block.font.hAlign === 'middle'
			? block.x + block.width / 2
			: block.font.hAlign === 'start'
			? block.x
			: block.width + block.x;

	// transform={`rotate(${block.rotation || 0} ${block.x + parseInt(block.width.toString()) / 2} ${block.y + (block.maxLines * block.lineHeight * block.fontSize) / 2})`}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if !block.isHidden}
	<text
		{x}
		y={block.y}
		on:keypress
		on:click={handleClick}
		fill={block.color.color}
		stroke-width={block.font.stroke.width}
		stroke={block.font.stroke.color}
		font-size={block.font.size}
		letter-spacing={block.font.charSpacing}
		text-anchor={block.font.hAlign}
	>
		{#each block.text.split('\n') as line}
			<tspan {x} dy="{block.font.lineheight}em">{line}</tspan>
		{/each}
	</text>

	<rect
		x={block.x}
		y={block.y}
		stroke="red"
		width={block.width}
		height={block.height}
		fill="none"
	/>
{/if}
