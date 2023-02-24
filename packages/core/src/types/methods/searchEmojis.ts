import { ApiRequestOptions, ApiResponse } from '../airgram';
import { EmojisUnion } from '../outputs';

export interface SearchEmojisParams {
    text?: string; // Text to search for
    exactMatch?: boolean; // Pass true if only emojis, which exactly match the text, needs to be returned
    inputLanguageCodes?: string[]; // List of possible IETF language tags of the user's input language; may be empty if unknown
}

/**
 * Searches for emojis by keywords. Supported only if the file database is enabled
 * @param {Object} params
 * @param {string} [params.text] - Text to search for
 * @param {boolean} [params.exactMatch] - Pass true if only emojis, which exactly
 * match the text, needs to be returned
 * @param {string[]} [params.inputLanguageCodes] - List of possible IETF language
 * tags of the user's input language; may be empty if unknown
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchEmojisParams, EmojisUnion>>}
 */
export type searchEmojis = (
    params?: SearchEmojisParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<SearchEmojisParams, EmojisUnion>>;
