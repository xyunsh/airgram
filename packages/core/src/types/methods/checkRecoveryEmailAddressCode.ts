import { ApiRequestOptions, ApiResponse } from '../airgram';
import { PasswordStateUnion } from '../outputs';

export interface CheckRecoveryEmailAddressCodeParams {
    code?: string; // Verification code to check
}

/**
 * Checks the 2-step verification recovery email address verification code
 * @param {Object} params
 * @param {string} [params.code] - Verification code to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckRecoveryEmailAddressCodeParams, PasswordStateUnion>>}
 */
export type checkRecoveryEmailAddressCode = (
    params?: CheckRecoveryEmailAddressCodeParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<CheckRecoveryEmailAddressCodeParams, PasswordStateUnion>>;
