import { ChatMemberStatusUnion } from '@airgram/core';

/**
 * A chat member has gained/lost administrator status, or the list of their administrator
 * privileges has changed
 */
export class ChatEventMemberPromotedBaseModel {
    public _: 'chatEventMemberPromoted';

    /** Affected chat member user identifier */
    public userId: number;

    /** Previous status of the chat member */
    public oldStatus: ChatMemberStatusUnion;

    /** New status of the chat member */
    public newStatus: ChatMemberStatusUnion;
}
