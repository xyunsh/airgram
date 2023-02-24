import { AuthenticationCodeInfo, TermsOfService } from './index';

/** Represents the current authorization state of the TDLib client */
export type AuthorizationStateUnion =
    | AuthorizationStateWaitTdlibParameters
    | AuthorizationStateWaitPhoneNumber
    | AuthorizationStateWaitEmailAddress
    | AuthorizationStateWaitEmailCode
    | AuthorizationStateWaitCode
    | AuthorizationStateWaitOtherDeviceConfirmation
    | AuthorizationStateWaitRegistration
    | AuthorizationStateWaitPassword
    | AuthorizationStateReady
    | AuthorizationStateLoggingOut
    | AuthorizationStateClosing
    | AuthorizationStateClosed;

/** TDLib needs TdlibParameters for initialization */
export interface AuthorizationStateWaitTdlibParameters {
    _: 'authorizationStateWaitTdlibParameters';
}

/** TDLib needs the user's email address to authorize. Call `setAuthenticationEmailAddress`
 * to provide the email address, or directly call `checkAuthenticationEmailCode` with
 * Apple ID/Google ID token if allowed
 */
export interface AuthorizationStateWaitEmailAddress {
    _: 'authorizationStateWaitEmailAddress';
    /** True, if authorization through Apple ID is allowed  */
    allowAppleId: boolean;
    /** True, if authorization through Google ID is allowed */
    allowGoogleId: boolean;
}

/** TDLib needs the user's authentication code sent to an email address to authorize.
 * Call `checkAuthenticationEmailCode` to provide the code
 */
export interface AuthorizationStateWaitEmailCode {
    _: 'authorizationStateWaitEmailCode';
    /** True, if authorization through Apple ID is allowed */
    allowAppleId: boolean;
    /** True, if authorization through Google ID is allowed */
    allowGoogleId: boolean;
    /** Information about the sent authentication code */
    codeInfo: EmailAddressAuthenticationCodeInfo;
    /** Point in time (Unix timestamp) when the user will be able to authorize with a
     * code sent to the user's phone number; 0 if unknown
     */
    nextPhoneNumberAuthorizationDate: number;
}

/**
 * TDLib needs the user's phone number to authorize. Call `setAuthenticationPhoneNumber`
 * to provide the phone number, or use `requestQrCodeAuthentication`, or `checkAuthenticationBotToken`
 * for other authentication options
 */
export interface AuthorizationStateWaitPhoneNumber {
    _: 'authorizationStateWaitPhoneNumber';
}

/** TDLib needs the user's authentication code to authorize */
export interface AuthorizationStateWaitCode {
    _: 'authorizationStateWaitCode';
    /** Information about the authorization code that was sent */
    codeInfo: AuthenticationCodeInfo;
}

/**
 * The user needs to confirm authorization on another logged in device by scanning a
 * QR code with the provided link
 */
export interface AuthorizationStateWaitOtherDeviceConfirmation {
    _: 'authorizationStateWaitOtherDeviceConfirmation';
    /** A tg:// URL for the QR code. The link will be updated frequently */
    link: string;
}

/**
 * The user is unregistered and need to accept terms of service and enter their first
 * name and last name to finish registration
 */
export interface AuthorizationStateWaitRegistration {
    _: 'authorizationStateWaitRegistration';
    /** Telegram terms of service */
    termsOfService: TermsOfService;
}

/** The user has been authorized, but needs to enter a password to start using the application */
export interface AuthorizationStateWaitPassword {
    _: 'authorizationStateWaitPassword';
    /** Hint for the password; may be empty */
    passwordHint: string;
    /** True, if a recovery email address has been set up */
    hasRecoveryEmailAddress: boolean;
    /**
     * Pattern of the email address to which the recovery email was sent; empty until a
     * recovery email has been sent
     */
    recoveryEmailAddressPattern: string;
}

/** The user has been successfully authorized. TDLib is now ready to answer queries */
export interface AuthorizationStateReady {
    _: 'authorizationStateReady';
}

/** The user is currently logging out */
export interface AuthorizationStateLoggingOut {
    _: 'authorizationStateLoggingOut';
}

/**
 * TDLib is closing, all subsequent queries will be answered with the error 500. Note
 * that closing TDLib can take a while. All resources will be freed only after authorizationStateClosed
 * has been received
 */
export interface AuthorizationStateClosing {
    _: 'authorizationStateClosing';
}

/**
 * TDLib client is in its final state. All databases are closed and all resources are
 * released. No other updates will be received after this. All queries will be responded
 * to with error code 500. To continue working, one must create a new instance of the
 * TDLib client
 */
export interface AuthorizationStateClosed {
    _: 'authorizationStateClosed';
}
