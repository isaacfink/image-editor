<script>
	import { NumberInputWithButtons } from '$lib/components/inputs';
	import { getEditor } from '$lib/context';

	const editor = getEditor();
</script>

<h3 class="h3">Editor settings</h3>
<div class="w-full h-px bg-slate-300 dark:bg-slate-300 my-3" />
<div class="grid grid-cols-5 gap-x-2 mt-3">
	<p class="label">Size</p>
	<div class="col-span-2">
		<NumberInputWithButtons prefix="w" bind:value={$editor.current.canvas.width} />
	</div>
	<div class="col-span-2">
		<NumberInputWithButtons prefix="h" bind:value={$editor.current.canvas.height} />
	</div>
</div>

<div class="grid grid-cols-5 gap-x-2 mt-3">
	<p class="label">Grid size</p>
	<div class="col-span-2">
		<NumberInputWithButtons prefix="cols" bind:value={$editor.current.canvas.grid.columns} />
	</div>
	<div class="col-span-2">
		<NumberInputWithButtons prefix="rows" bind:value={$editor.current.canvas.grid.rows} />
	</div>
</div>

<p class="">accent color</p>
