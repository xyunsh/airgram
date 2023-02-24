import {
    MessageContentUnion,
    MessageForwardInfo,
    MessageInteractionInfo,
    MessageSchedulingStateUnion,
    MessageSenderUnion,
    MessageSendingStateUnion,
    ReplyMarkupUnion,
    UnreadReaction,
} from '@airgram/core';

/** Describes a message */
export class MessageBaseModel {
    public _: 'message';

    /** Message identifier; unique for the chat to which the message belongs */
    public id: number;

    /** Identifier of the sender of the message */
    public senderId: MessageSenderUnion;

    /** Chat identifier */
    public chatId: number;

    /** The sending state of the message; may be null */
    public sendingState?: MessageSendingStateUnion;

    /** The scheduling state of the message; may be null */
    public schedulingState?: MessageSchedulingStateUnion;

    /** True, if the message is outgoing */
    public isOutgoing: boolean;

    /** True, if the message is pinned */
    public isPinned: boolean;

    /**
     * True, if the message can be edited. For live location and poll messages this fields
     * shows whether editMessageLiveLocation or stopPoll can be used with this message by
     * the application
     */
    public canBeEdited: boolean;

    /** True, if the message can be forwarded */
    public canBeForwarded: boolean;

    /** True, if content of the message can be saved locally or copied */
    public canBeSaved: boolean;

    /**
     * True, if the message can be deleted only for the current user while other users will
     * continue to see it
     */
    public canBeDeletedOnlyForSelf: boolean;

    /** True, if the message can be deleted for all users */
    public canBeDeletedForAllUsers: boolean;

    /** True, if the list of added reactions is available through getMessageAddedReactions */
    public canGetAddedReactions: boolean;

    /** True, if the message statistics are available through getMessageStatistics */
    public canGetStatistics: boolean;

    /** True, if information about the message thread is available through getMessageThread */
    public canGetMessageThread: boolean;

    /** True, if chat members already viewed the message can be received through getMessageViewers */
    public canGetViewers: boolean;

    /**
     * True, if media timestamp links can be generated for media timestamp entities in the
     * message text, caption or web page description through getMessageLink
     */
    public canGetMediaTimestampLinks: boolean;

    /**
     * True, if media timestamp entities refers to a media in this message as opposed to
     * a media in the replied message
     */
    public hasTimestampedMedia: boolean;

    /**
     * True, if the message is a channel post. All messages to channels are channel posts,
     * all other messages are not channel posts
     */
    public isChannelPost: boolean;

    /** True, if the message contains an unread mention for the current user */
    public containsUnreadMention: boolean;

    /** Point in time (Unix timestamp) when the message was sent */
    public date: number;

    /** Point in time (Unix timestamp) when the message was last edited */
    public editDate: number;

    /** Information about the initial message sender; may be null */
    public forwardInfo?: MessageForwardInfo;

    /** Information about interactions with the message; may be null */
    public interactionInfo?: MessageInteractionInfo;

    /** Information about unread reactions added to the message */
    public unreadReactions: UnreadReaction[];

    /**
     * If non-zero, the identifier of the chat to which the replied message belongs; Currently,
     * only messages in the Replies chat can have different reply_in_chat_id and chat_id
     */
    public replyInChatId: number;

    /**
     * If non-zero, the identifier of the message this message is replying to; can be the
     * identifier of a deleted message
     */
    public replyToMessageId: number;

    /**
     * If non-zero, the identifier of the message thread the message belongs to; unique
     * within the chat to which the message belongs
     */
    public messageThreadId: number;

    /**
     * For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if
     * none. TDLib will send updateDeleteMessages or updateMessageContent once the TTL expires
     */
    public ttl: number;

    /**
     * Time left before the message expires, in seconds. If the TTL timer isn't started
     * yet, equals to the value of the ttl field
     */
    public ttlExpiresIn: number;

    /** If non-zero, the user identifier of the bot through which this message was sent */
    public viaBotUserId: number;

    /** For channel posts and anonymous group messages, optional author signature */
    public authorSignature: string;

    /**
     * Unique identifier of an album this message belongs to. Only audios, documents, photos
     * and videos can be grouped together in albums
     */
    public mediaAlbumId: string;

    /**
     * If non-empty, contains a human-readable description of the reason why access to this
     * message must be restricted
     */
    public restrictionReason: string;

    /** Content of the message */
    public content: MessageContentUnion;

    /** Reply markup for the message; may be null */
    public replyMarkup?: ReplyMarkupUnion;
}
