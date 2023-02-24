import { VideoNote } from '@airgram/core';

/** A video note message */
export class MessageVideoNoteBaseModel {
    public _: 'messageVideoNote';

    /** The video note description */
    public videoNote: VideoNote;

    /** True, if at least one of the recipients has viewed the video note */
    public isViewed: boolean;

    /**
     * True, if the video note thumbnail must be blurred and the video note must be shown
     * only while tapped
     */
    public isSecret: boolean;
}
