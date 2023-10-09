import type { ImageBlock } from './image';
import type { ShapeBlock } from './shape';
import type { TextBlock } from './text';

export interface Editor {
	blocks: (ImageBlock | TextBlock | ShapeBlock)[];
	activeBlock: ImageBlock | TextBlock | ShapeBlock | null;
	canvas: {
		width: number;
		height: number;
		grid: {
			show: boolean;
			columns: number;
			rows: number;
		};
		accentColor: string;
	};
}
