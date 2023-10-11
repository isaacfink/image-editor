<script lang="ts">
	import { NumberInputWithButtons } from '$lib/components/inputs';
</script>

<div class="grid grid-cols-5 gap-x-2 mt-3">
	<p class="label">Spacing</p>
	<div class="col-span-2">
		<NumberInputWithButtons prefix="x" value={120} step={0.1} />
	</div>
	<div class="col-span-2">
		<NumberInputWithButtons prefix="y" value={120} step={0.1} />
	</div>
</div>
