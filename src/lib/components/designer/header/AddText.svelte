<script lang="ts">
	import { getEditor } from '$lib/context';
	import { defaultText } from '$lib/consts';
	import { Image, Type } from 'lucide-svelte';
	import { getRandomString } from '$lib/utils';

	const editor = getEditor();
	function addNewBlock() {
		editor.push((e) => {
			console.log(e);
			e.blocks.push({
				...defaultText,
				id: getRandomString(28),
				name: `text_${getRandomString(5)}`
			});
			return e;
		});
	}
</script>

<button on:click={addNewBlock} class="flex flex-col py-1 px-2 justify-center items-center btn w-16">
	<Type strokeWidth={1.6} />
	<span class="font-light">text</span>
</button>
