import { KeyboardButton } from '@airgram/core';

/** Contains a custom keyboard layout to quickly reply to bots */
export class ReplyMarkupShowKeyboardBaseModel {
    public _: 'replyMarkupShowKeyboard';

    /** A list of rows of bot keyboard buttons */
    public rows: KeyboardButton[][];

    /** True, if the application needs to resize the keyboard vertically */
    public resizeKeyboard: boolean;

    /** True, if the application needs to hide the keyboard after use */
    public oneTime: boolean;

    /**
     * True, if the keyboard must automatically be shown to the current user. For outgoing
     * messages, specify true to show the keyboard only for the mentioned users and for
     * the target user of a reply
     */
    public isPersonal: boolean;

    /**
     * If non-empty, the placeholder to be shown in the input field when the keyboard is
     * active; 0-64 characters
     */
    public inputFieldPlaceholder: string;
}
