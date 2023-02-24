import { ChatPosition, DraftMessage } from '@airgram/core';

/**
 * A chat draft has changed. Be aware that the update may come in the currently opened
 * chat but with old content of the draft. If the user has changed the content of the
 * draft, this update mustn't be applied
 */
export class UpdateChatDraftMessageBaseModel {
    public _: 'updateChatDraftMessage';

    /** Chat identifier */
    public chatId: number;

    /** The new draft message; may be null */
    public draftMessage?: DraftMessage;

    /** The new chat positions in the chat lists */
    public positions: ChatPosition[];
}
