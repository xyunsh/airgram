/** Represents a filter for message search results */
export type SearchMessagesFilterInputUnion =
    | SearchMessagesFilterEmptyInput
    | SearchMessagesFilterAnimationInput
    | SearchMessagesFilterAudioInput
    | SearchMessagesFilterDocumentInput
    | SearchMessagesFilterPhotoInput
    | SearchMessagesFilterVideoInput
    | SearchMessagesFilterVoiceNoteInput
    | SearchMessagesFilterPhotoAndVideoInput
    | SearchMessagesFilterUrlInput
    | SearchMessagesFilterChatPhotoInput
    | SearchMessagesFilterVideoNoteInput
    | SearchMessagesFilterVoiceAndVideoNoteInput
    | SearchMessagesFilterMentionInput
    | SearchMessagesFilterUnreadMentionInput
    | SearchMessagesFilterUnreadReactionInput
    | SearchMessagesFilterFailedToSendInput
    | SearchMessagesFilterPinnedInput;

/** Returns all found messages, no filter is applied */
export interface SearchMessagesFilterEmptyInput {
    _: 'searchMessagesFilterEmpty';
}

/** Returns only animation messages */
export interface SearchMessagesFilterAnimationInput {
    _: 'searchMessagesFilterAnimation';
}

/** Returns only audio messages */
export interface SearchMessagesFilterAudioInput {
    _: 'searchMessagesFilterAudio';
}

/** Returns only document messages */
export interface SearchMessagesFilterDocumentInput {
    _: 'searchMessagesFilterDocument';
}

/** Returns only photo messages */
export interface SearchMessagesFilterPhotoInput {
    _: 'searchMessagesFilterPhoto';
}

/** Returns only video messages */
export interface SearchMessagesFilterVideoInput {
    _: 'searchMessagesFilterVideo';
}

/** Returns only voice note messages */
export interface SearchMessagesFilterVoiceNoteInput {
    _: 'searchMessagesFilterVoiceNote';
}

/** Returns only photo and video messages */
export interface SearchMessagesFilterPhotoAndVideoInput {
    _: 'searchMessagesFilterPhotoAndVideo';
}

/** Returns only messages containing URLs */
export interface SearchMessagesFilterUrlInput {
    _: 'searchMessagesFilterUrl';
}

/** Returns only messages containing chat photos */
export interface SearchMessagesFilterChatPhotoInput {
    _: 'searchMessagesFilterChatPhoto';
}

/** Returns only video note messages */
export interface SearchMessagesFilterVideoNoteInput {
    _: 'searchMessagesFilterVideoNote';
}

/** Returns only voice and video note messages */
export interface SearchMessagesFilterVoiceAndVideoNoteInput {
    _: 'searchMessagesFilterVoiceAndVideoNote';
}

/**
 * Returns only messages with mentions of the current user, or messages that are replies
 * to their messages
 */
export interface SearchMessagesFilterMentionInput {
    _: 'searchMessagesFilterMention';
}

/**
 * Returns only messages with unread mentions of the current user, or messages that
 * are replies to their messages. When using this filter the results can't be additionally
 * filtered by a query, a message thread or by the sending user
 */
export interface SearchMessagesFilterUnreadMentionInput {
    _: 'searchMessagesFilterUnreadMention';
}

/**
 * Returns only messages with unread reactions for the current user. When using this
 * filter the results can't be additionally filtered by a query, a message thread or
 * by the sending user
 */
export interface SearchMessagesFilterUnreadReactionInput {
    _: 'searchMessagesFilterUnreadReaction';
}

/**
 * Returns only failed to send messages. This filter can be used only if the message
 * database is used
 */
export interface SearchMessagesFilterFailedToSendInput {
    _: 'searchMessagesFilterFailedToSend';
}

/** Returns only pinned messages */
export interface SearchMessagesFilterPinnedInput {
    _: 'searchMessagesFilterPinned';
}
