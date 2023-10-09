import type { Editor } from '$types';

export const defaultEditor: Editor = {
	activeBlock: null,
	blocks: [],
	canvas: {
		accentColor: '#000000',
		grid: {
			show: false,
			columns: 12,
			rows: 12
		},
		width: 600,
		height: 800
	}
};
