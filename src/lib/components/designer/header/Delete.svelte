<script lang="ts">
	import { getEditor } from '$lib/context';
	import { Trash } from 'lucide-svelte';

	const editor = getEditor();

	function handleDelete() {
		editor.update((e) => {
			if (e.activeBlock !== null) {
				let id = e.activeBlock.id;
				e.blocks = e.blocks.filter((b) => b.id !== id);
				e.activeBlock = null;
			}
			return e;
		});
	}
</script>

<button
	disabled={$editor.activeBlock == null}
	class="flex flex-col py-1 px-2 justify-center items-center btn disabled:opacity-50"
	on:click={handleDelete}
>
	<Trash strokeWidth={1.6} />
	<span class="font-light">Delete</span>
</button>
