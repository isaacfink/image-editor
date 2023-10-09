<script lang="ts">
	import { Maximize, X } from 'lucide-svelte';
	import { createPopover } from '@melt-ui/svelte';
	import NumberWithButtons from './NumberWithButtons.svelte';

	export let value: number;
	export let label: string;

	const {
		elements: { arrow, close, content, trigger },
		ids: { content: contentId, trigger: triggerId },
		states: { open }
	} = createPopover({
		positioning: {
			offset: {
				crossAxis: -1000,
				mainAxis: -1000
			}
		}
	});
</script>

<div class="flex items-centr justify-between grid-cols-5 gap-x-6">
	<p class="label">{label}</p>
	<div class="flex items-center gap-x-2">
		<input type="range" name="" id="" />
		<NumberWithButtons bind:value />
		<button class="btn" use:trigger {...$trigger}>
			<Maximize size={18} />
		</button>
	</div>
</div>

<div class="bg-white rounded-md border border-slate-200" use:content {...$content}>
	<div class="flex items-center justify-between px-3 py-2 border-b border-slate-200">
		<h3 class="h3">Border radius</h3>
		<button class="btn" use:close {...$close}>
			<X />
		</button>
	</div>
	<div class="flex items-centr justify-between grid-cols-5 gap-x-6 px-2 py-3">
		<p class="label">{label}</p>
		<div class="flex items-center gap-x-2">
			<input type="range" name="" id="" />
			<NumberWithButtons bind:value />
		</div>
	</div>
</div>
