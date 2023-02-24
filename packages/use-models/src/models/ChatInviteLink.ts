/** Contains a chat invite link */
export class ChatInviteLinkBaseModel {
    public _: 'chatInviteLink';

    /** Chat invite link */
    public inviteLink: string;

    /** Name of the link */
    public name: string;

    /** User identifier of an administrator created the link */
    public creatorUserId: number;

    /** Point in time (Unix timestamp) when the link was created */
    public date: number;

    /** Point in time (Unix timestamp) when the link was last edited; 0 if never or unknown */
    public editDate: number;

    /** Point in time (Unix timestamp) when the link will expire; 0 if never */
    public expirationDate: number;

    /**
     * The maximum number of members, which can join the chat using the link simultaneously;
     * 0 if not limited. Always 0 if the link requires approval
     */
    public memberLimit: number;

    /** Number of chat members, which joined the chat using the link */
    public memberCount: number;

    /** Number of pending join requests created using this link */
    public pendingJoinRequestCount: number;

    /**
     * True, if the link only creates join request. If true, total number of joining members
     * will be unlimited
     */
    public createsJoinRequest: boolean;

    /**
     * True, if the link is primary. Primary invite link can't have name, expiration date,
     * or usage limit. There is exactly one primary invite link for each administrator with
     * can_invite_users right at a given time
     */
    public isPrimary: boolean;

    /** True, if the link was revoked */
    public isRevoked: boolean;
}
