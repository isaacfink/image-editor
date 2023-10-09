<script lang="ts">
	import { getEditor } from '$lib/context';
	import { defaultImage } from '$lib/consts';
	import { Image, Type } from 'lucide-svelte';
	import { getRandomString } from '$lib/utils';

	const editor = getEditor();
	function addNewBlock() {
		editor.update((e) => {
			e.blocks.push({
				...defaultImage,
				id: getRandomString(28),
				name: `image_${getRandomString(5)}`
			});
			return e;
		});
	}
</script>

<button on:click={addNewBlock} class="flex flex-col py-1 px-2 justify-center items-center btn w-16">
	<Image strokeWidth={1.6} />
	<span class="font-light">image</span>
</button>
