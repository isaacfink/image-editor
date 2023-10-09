<script lang="ts">
	import { Type, Image, Star, Eye, Lock } from 'lucide-svelte';
	import { NumberInputWithButtons, NumberWIthIndividualValues } from '$lib/components/inputs';
	import { Header } from '$lib/components/designer';
	import type { Editor } from '../../types';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { BlocksList } from '$lib/components/designer/blocks';

	const components: { type: 'shape' | 'image' | 'text'; name: string }[] = [
		{ type: 'shape', name: 'Rectangle' },
		{ type: 'text', name: 'Circle' },
		{ type: 'image', name: 'Triangle' }
	];

	const editor = writable<Editor>({
		activeBlock: null,
		blocks: []
	});

	setContext('editor', editor);
</script>

<div class="h-screen w-screen flex flex-col">
	<Header />
	<div class="flex-grow w-full bg-red-100 flex max-h-full">
		<div class="shrink-0 bg-white border-l px-3 py-3 w-72">
			<BlocksList />
		</div>
		<div class="bg-slate-200 grow" />
		<div class="bg-white shrink-0 px-2 py-3 max-h-full overflow-y-auto">
			<h3 class="h3">layout</h3>
			<div class="grid grid-cols-5 items-center gap-x-2 mt-2">
				<span class="label">size</span>
				<div class="col-span-2">
					<NumberInputWithButtons prefix="w" value={300} />
				</div>
				<div class="col-span-2">
					<NumberInputWithButtons prefix="h" value={300} />
				</div>
			</div>
			<div class="grid grid-cols-5 items-center gap-x-2 mt-2">
				<span class="label">position</span>
				<div class="col-span-2">
					<NumberInputWithButtons prefix="x" value={300} />
				</div>
				<div class="col-span-2">
					<NumberInputWithButtons prefix="y" value={300} />
				</div>
			</div>
			<div class="h-px w-full my-3 bg-slate-400" />
			<h3 class="h3">layer</h3>
			<div class="flex flex-col gap-y-2">
				<NumberWIthIndividualValues value={100} label={'border'} />
				<NumberWIthIndividualValues value={100} label={'shadow'} />
				<NumberWIthIndividualValues value={100} label={'padding'} />
				<NumberWIthIndividualValues value={100} label={'rotation'} />
				<NumberWIthIndividualValues value={100} label={'flip'} />
				<NumberWIthIndividualValues value={100} label={'text'} />
			</div>
			<div class="h-96" />
			<div class="h-96" />
			<div class="h-96" />
			<div class="h-96" />
			<div class="h-96" />
			<textarea name="" class="border" id="" cols="30" rows="10" />
			<p>color</p>
			<p>fill</p>
			<p>color</p>
			<p>font</p>
			<p>family</p>
			<p>weight</p>
			<p>size</p>
			<p>line</p>
			<p>spacing</p>
			<p>align</p>
			<p>v-align</p>
			<p>style</p>
			<p>decoration</p>
			<p>transform</p>
			<p>shadow</p>
			<p>stroke</p>
		</div>
	</div>
</div>
