import { getContext } from 'svelte';
import type { Editor, SnapPoints } from '../types';
import type { Writable } from 'svelte/store';
import type { createStack } from '$lib/utils';

export const getEditor = () => {
	return getContext<ReturnType<typeof createStack<Editor>>>('editor');
};

export const getSnapPoints = () => {
	return getContext<Writable<{ l: SnapPoints; r: SnapPoints; t: SnapPoints; b: SnapPoints }>>(
		'snapPoints'
	);
};
