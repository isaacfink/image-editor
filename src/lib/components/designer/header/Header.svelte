<script>
	import { createDialog } from '@melt-ui/svelte';
	import { Copy, Eye, Image, Redo, Star, Trash, Type, Undo } from 'lucide-svelte';
	import AddText from './AddText.svelte';
	import AddImage from './AddImage.svelte';
	import AddShape from './AddShape.svelte';
	import Duplicate from './Duplicate.svelte';
	import Delete from './Delete.svelte';
	import Hide from './Hide.svelte';

	const {
		elements: { close, content, trigger },
		states: { open }
	} = createDialog();
</script>

<div class="w-full border-b shrink-0 flex justify-between items-center py-1 px-3">
	<button class="rounded p-2 bg-slate-100 text-slate-800">Logo</button>
	<div class="flex items-center justify-center gap-x-2">
		<AddText />

		<AddImage />
		<AddShape />

		<Duplicate />
		<Hide />
		<Delete />
		<button class="flex flex-col py-1 px-2 justify-center items-center btn">
			<Undo strokeWidth={1.6} />
			<span class="font-light">Undo</span>
		</button>
		<button class="flex flex-col py-1 px-2 justify-center items-center btn">
			<Redo strokeWidth={1.6} />
			<span class="font-light">Redo</span>
		</button>
	</div>
	<button class="rounded p-2 bg-slate-100 text-slate-800" {...$trigger} use:trigger>Export</button>
</div>

<div class="fixed inset-0" {...$content} use:content>modal content</div>
