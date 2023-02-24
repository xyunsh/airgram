import { ApiRequestOptions, ApiResponse } from '../airgram';
import { InputMessageContentInputUnion, MessageSendOptionsInput, ReplyMarkupInputUnion } from '../inputs';
import { MessageUnion } from '../outputs';

export interface SendMessageParams {
    chatId?: number; // Target chat
    messageThreadId?: number; // If not 0, a message thread identifier in which the message will be sent
    replyToMessageId?: number; // Identifier of the message to reply to or 0
    options?: MessageSendOptionsInput; // Options to be used to send the message; pass null to use default options
    replyMarkup?: ReplyMarkupInputUnion; // Markup for replying to the message; pass null if none; for bots only
    inputMessageContent?: InputMessageContentInputUnion; // The content of the message to be sent
}

/**
 * Sends a message. Returns the sent message
 * @param {Object} params
 * @param {number} [params.chatId] - Target chat
 * @param {number} [params.messageThreadId] - If not 0, a message thread identifier
 * in which the message will be sent
 * @param {number} [params.replyToMessageId] - Identifier of the message to reply
 * to or 0
 * @param {MessageSendOptionsInput} [params.options] - Options to be used to send
 * the message; pass null to use default options
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - Markup for replying to the
 * message; pass null if none; for bots only
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - The content
 * of the message to be sent
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendMessageParams, MessageUnion>>}
 */
export type sendMessage = (
    params?: SendMessageParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<SendMessageParams, MessageUnion>>;
