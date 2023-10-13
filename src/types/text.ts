import type { BaseBlock } from './block';

export interface TextBlock extends BaseBlock {
	type: 'text';
	text: string;

	color: {
		fill: string;
		color: string;
	};
	font: {
		family: string;
		weight: string;
		size: number;
		lineheight: number;
		charSpacing: number;
		hAlign: 'start' | 'middle' | 'end';
		vAlign: 'start' | 'center' | 'end';
		italic: boolean;
		decoration: {
			position: 'top' | 'bottom' | 'lineThorugh' | 'both';
			style: 'regular' | 'dash' | 'dots' | 'wavy' | 'double';
			color: string;
		} | null;
		transform: 'uppercase' | 'lowercase' | 'capitalize' | null;
		shadow: {
			xOffset: number;
			yOffset: number;
			blur: number;
			color: string;
		} | null;
		stroke: {
			color: string;
			width: number;
		};
	};
}
