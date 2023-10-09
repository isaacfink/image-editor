<script lang="ts">
	import { getEditor } from '$lib/context';
	import { Circle, Eye, Image, Lock, Square, Star, Type } from 'lucide-svelte';

	const editor = getEditor();
</script>

<div class="flex justify-between items-center">
	<h3 class="font-semibold text-slate-900">blocks</h3>
	<button class="btn">
		<Lock color="currentcolor" size={18} />
	</button>
</div>

<div class="flex flex-col gap-y-1 mt-3">
	{#each $editor.blocks as block}
		<button
			class="rounded flex justify-between items-center py-2 px-3 hover:bg-slate-100 text-slate-600 transition group w-full"
		>
			<div class="flex items-center gap-x-4">
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
				<span>{block.name}</span>
			</div>
			<div class="flex opacity-0 group-hover:opacity-100 transition-opacity items-center gap-x-3">
				<Eye size={18} />
				<Lock size={18} />
			</div>
		</button>
	{/each}
</div>
