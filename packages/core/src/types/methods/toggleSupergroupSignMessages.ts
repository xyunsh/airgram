import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';

export interface ToggleSupergroupSignMessagesParams {
    supergroupId?: number; // Identifier of the channel
    signMessages?: boolean; // New value of sign_messages
}

/**
 * Toggles whether sender signature is added to sent messages in a channel; requires
 * can_change_info administrator right
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the channel
 * @param {boolean} [params.signMessages] - New value of sign_messages
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSupergroupSignMessagesParams, OkUnion>>}
 */
export type toggleSupergroupSignMessages = (
    params?: ToggleSupergroupSignMessagesParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<ToggleSupergroupSignMessagesParams, OkUnion>>;
