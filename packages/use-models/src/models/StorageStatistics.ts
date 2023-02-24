import { StorageStatisticsByChat } from '@airgram/core';

/** Contains the exact storage usage statistics split by chats and file type */
export class StorageStatisticsBaseModel {
    public _: 'storageStatistics';

    /** Total size of files, in bytes */
    public size: number;

    /** Total number of files */
    public count: number;

    /** Statistics split by chats */
    public byChat: StorageStatisticsByChat[];
}
