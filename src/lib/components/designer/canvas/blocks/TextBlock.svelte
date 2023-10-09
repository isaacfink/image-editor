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

{#each block.text.split('\n') as line}
	<text on:keypress on:click={handleClick}>{line}</text>
{/each}
