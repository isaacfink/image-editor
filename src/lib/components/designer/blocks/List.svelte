<script lang="ts">
	import { getEditor } from '$lib/context';
	import { Circle, Eye, Image, Lock, Square, Star, Type } from 'lucide-svelte';
	import Block from './Block.svelte';

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
		<Block bind:block />
	{/each}
</div>
