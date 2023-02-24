import { PassportRequiredElement } from '@airgram/core';

/** Contains information about a Telegram Passport authorization form that was requested */
export class PassportAuthorizationFormBaseModel {
    public _: 'passportAuthorizationForm';

    /** Unique identifier of the authorization form */
    public id: number;

    /** Telegram Passport elements that must be provided to complete the form */
    public requiredElements: PassportRequiredElement[];

    /** URL for the privacy policy of the service; may be empty */
    public privacyPolicyUrl: string;
}
