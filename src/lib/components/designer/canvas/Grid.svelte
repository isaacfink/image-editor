<script lang="ts">
	import { getEditor } from '$lib/context';

	const editor = getEditor();
</script>

{#each { length: $editor.canvas.grid.columns - 1 } as _, index}
	{@const width = $editor.canvas.width / $editor.canvas.grid.columns}
	<rect
		x={width * (index + 1)}
		width={'2px'}
		height={$editor.canvas.height}
		y={0}
		fill={$editor.canvas.accentColor}
		stroke="none"
	/>
{/each}

{#each { length: $editor.canvas.grid.rows - 1 } as _, index}
	{@const height = $editor.canvas.height / $editor.canvas.grid.rows}
	<rect
		y={height * (index + 1)}
		height={'2px'}
		width={$editor.canvas.width}
		x={0}
		fill={$editor.canvas.accentColor}
		stroke="none"
	/>
{/each}
