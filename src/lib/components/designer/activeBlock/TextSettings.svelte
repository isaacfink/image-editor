<script>
	import { NumberInputWithButtons } from '$lib/components/inputs';
	import { getEditor } from '$lib/context';
	import { AlignCenter, AlignLeft, AlignRight, MoveHorizontal, MoveVertical } from 'lucide-svelte';
	import {
		FontPicker,
		FontSize,
		FontSpacing,
		HAlign,
		Nudge,
		Position,
		Size,
		Corner
	} from './controls';

	const editor = getEditor();
</script>

{#if $editor.activeBlock && $editor.activeBlock.type === 'text'}
	<h3 class="h3">Layout</h3>
	<div class="w-full h-px bg-slate-300 my-3" />
	<Size />

	<Position />
	<Nudge />

	<div class="w-full h-px bg-slate-300 my-3" />

	<h3 class="h3">Layer</h3>
	<Corner />
	<p>corner</p>
	<p>border</p>
	<p>shadow</p>
	<p>padding</p>
	<p>rotation</p>

	<div class="flex items-center">
		<span class="label">flip</span>
		<MoveHorizontal size={16} />
		<MoveVertical size={16} />
	</div>
	<div class="w-full h-px bg-slate-300 my-3" />

	<h3 class="h3">Text</h3>

	<textarea
		name=""
		id=""
		cols="30"
		rows="10"
		class="rounded-md border border-slate-300 w-full"
		bind:value={$editor.activeBlock.text}
	/>
	<div class="w-full h-px bg-slate-300 my-3" />

	<h3 class="h3">Color</h3>
	<p class="label">Fill</p>
	<p class="label">Color</p>

	<div class="w-full h-px bg-slate-300 my-3" />

	<h3 class="h3">Font</h3>

	<FontPicker />
	<p class="">weight</p>
	<FontSize />
	<p class="">line</p>
	<FontSpacing />
	<HAlign />
	<p class="">v-align</p>
	<p class="">style</p>
	<p class="">decoration</p>
	<p class="">transform</p>
	<p class="">shadow</p>
	<p class="">stroke</p>
{/if}
