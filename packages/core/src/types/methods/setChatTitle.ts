import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';

export interface SetChatTitleParams {
    chatId?: number; // Chat identifier
    title?: string; // New title of the chat; 1-128 characters
}

/**
 * Changes the chat title. Supported only for basic groups, supergroups and channels.
 * Requires can_change_info administrator right
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.title] - New title of the chat; 1-128 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatTitleParams, OkUnion>>}
 */
export type setChatTitle = (
    params?: SetChatTitleParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<SetChatTitleParams, OkUnion>>;
