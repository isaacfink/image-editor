<script lang="ts">
	import { getEditor } from '$lib/context';
	import type { TextBlock } from '$types';

	import { AlignCenter, AlignLeft, AlignRight } from 'lucide-svelte';
	const editor = getEditor();

	function setAlignment(value: TextBlock['font']['hAlign']) {
		editor.push((e) => {
			if (e.activeBlock && e.activeBlock.type === 'text') {
				e.activeBlock.font.hAlign = value;
			}
			return e;
		});
	}
</script>

{#if $editor.current.activeBlock && $editor.current.activeBlock.type === 'text'}
	<div class="flex items-center justify-between my-3">
		<p class="label">Align</p>
		<div class="flex items-center gap-x-2">
			<button
				on:click={() => setAlignment('start')}
				class="p-1 text-slate-600 rounded w-6 h-6 flex items-center justify-center {$editor.current
					.activeBlock.font.hAlign === 'start'
					? 'bg-slate-200'
					: 'hover:bg-slate-100'}"
			>
				<AlignLeft />
			</button>
			<button
				on:click={() => setAlignment('middle')}
				class="p-1 text-slate-600 rounded w-6 h-6 flex items-center justify-center {$editor.current
					.activeBlock.font.hAlign === 'middle'
					? 'bg-slate-200'
					: 'hover:bg-slate-100'}"
			>
				<AlignCenter />
			</button>

			<button
				on:click={() => setAlignment('end')}
				class="p-1 text-slate-600 rounded w-6 h-6 flex items-center justify-center {$editor.current
					.activeBlock.font.hAlign === 'end'
					? 'bg-slate-200'
					: 'hover:bg-slate-100'}"
			>
				<AlignRight />
			</button>
		</div>
	</div>
{/if}
