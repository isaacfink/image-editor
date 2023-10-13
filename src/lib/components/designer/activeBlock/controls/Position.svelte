<script lang="ts">
	import { NumberInputWithButtons } from '$lib/components/inputs';
	import { getEditor } from '$lib/context';

	const editor = getEditor();
</script>

{#if $editor.current.activeBlock}
	<div class="grid grid-cols-5 gap-x-2 mt-3">
		<p class="label">Position</p>
		<div class="col-span-2">
			<NumberInputWithButtons
				prefix="x"
				min={0}
				max={$editor.current.canvas.width - $editor.current.activeBlock.width}
				bind:value={$editor.current.activeBlock.x}
			/>
		</div>
		<div class="col-span-2">
			<NumberInputWithButtons
				prefix="y"
				min={0}
				max={$editor.current.canvas.height - $editor.current.activeBlock.height}
				bind:value={$editor.current.activeBlock.y}
			/>
		</div>
	</div>
{/if}
