<script lang="ts">
	import { createCombobox } from '@melt-ui/svelte';
	import { Check } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	interface Font {
		name: string;
		url: string;
		weight: (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)[];
	}
	let fonts: Font[] = [
		{
			name: 'Roboto',
			url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap',
			weight: [100, 200, 300, 400, 500, 600, 700, 800, 900]
		},
		{
			name: 'Roboto Mono',
			url: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap',
			weight: [100, 200, 300, 400, 500, 600, 700, 800, 900]
		},
		{
			name: 'Roboto Slab',
			url: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap',
			weight: [100, 200, 300, 400, 500, 600, 700, 800, 900]
		},
		{
			name: 'Comic sans',
			url: 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@100;200;300;400;500;600;700;800;900&display=swap',
			weight: [100, 200, 300, 400, 500, 600, 700, 800, 900]
		}
	];

	$: filteredFonts = $touchedInput
		? fonts.filter(({ name }) => {
				const normalizedInput = $inputValue.toLowerCase();
				return name.toLowerCase().includes(normalizedInput);
		  })
		: fonts;

	const {
		elements: { input, label, menu, option },
		helpers: { isHighlighted, isSelected },
		ids: { input: inputId, label: labelId, menu: menuId },
		options: {},
		states: { inputValue, highlighted, open, selected, touchedInput }
	} = createCombobox();
</script>

<div class="flex items-center justify-between">
	<span {...$label} use:label class="label">Family</span>
	<div class="">
		<input
			{...$input}
			use:input
			class="flex h-7 items-center justify-between rounded-lg border border-slate-400 focus:border-slate-700 focus:ring-0 focus:outline-none px-3 pr-12 text-black"
			placeholder="Font family"
		/>
	</div>
</div>

{#if $open}
	<ul
		class="z-10 flex max-h-[300px] flex-col overflow-hidden rounded-lg border border-slate-300"
		{...$menu}
		use:menu
		transition:fly={{ duration: 150, y: -5 }}
	>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div
			class="flex max-h-full flex-col gap-0 overflow-y-auto bg-white px-2 py-2 text-black"
			tabindex="0"
		>
			{#each filteredFonts as font, index (index)}
				<li
					{...$option({ value: font.name, disabled: false, label: font.name })}
					use:option
					class="relative cursor-pointer scroll-my-2 rounded-md py-2 px-2 hover:bg-slate-100 data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-700 data-[disabled]:opacity-50"
				>
					{#if $isSelected(font)}
						<div class="check absolute left-2 top-1/2 z-10 text-slate-900">
							<Check class="square-4" />
						</div>
					{/if}
					<div class="pl-4">
						<span class="font-medium">{font.name}</span>
						<span class="px-1 py-0.5 rounded bg-slate-200 text-xs"
							>{font.weight.length} weights</span
						>
					</div>
				</li>
			{:else}
				<li class="relative cursor-pointer rounded-md py-1 pl-8 pr-4">No results found</li>
			{/each}
		</div>
	</ul>
{/if}
