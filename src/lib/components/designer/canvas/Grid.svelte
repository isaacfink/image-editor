<script lang="ts">
	import { getEditor } from '$lib/context';

	const editor = getEditor();
</script>

{#each { length: $editor.current.canvas.grid.columns - 1 } as _, index}
	{@const width = $editor.current.canvas.width / $editor.current.canvas.grid.columns}
	<rect
		x={width * (index + 1)}
		width={'2px'}
		height={$editor.current.canvas.height}
		y={0}
		fill={$editor.current.canvas.accentColor}
		stroke="none"
	/>
{/each}

{#each { length: $editor.current.canvas.grid.rows - 1 } as _, index}
	{@const height = $editor.current.canvas.height / $editor.current.canvas.grid.rows}
	<rect
		y={height * (index + 1)}
		height={'2px'}
		width={$editor.current.canvas.width}
		x={0}
		fill={$editor.current.canvas.accentColor}
		stroke="none"
	/>
{/each}
