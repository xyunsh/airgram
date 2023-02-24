import { ApiRequestOptions, ApiResponse } from '../airgram';
import { LogVerbosityLevelUnion } from '../outputs';

export interface GetLogTagVerbosityLevelParams {
    tag?: string; // Logging tag to change verbosity level
}

/**
 * Returns current verbosity level for a specified TDLib internal log tag. Can be called
 * synchronously
 * @param {Object} params
 * @param {string} [params.tag] - Logging tag to change verbosity level
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetLogTagVerbosityLevelParams, LogVerbosityLevelUnion>>}
 */
export type getLogTagVerbosityLevel = (
    params?: GetLogTagVerbosityLevelParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<GetLogTagVerbosityLevelParams, LogVerbosityLevelUnion>>;

export type getLogTagVerbosityLevelSync = (params?: GetLogTagVerbosityLevelParams) => LogVerbosityLevelUnion;
