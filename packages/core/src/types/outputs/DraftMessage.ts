import { InputMessageContentUnion } from './index';

export type DraftMessageUnion = DraftMessage;

/** Contains information about a message draft */
export interface DraftMessage {
    _: 'draftMessage';
    /** Identifier of the message to reply to; 0 if none */
    replyToMessageId: number;
    /** Point in time (Unix timestamp) when the draft was created */
    date: number;
    /** Content of the message draft; must be of the type inputMessageText */
    inputMessageText: InputMessageContentUnion;
}
