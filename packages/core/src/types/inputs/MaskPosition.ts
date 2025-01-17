import { MaskPointInputUnion } from './index';

export type MaskPositionInputUnion = MaskPositionInput;

/** Position on a photo where a mask is placed */
export interface MaskPositionInput {
    _: 'maskPosition';
    /** Part of the face, relative to which the mask is placed */
    point?: MaskPointInputUnion;
    /**
     * Shift by X-axis measured in widths of the mask scaled to the face size, from left
     * to right. (For example, -1.0 will place the mask just to the left of the default
     * mask position)
     */
    xShift?: number;
    /**
     * Shift by Y-axis measured in heights of the mask scaled to the face size, from top
     * to bottom. (For example, 1.0 will place the mask just below the default mask position)
     */
    yShift?: number;
    /** Mask scaling coefficient. (For example, 2.0 means a doubled size) */
    scale?: number;
}
