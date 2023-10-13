import type { Editor, SnapPointsStore } from '$types';

export const getAllSnapPoints = ({ blocks }: Editor) => {
	const snapPoints: SnapPointsStore = {
		b: {},
		l: {},
		r: {},
		t: {}
	};

	blocks.forEach(({ x, y, height, width }) => {
		snapPoints.t[y] = [...(snapPoints.t[y] || []), { x, y, height, width }];
		snapPoints.b[y + height] = [...(snapPoints.b[y + height] || []), { x, y, height, width }];
		snapPoints.l[x] = [...(snapPoints.l[x] || []), { x, y, height, width }];
		snapPoints.r[x + width] = [...(snapPoints.r[x + width] || []), { x, y, height, width }];
	});

	return snapPoints;
};
