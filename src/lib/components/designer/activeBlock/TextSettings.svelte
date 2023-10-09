<script>
	import { NumberInputWithButtons, NumberWIthIndividualValues } from '$lib/components/inputs';
	import { getEditor } from '$lib/context';
	import { MoveHorizontal, MoveVertical } from 'lucide-svelte';

	const editor = getEditor();
</script>

{#if $editor.activeBlock && $editor.activeBlock.type === 'text'}
	<h3 class="h3">Layout</h3>
	<div class="w-full h-px bg-slate-300 my-3" />
	<div class="grid grid-cols-5 gap-x-2 mt-3">
		<p class="label">Size</p>
		<div class="col-span-2">
			<NumberInputWithButtons prefix="w" value={300} />
		</div>
		<div class="col-span-2">
			<NumberInputWithButtons prefix="h" value={300} />
		</div>
	</div>

	<div class="grid grid-cols-5 gap-x-2 mt-3">
		<p class="label">Position</p>
		<div class="col-span-2">
			<NumberInputWithButtons prefix="x" value={120} />
		</div>
		<div class="col-span-2">
			<NumberInputWithButtons prefix="y" value={120} />
		</div>
	</div>

	<div class="w-full h-px bg-slate-300 my-3" />

	<h3 class="h3">Layer</h3>

	<NumberWIthIndividualValues label="corner" value={0} />
	<NumberWIthIndividualValues label="border" value={0} />
	<NumberWIthIndividualValues label="shadow" value={0} />
	<NumberWIthIndividualValues label="padding" value={0} />
	<NumberWIthIndividualValues label="rotation" value={0} />

	<div class="flex items-center">
		<span class="label">flip</span>
		<MoveHorizontal size={16} />
		<MoveVertical size={16} />
	</div>
	<div class="w-full h-px bg-slate-300 my-3" />

	<h3 class="h3">Text</h3>

	<textarea
		name=""
		id=""
		cols="30"
		rows="10"
		class="rounded-md border border-slate-300 w-full"
		bind:value={$editor.activeBlock.text}
	/>
	<div class="w-full h-px bg-slate-300 my-3" />

	<h3 class="h3">Color</h3>
	<p class="label">Fill</p>
	<p class="label">Color</p>
{/if}
