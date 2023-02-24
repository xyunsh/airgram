import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessagesUnion } from '../outputs';

export interface GetChatHistoryParams {
    chatId?: number; // Chat identifier
    fromMessageId?: number; // Identifier of the message starting from which history must be fetched; use 0 to get results from the last message
    offset?: number; // Specify 0 to get results from exactly the from_message_id or a negative offset up to 99 to get additionally some newer messages
    limit?: number; // The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than or equal to -offset. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit
    onlyLocal?: boolean; // Pass true to get only messages that are available without sending network requests
}

/**
 * Returns messages in a chat. The messages are returned in a reverse chronological
 * order (i.e., in order of decreasing message_id). For optimal performance, the number
 * of returned messages is chosen by TDLib. This is an offline request if only_local
 * is true
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.fromMessageId] - Identifier of the message starting from
 * which history must be fetched; use 0 to get results from the last message
 * @param {number} [params.offset] - Specify 0 to get results from exactly the from_message_id
 * or a negative offset up to 99 to get additionally some newer messages
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * must be positive and can't be greater than 100. If the offset is negative, the limit
 * must be greater than or equal to -offset. For optimal performance, the number of
 * returned messages is chosen by TDLib and can be smaller than the specified limit
 * @param {boolean} [params.onlyLocal] - Pass true to get only messages that are
 * available without sending network requests
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatHistoryParams, MessagesUnion>>}
 */
export type getChatHistory = (
    params?: GetChatHistoryParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<GetChatHistoryParams, MessagesUnion>>;
