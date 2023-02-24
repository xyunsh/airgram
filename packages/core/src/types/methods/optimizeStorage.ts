import { ApiRequestOptions, ApiResponse } from '../airgram';
import { FileTypeInputUnion } from '../inputs';
import { StorageStatisticsUnion } from '../outputs';

export interface OptimizeStorageParams {
    size?: number; // Limit on the total size of files after deletion, in bytes. Pass -1 to use the default limit
    ttl?: number; // Limit on the time that has passed since the last time a file was accessed (or creation time for some filesystems). Pass -1 to use the default limit
    count?: number; // Limit on the total number of files after deletion. Pass -1 to use the default limit
    immunityDelay?: number; // The amount of time after the creation of a file during which it can't be deleted, in seconds. Pass -1 to use the default value
    fileTypes?: FileTypeInputUnion[]; // If non-empty, only files with the given types are considered. By default, all types except thumbnails, profile photos, stickers and wallpapers are deleted
    chatIds?: number[]; // If non-empty, only files from the given chats are considered. Use 0 as chat identifier to delete files not belonging to any chat (e.g., profile photos)
    excludeChatIds?: number[]; // If non-empty, files from the given chats are excluded. Use 0 as chat identifier to exclude all files not belonging to any chat (e.g., profile photos)
    returnDeletedFileStatistics?: boolean; // Pass true if statistics about the files that were deleted must be returned instead of the whole storage usage statistics. Affects only returned statistics
    chatLimit?: number; // Same as in getStorageStatistics. Affects only returned statistics
}

/**
 * Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics.
 * Secret thumbnails can't be deleted
 * @param {Object} params
 * @param {number} [params.size] - Limit on the total size of files after deletion,
 * in bytes. Pass -1 to use the default limit
 * @param {number} [params.ttl] - Limit on the time that has passed since the last
 * time a file was accessed (or creation time for some filesystems). Pass -1 to use
 * the default limit
 * @param {number} [params.count] - Limit on the total number of files after deletion.
 * Pass -1 to use the default limit
 * @param {number} [params.immunityDelay] - The amount of time after the creation
 * of a file during which it can't be deleted, in seconds. Pass -1 to use the default
 * value
 * @param {FileTypeInputUnion[]} [params.fileTypes] - If non-empty, only files with
 * the given types are considered. By default, all types except thumbnails, profile
 * photos, stickers and wallpapers are deleted
 * @param {number[]} [params.chatIds] - If non-empty, only files from the given chats
 * are considered. Use 0 as chat identifier to delete files not belonging to any chat
 * (e.g., profile photos)
 * @param {number[]} [params.excludeChatIds] - If non-empty, files from the given
 * chats are excluded. Use 0 as chat identifier to exclude all files not belonging to
 * any chat (e.g., profile photos)
 * @param {boolean} [params.returnDeletedFileStatistics] - Pass true if statistics
 * about the files that were deleted must be returned instead of the whole storage usage
 * statistics. Affects only returned statistics
 * @param {number} [params.chatLimit] - Same as in getStorageStatistics. Affects
 * only returned statistics
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<OptimizeStorageParams, StorageStatisticsUnion>>}
 */
export type optimizeStorage = (
    params?: OptimizeStorageParams,
    options?: ApiRequestOptions,
) => Promise<ApiResponse<OptimizeStorageParams, StorageStatisticsUnion>>;
