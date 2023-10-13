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

{#if $editor.current.activeBlock}
	<div class="grid items-center justify-between grid-cols-5 gap-x-6">
		<p class="label">Corner</p>
		<div class="flex items-center gap-x-2">
			<NumberInputWithSlider {value} />
			<button class="btn" use:trigger {...$trigger}>
				<Maximize size={18} />
			</button>
		</div>
	</div>

	<div class="bg-white rounded-md border border-slate-200 w-96" use:content {...$content}>
		<div class="flex items-center justify-between px-3 py-2 border-b border-slate-200">
			<h3 class="h3">Border radius</h3>
			<button class="btn" use:close {...$close}>
				<X />
			</button>
		</div>
		<div class="flex flex-col gap-y-2 my-3 px-3">
			<div class="flex items-center justify-between gap-x-6">
				<p class="label">Top left</p>
				<div class="flex items-center gap-x-2">
					<NumberInputWithSlider bind:value={$editor.current.activeBlock.corner.tl} />
				</div>
			</div>
			<div class="flex items-center justify-between gap-x-6">
				<p class="label">Top right</p>
				<div class="flex items-center gap-x-2">
					<NumberInputWithSlider bind:value={$editor.current.activeBlock.corner.tr} />
				</div>
			</div>
			<div class="flex items-center justify-between gap-x-6">
				<p class="label">Bottom left</p>
				<div class="flex items-center gap-x-2">
					<NumberInputWithSlider bind:value={$editor.current.activeBlock.corner.bl} />
				</div>
			</div>
			<div class="flex items-center justify-between gap-x-6">
				<p class="label">Bottom right</p>
				<div class="flex items-center gap-x-2">
					<NumberInputWithSlider bind:value={$editor.current.activeBlock.corner.br} />
				</div>
			</div>
		</div>
	</div>
{/if}
