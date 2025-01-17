import { Address } from '@airgram/core';

/** A Telegram Passport element containing the user's address */
export class PassportElementAddressBaseModel {
    public _: 'passportElementAddress';

    /** Address */
    public address: Address;
}
