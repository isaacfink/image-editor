<script lang="ts">
	import { NumberInputWithButtons } from '$lib/components/inputs';
	import { getEditor } from '$lib/context';

	const editor = getEditor();
</script>

{#if $editor.activeBlock}
	<div class="grid grid-cols-5 gap-x-2 mt-3">
		<p class="label">Position</p>
		<div class="col-span-2">
			<NumberInputWithButtons
				prefix="x"
				min={0}
				max={$editor.canvas.width - $editor.activeBlock.width}
				bind:value={$editor.activeBlock.x}
			/>
		</div>
		<div class="col-span-2">
			<NumberInputWithButtons
				prefix="y"
				min={0}
				max={$editor.canvas.height - $editor.activeBlock.height}
				bind:value={$editor.activeBlock.y}
			/>
		</div>
	</div>
{/if}
