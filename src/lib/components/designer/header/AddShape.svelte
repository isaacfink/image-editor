<script lang="ts">
	import { getEditor } from '$lib/context';
	import { defaultShape } from '$lib/consts';
	import { Image, Star, Circle, Square } from 'lucide-svelte';
	import { getRandomString } from '$lib/utils';
	import type { ShapeBlock } from '$types';
	import { createPopover } from '@melt-ui/svelte';

	const editor = getEditor();
	function addNewBlock(shape: ShapeBlock['shape']) {
		editor.push((e) => {
			e.blocks.push({
				...defaultShape,
				id: getRandomString(28),
				shape: shape,
				name: `image_${getRandomString(5)}`
			});
			return e;
		});
	}

	const {
		elements: { trigger, content, close }
	} = createPopover();
</script>

<button
	{...$trigger}
	use:trigger
	class="flex flex-col py-1 px-2 justify-center items-center btn w-16"
>
	<Star strokeWidth={1.6} />
	<span class="font-light">shape</span>
</button>

<div
	class="rounded-md py-3 px-2 bg-white border border-slate-200 flex flex-col gap-y-1"
	{...$content}
	use:content
>
	<button
		use:close
		{...$close}
		class="rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-700 flex items-center justify-start gap-x-2 py-1 px-2"
		on:click={() => addNewBlock('star')}
	>
		<Star size={20} />
		<span>star</span>
	</button>
	<button
		use:close
		{...$close}
		class="rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-700 flex items-center justify-start gap-x-2 py-1 px-2"
		on:click={() => addNewBlock('circle')}
	>
		<Circle size={20} />
		<span>circle</span>
	</button>
	<button
		use:close
		{...$close}
		class="rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-700 flex items-center justify-start gap-x-2 py-1 px-2"
		on:click={() => addNewBlock('rect')}
	>
		<Square size={20} />
		<span>rectangle</span>
	</button>
</div>
