<script lang="ts">
	import { NumberInputWithButtons } from '$lib/components/inputs';
	import { getEditor } from '$lib/context';

	const editor = getEditor();
</script>

{#if $editor.current.activeBlock && $editor.current.activeBlock.type === 'text'}
	<div class="grid grid-cols-5 gap-x-2 mt-3">
		<p class="label">Spacing</p>
		<div class="col-span-2">
			<NumberInputWithButtons
				prefix="x"
				bind:value={$editor.current.activeBlock.font.charSpacing}
				step={0.1}
			/>
		</div>
		<div class="col-span-2">
			<NumberInputWithButtons
				prefix="y"
				bind:value={$editor.current.activeBlock.font.lineheight}
				step={0.1}
			/>
		</div>
	</div>
{/if}
