export interface BaseBlock {
	name: string;
	width: number;
	height: number;
	x: number;
	y: number;
	corner: {
		tl: number;
		tr: number;
		bl: number;
		br: number;
	};
	padding: {
		top: number;
		right: number;
		bottom: number;
		left: number;
	};
	border: {
		top: number;
		right: number;
		bottom: number;
		left: number;
		color: string;
	};
	flip: {
		v: boolean;
		h: boolean;
	};
	isHidden: boolean;
	isLocked: boolean;
}
