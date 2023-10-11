<script>
	import { createDialog } from '@melt-ui/svelte';
	import AddText from './AddText.svelte';
	import AddImage from './AddImage.svelte';
	import AddShape from './AddShape.svelte';
	import Duplicate from './Duplicate.svelte';
	import Delete from './Delete.svelte';
	import Hide from './Hide.svelte';
	import Undo from './Undo.svelte';
	import Redo from './Redo.svelte';

	const {
		elements: { close, content, trigger },
		states: { open }
	} = createDialog();
</script>

<div class="w-full border-b shrink-0 flex justify-between items-center py-1 px-3">
	<button class="rounded p-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
		>Logo</button
	>
	<div class="flex items-center justify-center gap-x-2">
		<AddText />

		<AddImage />
		<AddShape />
		<div class="h-8 w-px bg-slate-300 dark:bg-slate-700" />
		<Duplicate />
		<Hide />
		<Delete />
		<div class="h-8 w-px bg-slate-300 dark:bg-slate-700" />
		<Undo />
		<Redo />
	</div>
	<button
		class="rounded p-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
		{...$trigger}
		use:trigger>Export</button
	>
</div>

<div class="fixed inset-0" {...$content} use:content>modal content</div>
