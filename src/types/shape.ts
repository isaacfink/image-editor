import type { BaseBlock } from './block';

export interface ShapeBlock extends BaseBlock {
	type: 'shape';
	shape: 'circle' | 'star' | 'rect';
	color: {
		stroke: string;
		fill: string;
	};
}
