<script lang="ts">
	import { getEditor } from '$lib/context';
	import { Copy, Eye, EyeOff } from 'lucide-svelte';

	const editor = getEditor();

	function toggleHidden() {
		editor.push((e) => {
			if (e.activeBlock !== null) {
				e.activeBlock.isHidden = !e.activeBlock.isHidden;
			}
			return e;
		});
	}
</script>

<button
	disabled={$editor.current.activeBlock == null}
	class="flex flex-col py-1 px-2 justify-center items-center btn disabled:opacity-50 w-16"
	on:click={toggleHidden}
>
	{#if $editor.current.activeBlock != null}
		{#if $editor.current.activeBlock.isHidden}
			<EyeOff strokeWidth={1.6} />
		{:else}
			<Eye strokeWidth={1.6} />
		{/if}
	{:else}
		<Eye strokeWidth={1.6} />
	{/if}
	<span class="font-light">Hide</span>
</button>
