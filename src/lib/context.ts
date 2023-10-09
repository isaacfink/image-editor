import { getContext } from 'svelte';
import type { Editor } from '../types';
import type { Writable } from 'svelte/store';

export const getEditor = () => {
	return getContext<Writable<Editor>>('editor');
};
