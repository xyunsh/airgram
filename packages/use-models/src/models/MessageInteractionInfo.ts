import { MessageReaction, MessageReplyInfo } from '@airgram/core';

/** Contains information about interactions with a message */
export class MessageInteractionInfoBaseModel {
    public _: 'messageInteractionInfo';

    /** Number of times the message was viewed */
    public viewCount: number;

    /** Number of times the message was forwarded */
    public forwardCount: number;

    /**
     * Information about direct or indirect replies to the message; may be null. Currently,
     * available only in channels with a discussion supergroup and discussion supergroups
     * for messages, which are not replies itself
     */
    public replyInfo?: MessageReplyInfo;

    /** The list of reactions added to the message */
    public reactions: MessageReaction[];
}
