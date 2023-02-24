import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';

export interface SetInlineGameScoreParams {
    inlineMessageId?: string; // Inline message identifier
    editMessage?: boolean; // Pass true to edit the game message to include the current scoreboard
    userId?: number; // User identifier
    score?: number; // The new score
    force?: boolean; // Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table
}

/**
 * Updates the game score of the specified user in a game; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {boolean} [params.editMessage] - Pass true to edit the game message to
 * include the current scoreboard
 * @param {number} [params.userId] - User identifier
 * @param {number} [params.score] - The new score
 * @param {boolean} [params.force] - Pass true to update the score even if it decreases.
 * If the score is 0, the user will be deleted from the high score table
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetInlineGameScoreParams, OkUnion>>}
 */
export type setInlineGameScore = (
    params?: SetInlineGameScoreParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<SetInlineGameScoreParams, OkUnion>>;
