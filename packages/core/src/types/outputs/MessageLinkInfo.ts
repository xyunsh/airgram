import { Message } from './index';

export type MessageLinkInfoUnion = MessageLinkInfo;

/** Contains information about a link to a message in a chat */
export interface MessageLinkInfo {
    _: 'messageLinkInfo';
    /** True, if the link is a public link for a message in a chat */
    isPublic: boolean;
    /** If found, identifier of the chat to which the message belongs, 0 otherwise */
    chatId: number;
    /** If found, the linked message; may be null */
    message?: Message;
    /**
     * Timestamp from which the video/audio/video note/voice note playing must start, in
     * seconds; 0 if not specified. The media can be in the message content or in its web
     * page preview
     */
    mediaTimestamp: number;
    /** True, if the whole media album to which the message belongs is linked */
    forAlbum: boolean;
    /** True, if the message is linked as a channel post comment or from a message thread */
    forComment: boolean;
}
