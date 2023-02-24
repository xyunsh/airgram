import { Message } from '@airgram/core';

/**
 * A message failed to send. Be aware that some messages being sent can be irrecoverably
 * deleted, in which case updateDeleteMessages will be received instead of this update
 */
export class UpdateMessageSendFailedBaseModel {
    public _: 'updateMessageSendFailed';

    /** The failed to send message */
    public message: Message;

    /** The previous temporary message identifier */
    public oldMessageId: number;

    /** An error code */
    public errorCode: number;

    /** Error message */
    public errorMessage: string;
}
