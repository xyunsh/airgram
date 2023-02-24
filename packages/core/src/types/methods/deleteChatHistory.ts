import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';

export interface DeleteChatHistoryParams {
    chatId?: number; // Chat identifier
    removeFromChatList?: boolean; // Pass true to remove the chat from all chat lists
    revoke?: boolean; // Pass true to delete chat history for all users
}

/**
 * Deletes all messages in the chat. Use chat.can_be_deleted_only_for_self and chat.can_be_deleted_for_all_users
 * fields to find whether and how the method can be applied to the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.removeFromChatList] - Pass true to remove the chat from
 * all chat lists
 * @param {boolean} [params.revoke] - Pass true to delete chat history for all users
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteChatHistoryParams, OkUnion>>}
 */
export type deleteChatHistory = (
    params?: DeleteChatHistoryParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<DeleteChatHistoryParams, OkUnion>>;
