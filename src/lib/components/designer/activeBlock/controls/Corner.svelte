<script lang="ts">
	import { Maximize, X } from 'lucide-svelte';
	import { createPopover, createSlider } from '@melt-ui/svelte';
	import { writable } from 'svelte/store';
	import NumberInputWithSlider from '$lib/components/inputs/NumberInputWithSlider.svelte';
	import { getEditor } from '$lib/context';
	import { NumberInputWithButtons } from '$lib/components/inputs';

	const editor = getEditor();

	let value = 0;
	const {
		elements: { arrow, close, content, trigger },
		ids: { content: contentId, trigger: triggerId },
		states: { open }
	} = createPopover({
		positioning: {
			placement: 'left'
		}
	});
</script>

{#if $editor.activeBlock}
	<div class="grid items-centr justify-between grid-cols-5 gap-x-6">
		<p class="label">Corner</p>
		<div class="flex items-center gap-x-2">
			<NumberInputWithSlider {value} />
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
			<p class="label">Corner</p>
			<div class="flex items-center gap-x-2">
				<NumberInputWithButtons bind:value />
			</div>
		</div>
	</div>
{/if}
