import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageUnion } from '../outputs';

export interface SetGameScoreParams {
    chatId?: number; // The chat to which the message with the game belongs
    messageId?: number; // Identifier of the message
    editMessage?: boolean; // Pass true to edit the game message to include the current scoreboard
    userId?: number; // User identifier
    score?: number; // The new score
    force?: boolean; // Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table
}

/**
 * Updates the game score of the specified user in the game; for bots only
 * @param {Object} params
 * @param {number} [params.chatId] - The chat to which the message with the game
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {boolean} [params.editMessage] - Pass true to edit the game message to
 * include the current scoreboard
 * @param {number} [params.userId] - User identifier
 * @param {number} [params.score] - The new score
 * @param {boolean} [params.force] - Pass true to update the score even if it decreases.
 * If the score is 0, the user will be deleted from the high score table
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetGameScoreParams, MessageUnion>>}
 */
export type setGameScore = (
    params?: SetGameScoreParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<SetGameScoreParams, MessageUnion>>;
