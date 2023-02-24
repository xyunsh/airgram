import { CallbackQueryPayloadUnion } from '@airgram/core';

/** A new incoming callback query; for bots only */
export class UpdateNewCallbackQueryBaseModel {
    public _: 'updateNewCallbackQuery';

    /** Unique query identifier */
    public id: string;

    /** Identifier of the user who sent the query */
    public senderUserId: number;

    /** Identifier of the chat where the query was sent */
    public chatId: number;

    /** Identifier of the message, from which the query originated */
    public messageId: number;

    /** Identifier that uniquely corresponds to the chat to which the message was sent */
    public chatInstance: string;

    /** Query payload */
    public payload: CallbackQueryPayloadUnion;
}
