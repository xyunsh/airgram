import { CallbackQueryPayloadUnion } from '@airgram/core';

/** A new incoming callback query from a message sent via a bot; for bots only */
export class UpdateNewInlineCallbackQueryBaseModel {
    public _: 'updateNewInlineCallbackQuery';

    /** Unique query identifier */
    public id: string;

    /** Identifier of the user who sent the query */
    public senderUserId: number;

    /** Identifier of the inline message, from which the query originated */
    public inlineMessageId: string;

    /** An identifier uniquely corresponding to the chat a message was sent to */
    public chatInstance: string;

    /** Query payload */
    public payload: CallbackQueryPayloadUnion;
}
