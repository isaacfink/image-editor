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

<div class="max-h-screen w-screen flex flex-col min-h-screen dark:bg-slate-900 overflow-hidden">
	<div class="flex-1 flex-grow-0">
		<Header />
	</div>
	<div class="grow w-full flex max-h-full min-h-0">
		<div class="shrink-0 grow-0 bg-white dark:bg-slate-900 border-l px-3 py-3 w-72">
			<BlocksList />
		</div>
		<div class="bg-slate-200 dark:bg-slate-800 grow max-h-full overflow-y-auto min-h-0">
			<Canvas />
		</div>
		<div class="bg-white dark:bg-slate-900 shrink-0 px-2 py-3 max-h-full overflow-y-auto w-96">
			<SideBar />
		</div>
	</div>
	<div class="shrink-0 flex items-center justify-center bg-slate-100 text-slate-600">
		Made with ❤️ by &nbsp; <a
			class="text-slate-700 hover:underline"
			target="_blank"
			href="https://aluf.dev"
		>
			Isaac Finkelstein</a
		>
	</div>
</div>
