<script lang="ts">
	import { Header } from '$lib/components/designer';
	import type { Editor } from '$types';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { BlocksList } from '$lib/components/designer/blocks';
	import { SideBar } from '$lib/components/designer/activeBlock';
	import { Canvas } from '$lib/components/designer/canvas';
	import { defaultEditor } from '$lib/consts';

	const components: { type: 'shape' | 'image' | 'text'; name: string }[] = [
		{ type: 'shape', name: 'Rectangle' },
		{ type: 'text', name: 'Circle' },
		{ type: 'image', name: 'Triangle' }
	];

	const editor = writable<Editor>(defaultEditor);

	setContext('editor', editor);
</script>

<div class="h-screen w-screen flex flex-col min-h-0">
	<div class="flex-1 flex-grow-0">
		<Header />
	</div>
	<div class="flex-grow w-full bg-red-100 flex max-h-full">
		<div class="shrink-0 bg-white border-l px-3 py-3 w-72">
			<BlocksList />
		</div>
		<div class="bg-slate-200 grow max-h-full overflow-y-auto">
			<Canvas />
		</div>
		<div class="bg-white shrink-0 px-2 py-3 max-h-full overflow-y-auto w-96">
			<SideBar />
		</div>
	</div>
</div>
