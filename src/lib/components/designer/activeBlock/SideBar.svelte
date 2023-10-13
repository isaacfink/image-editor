<script lang="ts">
	import { getEditor } from '$lib/context';
	import EditorSettings from './EditorSettings.svelte';
	import ImageSettings from './ImageSettings.svelte';
	import ShapeSettings from './ShapeSettings.svelte';
	import TextSettings from './TextSettings.svelte';

	const editor = getEditor();
</script>

{#if $editor.current.activeBlock === null}
	<EditorSettings />
{:else if $editor.current.activeBlock.type === 'image'}
	<ImageSettings />
{:else if $editor.current.activeBlock.type === 'shape'}
	<ShapeSettings />
{:else if $editor.current.activeBlock.type === 'text'}
	<TextSettings />
{/if}
