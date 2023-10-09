import type { ShapeBlock } from '../../types';

export const defaultShape: ShapeBlock = {
	border: {
		bottom: 0,
		color: '#000000',
		left: 0,
		right: 0,
		top: 0
	},
	color: {
		fill: '#ffffff',
		stroke: '#000000'
	},
	corner: {
		bl: 0,
		br: 0,
		tl: 0,
		tr: 0
	},
	flip: {
		h: false,
		v: false
	},
	height: 100,
	isHidden: false,
	isLocked: false,
	name: 'Text',
	padding: {
		bottom: 0,
		left: 0,
		right: 0,
		top: 0
	},
	type: 'shape',
	width: 100,
	x: 0,
	y: 0,
	shape: 'circle'
};
