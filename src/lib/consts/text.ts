import { getRandomString } from '$lib/utils';
import type { TextBlock } from '../../types';

export const defaultText: TextBlock = {
	id: getRandomString(28),
	border: {
		bottom: 0,
		color: '#000000',
		left: 0,
		right: 0,
		top: 0
	},
	color: {
		color: '#000000',
		fill: '#ffffff'
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
	font: {
		charSpacing: 0,
		decoration: null,
		family: 'Arial',
		hAlign: 'start',
		italic: false,
		lineheight: 1,
		shadow: null,
		size: 16,
		stroke: null,
		transform: null,
		vAlign: 'start',
		weight: 'normal'
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
	text: 'Hello world',
	type: 'text',
	width: 100,
	x: 0,
	y: 0
};
