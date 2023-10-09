import { getRandomString } from '$lib/utils';
import type { ImageBlock } from '$types';

export const defaultImage: ImageBlock = {
	id: getRandomString(28),
	border: {
		bottom: 0,
		color: '#000000',
		left: 0,
		right: 0,
		top: 0
	},
	color: {
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
	type: 'image',
	width: 100,
	x: 0,
	y: 0,
	filters: {
		blur: null,
		brightness: null,
		contrast: null,
		grayscale: null,
		hueRotate: null,
		invert: null,
		opacity: null,
		saturate: null,
		sepia: null
	},
	image: '',
	scale: {
		objectFit: 'fill',
		x: 1,
		y: 1,
		zoom: 1
	}
};
