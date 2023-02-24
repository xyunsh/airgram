import { ApiRequestOptions, ApiResponse } from '../airgram';
import { FormattedTextInput, ReplyMarkupInputUnion } from '../inputs';
import { OkUnion } from '../outputs';

export interface EditInlineMessageCaptionParams {
    inlineMessageId?: string; // Inline message identifier
    replyMarkup?: ReplyMarkupInputUnion; // The new message reply markup; pass null if none
    caption?: FormattedTextInput; // New message content caption; pass null to remove caption; 0-GetOption("message_caption_length_max") characters
}

/**
 * Edits the caption of an inline message sent via a bot; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * pass null if none
 * @param {FormattedTextInput} [params.caption] - New message content caption; pass
 * null to remove caption; 0-GetOption("message_caption_length_max") characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditInlineMessageCaptionParams, OkUnion>>}
 */
export type editInlineMessageCaption = (
    params?: EditInlineMessageCaptionParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<EditInlineMessageCaptionParams, OkUnion>>;
