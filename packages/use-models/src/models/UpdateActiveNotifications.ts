import { NotificationGroup } from '@airgram/core';

/**
 * Contains active notifications that was shown on previous application launches. This
 * update is sent only if the message database is used. In that case it comes once before
 * any updateNotification and updateNotificationGroup update
 */
export class UpdateActiveNotificationsBaseModel {
    public _: 'updateActiveNotifications';

    /** Lists of active notification groups */
    public groups: NotificationGroup[];
}
