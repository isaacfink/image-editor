<script lang="ts">
	import { NumberInputWithButtons } from '$lib/components/inputs';
	import { getEditor } from '$lib/context';

	const editor = getEditor();
</script>

{#if $editor.current.activeBlock}
	<div class="grid grid-cols-5 gap-x-2 mt-3">
		<p class="label">Size</p>
		<div class="col-span-2">
			<NumberInputWithButtons
				prefix="w"
				min={0}
				max={$editor.current.canvas.width - $editor.current.activeBlock.x}
				bind:value={$editor.current.activeBlock.width}
			/>
		</div>
		<div class="col-span-2">
			<NumberInputWithButtons
				prefix="h"
				min={0}
				max={$editor.current.canvas.height - $editor.current.activeBlock.y}
				bind:value={$editor.current.activeBlock.height}
			/>
		</div>
	</div>
{/if}
