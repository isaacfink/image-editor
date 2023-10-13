export type SnapPoints = Record<number, { width: number; height: number; x: number; y: number }[]>;

export type SnapPointsStore = { l: SnapPoints; r: SnapPoints; t: SnapPoints; b: SnapPoints };
