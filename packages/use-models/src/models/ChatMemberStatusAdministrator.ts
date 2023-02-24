/**
 * The user is a member of the chat and has some additional privileges. In basic groups,
 * administrators can edit and delete messages sent by others, add new members, ban
 * unprivileged members, and manage video chats. In supergroups and channels, there
 * are more detailed options for administrator privileges
 */
export class ChatMemberStatusAdministratorBaseModel {
    public _: 'chatMemberStatusAdministrator';

    /**
     * A custom title of the administrator; 0-16 characters without emojis; applicable to
     * supergroups only
     */
    public customTitle: string;

    /** True, if the current user can edit the administrator privileges for the called user */
    public canBeEdited: boolean;

    /**
     * True, if the administrator can get chat event log, get chat statistics, get message
     * statistics in channels, get channel members, see anonymous administrators in supergroups
     * and ignore slow mode. Implied by any other privilege; applicable to supergroups and
     * channels only
     */
    public canManageChat: boolean;

    /** True, if the administrator can change the chat title, photo, and other settings */
    public canChangeInfo: boolean;

    /** True, if the administrator can create channel posts; applicable to channels only */
    public canPostMessages: boolean;

    /**
     * True, if the administrator can edit messages of other users and pin messages; applicable
     * to channels only
     */
    public canEditMessages: boolean;

    /** True, if the administrator can delete messages of other users */
    public canDeleteMessages: boolean;

    /** True, if the administrator can invite new users to the chat */
    public canInviteUsers: boolean;

    /**
     * True, if the administrator can restrict, ban, or unban chat members; always true
     * for channels
     */
    public canRestrictMembers: boolean;

    /**
     * True, if the administrator can pin messages; applicable to basic groups and supergroups
     * only
     */
    public canPinMessages: boolean;

    /**
     * True, if the administrator can add new administrators with a subset of their own
     * privileges or demote administrators that were directly or indirectly promoted by
     * them
     */
    public canPromoteMembers: boolean;

    /** True, if the administrator can manage video chats */
    public canManageVideoChats: boolean;

    /**
     * True, if the administrator isn't shown in the chat member list and sends messages
     * anonymously; applicable to supergroups only
     */
    public isAnonymous: boolean;
}
