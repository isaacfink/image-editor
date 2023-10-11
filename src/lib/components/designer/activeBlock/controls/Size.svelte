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
				prefix="w"
				min={0}
				max={$editor.canvas.width - $editor.activeBlock.x}
				bind:value={$editor.activeBlock.width}
			/>
		</div>
		<div class="col-span-2">
			<NumberInputWithButtons
				prefix="h"
				min={0}
				max={$editor.canvas.height - $editor.activeBlock.y}
				bind:value={$editor.activeBlock.height}
			/>
		</div>
	</div>
{/if}
