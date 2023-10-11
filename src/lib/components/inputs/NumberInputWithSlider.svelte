<script lang="ts">
	import { createSlider } from '@melt-ui/svelte';
	import NumberWithButtons from './NumberWithButtons.svelte';
	import { writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';

	export let value: number;

	const {
		elements: { range, root, thumb },
		states: { value: sliderValue }
	} = createSlider({
		min: 0,
		max: 10,
		step: 1,
		value: writable([value])
	});

	sliderValue.subscribe((v) => {
		value = v[0];
	});

	$: value && ($sliderValue = [value]);

	const dispatch = createEventDispatcher();
	$: value && dispatch('change', value);
</script>

<span {...$root} use:root class="relative flex h-[20px] w-[105px] shrink-0 items-center mr-6">
	<span class="block h-[3px] w-full bg-slate-100">
		<span {...$range} use:range class="h-[3px] bg-slate-700" />
	</span>
	<span
		{...$thumb()}
		use:thumb
		class="block h-3 w-3 rounded-full bg-slate-300 focus:ring-4 focus:ring-slate-200"
	/>
</span>
<NumberWithButtons bind:value />
