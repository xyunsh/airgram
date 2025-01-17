import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';

/**
 * Deletes saved order information
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type deleteSavedOrderInfo = (
    params?: never,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<never, OkUnion>>;
