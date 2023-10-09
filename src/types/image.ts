import type { BaseBlock } from './block';

export interface ImageBlock extends BaseBlock {
	type: 'image';
	color: {
		fill: string;
	};
	image: string;
	scale: {
		zoom: number;
		x: number;
		y: number;
		objectFit: 'fill' | 'fit';
	};
	filters: {
		blur: NumberOrNull;
		brightness: NumberOrNull;
		contrast: NumberOrNull;
		grayscale: NumberOrNull;
		hueRotate: NumberOrNull;
		invert: NumberOrNull;
		opacity: NumberOrNull;
		saturate: NumberOrNull;
		sepia: NumberOrNull;
	};
}

type NumberOrNull = number | null;
