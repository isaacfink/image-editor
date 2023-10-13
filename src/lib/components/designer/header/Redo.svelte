<script lang="ts">
	import { getEditor } from '$lib/context';
	import { Redo } from 'lucide-svelte';

	const editor = getEditor();
</script>

<button
	disabled={$editor.last}
	class="flex flex-col py-1 px-2 justify-center items-center btn w-16 disabled:opacity-50"
>
	<Redo strokeWidth={1.6} />
	<span class="font-light">Redo</span>
</button>
