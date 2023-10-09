<script lang="ts">
	import {
		Circle,
		Eye,
		Image,
		Square,
		Star,
		Type,
		Lock,
		EyeOff,
		Unlock,
		GripVertical
	} from 'lucide-svelte';
	import type { ImageBlock, ShapeBlock, TextBlock } from '$types';
	import { getEditor } from '$lib/context';

	export let block: ShapeBlock | ImageBlock | TextBlock;

	let editingMode = false;

	const editor = getEditor();
	function selectBlock() {
		editor.update((e) => {
			e.activeBlock = block;
			return e;
		});
	}

	let inputEl: HTMLInputElement;

	function handleEditingMode() {
		editingMode = true;
		setTimeout(() => {
			inputEl.focus();
		}, 0);
	}
</script>

<button
	on:click={selectBlock}
	class="rounded flex justify-between items-center py-2 px-3 text-slate-600 transition group w-full {$editor.activeBlock &&
	$editor.activeBlock.id === block.id
		? 'bg-slate-200'
		: ' hover:bg-slate-100'}"
>
	<div class="flex items-center gap-x-4 grow">
		<div class="flex-shrink-0 w-4 h-4 relative group/icon">
			<div
				class="absolute inset-0 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-75"
			>
				<GripVertical size={18} />
			</div>
			<div
				class="absolute inset-0 opacity-100 group-hover/icon:opacity-0 transition-opacity duration-75"
			>
				{#if block.type === 'shape'}
					{#if block.shape === 'circle'}
						<Circle size={18} />
					{:else if block.shape === 'star'}
						<Star size={18} />
					{:else if block.shape === 'rect'}
						<Square size={18} />
					{/if}
				{:else if block.type === 'image'}
					<Image size={18} />
				{:else if block.type === 'text'}
					<Type size={18} />
				{/if}
			</div>
		</div>
		{#if editingMode}
			<input
				bind:this={inputEl}
				on:blur={() => (editingMode = false)}
				type="text"
				bind:value={block.name}
			/>
		{:else}
			<button class="grow w-full text-left" on:dblclick={handleEditingMode}
				>{block.name || 'Enter name...'}</button
			>
		{/if}
	</div>
	<div class="flex opacity-0 group-hover:opacity-100 transition-opacity items-center gap-x-3">
		<button on:click={() => (block.isHidden = !block.isHidden)}>
			{#if block.isHidden}
				<EyeOff size={18} />
			{:else}
				<Eye size={18} />
			{/if}
		</button>
		<button on:click={() => (block.isLocked = !block.isLocked)}>
			{#if block.isLocked}
				<Lock size={18} />
			{:else}
				<Unlock size={18} />
			{/if}
		</button>
	</div>
</button>
