<script lang="ts">
	import { getEditor } from '$lib/context';
	import { Undo } from 'lucide-svelte';

	const editor = getEditor();
</script>

<button
	disabled={$editor.first}
	on:click={editor.undo}
	class="flex flex-col py-1 px-2 justify-center items-center btn w-16 disabled:opacity-50"
>
	<Undo strokeWidth={1.6} />
	<span class="font-light">Undo</span>
</button>
