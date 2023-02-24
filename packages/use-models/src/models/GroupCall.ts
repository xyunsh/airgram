import { GroupCallRecentSpeaker } from '@airgram/core';

/** Describes a group call */
export class GroupCallBaseModel {
    public _: 'groupCall';

    /** Group call identifier */
    public id: number;

    /** Group call title */
    public title: string;

    /**
     * Point in time (Unix timestamp) when the group call is supposed to be started by an
     * administrator; 0 if it is already active or was ended
     */
    public scheduledStartDate: number;

    /**
     * True, if the group call is scheduled and the current user will receive a notification
     * when the group call will start
     */
    public enabledStartNotification: boolean;

    /** True, if the call is active */
    public isActive: boolean;

    /** True, if the chat is an RTMP stream instead of an ordinary video chat */
    public isRtmpStream: boolean;

    /** True, if the call is joined */
    public isJoined: boolean;

    /**
     * True, if user was kicked from the call because of network loss and the call needs
     * to be rejoined
     */
    public needRejoin: boolean;

    /** True, if the current user can manage the group call */
    public canBeManaged: boolean;

    /** Number of participants in the group call */
    public participantCount: number;

    /**
     * True, if group call participants, which are muted, aren't returned in participant
     * list
     */
    public hasHiddenListeners: boolean;

    /** True, if all group call participants are loaded */
    public loadedAllParticipants: boolean;

    /** At most 3 recently speaking users in the group call */
    public recentSpeakers: GroupCallRecentSpeaker[];

    /** True, if the current user's video is enabled */
    public isMyVideoEnabled: boolean;

    /** True, if the current user's video is paused */
    public isMyVideoPaused: boolean;

    /** True, if the current user can broadcast video or share screen */
    public canEnableVideo: boolean;

    /** True, if only group call administrators can unmute new participants */
    public muteNewParticipants: boolean;

    /** True, if the current user can enable or disable mute_new_participants setting */
    public canToggleMuteNewParticipants: boolean;

    /**
     * Duration of the ongoing group call recording, in seconds; 0 if none. An updateGroupCall
     * update is not triggered when value of this field changes, but the same recording
     * goes on
     */
    public recordDuration: number;

    /** True, if a video file is being recorded for the call */
    public isVideoRecorded: boolean;

    /** Call duration, in seconds; for ended calls only */
    public duration: number;
}
