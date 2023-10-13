<script lang="ts">
	import { getEditor } from '$lib/context';
	import { Copy } from 'lucide-svelte';

	const editor = getEditor();
</script>

<button
	disabled={$editor.current.activeBlock == null}
	class="flex flex-col py-1 px-2 justify-center items-center btn disabled:opacity-50 w-16"
>
	<Copy strokeWidth={1.6} />
	<span class="font-light">Copy</span>
</button>
