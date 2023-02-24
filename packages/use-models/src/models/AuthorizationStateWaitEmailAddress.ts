
/** TDLib needs the user's authentication code sent to an email address to authorize. Call `checkAuthenticationEmailCode` to provide the code */
export class AuthorizationStateWaitEmailAddressBaseModel {
    public _: 'authorizationStateWaitEmailAddress';

    /** True, if authorization through Apple ID is allowed */
    public allowAppleId: boolean;

    /** True, if authorization through Google ID is allowed */
    public allowGoogleId: boolean;
}
