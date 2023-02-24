import { EmailAddressAuthenticationCodeInfo } from '@airgram/core';

/** TDLib needs the user's authentication code sent to an email address to authorize. Call `checkAuthenticationEmailCode` to provide the code */
export class AuthorizationStateWaitEmailCodeBaseModel {
    public _: 'authorizationStateWaitEmailCode';

    /** True, if authorization through Apple ID is allowed */
    public allowAppleId: boolean;

    /** True, if authorization through Google ID is allowed */
    public allowGoogleId: boolean;

    /** Information about the sent authentication code */
    public codeInfo: EmailAddressAuthenticationCodeInfo;

    /** Point in time (Unix timestamp) when the user will be able to authorize with a code sent to the user's phone number; 0 if unknown */
    public nextPhoneNumberAuthorizationDate: number;
}
