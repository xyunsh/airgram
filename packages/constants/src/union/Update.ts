export enum UPDATE {
  updateAuthorizationState = 'updateAuthorizationState',
  updateNewMessage = 'updateNewMessage',
  updateMessageSendAcknowledged = 'updateMessageSendAcknowledged',
  updateMessageSendSucceeded = 'updateMessageSendSucceeded',
  updateMessageSendFailed = 'updateMessageSendFailed',
  updateMessageContent = 'updateMessageContent',
  updateMessageEdited = 'updateMessageEdited',
  updateMessageIsPinned = 'updateMessageIsPinned',
  updateMessageInteractionInfo = 'updateMessageInteractionInfo',
  updateMessageContentOpened = 'updateMessageContentOpened',
  updateMessageMentionRead = 'updateMessageMentionRead',
  updateMessageLiveLocationViewed = 'updateMessageLiveLocationViewed',
  updateNewChat = 'updateNewChat',
  updateChatTitle = 'updateChatTitle',
  updateChatPhoto = 'updateChatPhoto',
  updateChatPermissions = 'updateChatPermissions',
  updateChatLastMessage = 'updateChatLastMessage',
  updateChatPosition = 'updateChatPosition',
  updateChatIsMarkedAsUnread = 'updateChatIsMarkedAsUnread',
  updateChatIsBlocked = 'updateChatIsBlocked',
  updateChatHasScheduledMessages = 'updateChatHasScheduledMessages',
  updateChatVoiceChat = 'updateChatVoiceChat',
  updateChatDefaultDisableNotification = 'updateChatDefaultDisableNotification',
  updateChatReadInbox = 'updateChatReadInbox',
  updateChatReadOutbox = 'updateChatReadOutbox',
  updateChatUnreadMentionCount = 'updateChatUnreadMentionCount',
  updateChatNotificationSettings = 'updateChatNotificationSettings',
  updateScopeNotificationSettings = 'updateScopeNotificationSettings',
  updateChatMessageTtlSetting = 'updateChatMessageTtlSetting',
  updateChatActionBar = 'updateChatActionBar',
  updateChatTheme = 'updateChatTheme',
  updateChatReplyMarkup = 'updateChatReplyMarkup',
  updateChatDraftMessage = 'updateChatDraftMessage',
  updateChatFilters = 'updateChatFilters',
  updateChatOnlineMemberCount = 'updateChatOnlineMemberCount',
  updateNotification = 'updateNotification',
  updateNotificationGroup = 'updateNotificationGroup',
  updateActiveNotifications = 'updateActiveNotifications',
  updateHavePendingNotifications = 'updateHavePendingNotifications',
  updateDeleteMessages = 'updateDeleteMessages',
  updateUserChatAction = 'updateUserChatAction',
  updateUserStatus = 'updateUserStatus',
  updateUser = 'updateUser',
  updateBasicGroup = 'updateBasicGroup',
  updateSupergroup = 'updateSupergroup',
  updateSecretChat = 'updateSecretChat',
  updateUserFullInfo = 'updateUserFullInfo',
  updateBasicGroupFullInfo = 'updateBasicGroupFullInfo',
  updateSupergroupFullInfo = 'updateSupergroupFullInfo',
  updateServiceNotification = 'updateServiceNotification',
  updateFile = 'updateFile',
  updateFileGenerationStart = 'updateFileGenerationStart',
  updateFileGenerationStop = 'updateFileGenerationStop',
  updateCall = 'updateCall',
  updateGroupCall = 'updateGroupCall',
  updateGroupCallParticipant = 'updateGroupCallParticipant',
  updateNewCallSignalingData = 'updateNewCallSignalingData',
  updateUserPrivacySettingRules = 'updateUserPrivacySettingRules',
  updateUnreadMessageCount = 'updateUnreadMessageCount',
  updateUnreadChatCount = 'updateUnreadChatCount',
  updateOption = 'updateOption',
  updateStickerSet = 'updateStickerSet',
  updateInstalledStickerSets = 'updateInstalledStickerSets',
  updateTrendingStickerSets = 'updateTrendingStickerSets',
  updateRecentStickers = 'updateRecentStickers',
  updateFavoriteStickers = 'updateFavoriteStickers',
  updateSavedAnimations = 'updateSavedAnimations',
  updateSelectedBackground = 'updateSelectedBackground',
  updateChatThemes = 'updateChatThemes',
  updateLanguagePackStrings = 'updateLanguagePackStrings',
  updateConnectionState = 'updateConnectionState',
  updateTermsOfService = 'updateTermsOfService',
  updateUsersNearby = 'updateUsersNearby',
  updateDiceEmojis = 'updateDiceEmojis',
  updateAnimatedEmojiMessageClicked = 'updateAnimatedEmojiMessageClicked',
  updateAnimationSearchParameters = 'updateAnimationSearchParameters',
  updateSuggestedActions = 'updateSuggestedActions',
  updateNewInlineQuery = 'updateNewInlineQuery',
  updateNewChosenInlineResult = 'updateNewChosenInlineResult',
  updateNewCallbackQuery = 'updateNewCallbackQuery',
  updateNewInlineCallbackQuery = 'updateNewInlineCallbackQuery',
  updateNewShippingQuery = 'updateNewShippingQuery',
  updateNewPreCheckoutQuery = 'updateNewPreCheckoutQuery',
  updateNewCustomEvent = 'updateNewCustomEvent',
  updateNewCustomQuery = 'updateNewCustomQuery',
  updatePoll = 'updatePoll',
  updatePollAnswer = 'updatePollAnswer',
  updateChatMember = 'updateChatMember'
}
