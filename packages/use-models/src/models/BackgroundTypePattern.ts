import { BackgroundFillUnion } from '@airgram/core';

/**
 * A PNG or TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern")
 * pattern to be combined with the background fill chosen by the user
 */
export class BackgroundTypePatternBaseModel {
    public _: 'backgroundTypePattern';

    /** Fill of the background */
    public fill: BackgroundFillUnion;

    /** Intensity of the pattern when it is shown above the filled background; 0-100. */
    public intensity: number;

    /**
     * True, if the background fill must be applied only to the pattern itself. All other
     * pixels are black in this case. For dark themes only
     */
    public isInverted: boolean;

    /** True, if the background needs to be slightly moved when device is tilted */
    public isMoving: boolean;
}
