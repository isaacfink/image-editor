<script lang="ts">
	import { getEditor } from '$lib/context';
	import { ArrowRight, ArrowLeft, ArrowDown, ArrowUp } from 'lucide-svelte';

	const editor = getEditor();

	const MOVE_AMOUNT = 5;

	function handleMoveUp() {
		editor.push((e) => {
			if (e.activeBlock) {
				e.activeBlock.y = Math.max(0, e.activeBlock.y - MOVE_AMOUNT);
			}
			return e;
		});
	}

	function handleMoveRight() {
		editor.push((e) => {
			if (e.activeBlock) {
				e.activeBlock.x = Math.min(
					e.canvas.width + e.activeBlock.width,
					e.activeBlock.x + MOVE_AMOUNT
				);
			}
			return e;
		});
	}

	function handleMoveDown() {
		editor.push((e) => {
			if (e.activeBlock) {
				e.activeBlock.y = Math.min(
					e.canvas.height - e.activeBlock.height,
					e.activeBlock.y + MOVE_AMOUNT
				);
			}
			return e;
		});
	}

	function handleMoveLeft() {
		editor.push((e) => {
			if (e.activeBlock) {
				e.activeBlock.x = Math.max(0, e.activeBlock.x - MOVE_AMOUNT);
			}
			return e;
		});
	}
</script>

{#if $editor.current.activeBlock}
	<div class="flex items-center justify-between my-3">
		<p class="label">Nudge</p>
		<div class="flex items-center justify-end gap-x-2">
			<button
				on:click={handleMoveUp}
				class="flex items-center h-6 w-6 p-1 justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition rounded"
			>
				<ArrowUp />
			</button>

			<button
				on:click={handleMoveRight}
				class="flex items-center h-6 w-6 p-1 justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition rounded"
			>
				<ArrowRight />
			</button>
			<button
				on:click={handleMoveDown}
				class="flex items-center h-6 w-6 p-1 justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition rounded"
			>
				<ArrowDown />
			</button>
			<button
				on:click={handleMoveLeft}
				class="flex items-center h-6 w-6 p-1 justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition rounded"
			>
				<ArrowLeft />
			</button>
		</div>
	</div>
{/if}
