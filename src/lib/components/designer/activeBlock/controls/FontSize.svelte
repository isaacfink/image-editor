<script lang="ts">
	import { NumberInputWithButtons } from '$lib/components/inputs';
	import { getEditor } from '$lib/context';

	const editor = getEditor();
</script>

{#if $editor.current.activeBlock && $editor.current.activeBlock.type === 'text'}
	<div class="flex justify-between items-center">
		<span class="label">Size</span>
		<NumberInputWithButtons bind:value={$editor.current.activeBlock.font.size} />
	</div>
{/if}
