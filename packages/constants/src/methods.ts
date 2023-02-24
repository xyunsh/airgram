export type MethodName =
    | 'acceptCall'
    | 'acceptTermsOfService'
    | 'addChatMember'
    | 'addChatMembers'
    | 'addChatToList'
    | 'addContact'
    | 'addCustomServerLanguagePack'
    | 'addFavoriteSticker'
    | 'addFileToDownloads'
    | 'addLocalMessage'
    | 'addLogMessage'
    | 'addNetworkStatistics'
    | 'addProxy'
    | 'addRecentSticker'
    | 'addRecentlyFoundChat'
    | 'addSavedAnimation'
    | 'addStickerToSet'
    | 'answerCallbackQuery'
    | 'answerCustomQuery'
    | 'answerInlineQuery'
    | 'answerPreCheckoutQuery'
    | 'answerShippingQuery'
    | 'banChatMember'
    | 'blockMessageSenderFromReplies'
    | 'canTransferOwnership'
    | 'cancelDownloadFile'
    | 'cancelPasswordReset'
    | 'cancelUploadFile'
    | 'changeImportedContacts'
    | 'changePhoneNumber'
    | 'changeStickerSet'
    | 'checkAuthenticationBotToken'
    | 'checkAuthenticationCode'
    | 'checkAuthenticationPassword'
    | 'checkAuthenticationPasswordRecoveryCode'
    | 'checkChangePhoneNumberCode'
    | 'checkChatInviteLink'
    | 'checkChatUsername'
    | 'checkCreatedPublicChatsLimit'
    | 'checkDatabaseEncryptionKey'
    | 'checkEmailAddressVerificationCode'
    | 'checkPasswordRecoveryCode'
    | 'checkPhoneNumberConfirmationCode'
    | 'checkPhoneNumberVerificationCode'
    | 'checkRecoveryEmailAddressCode'
    | 'checkStickerSetName'
    | 'cleanFileName'
    | 'clearAllDraftMessages'
    | 'clearImportedContacts'
    | 'clearRecentStickers'
    | 'clearRecentlyFoundChats'
    | 'clickAnimatedEmojiMessage'
    | 'close'
    | 'closeChat'
    | 'closeSecretChat'
    | 'confirmQrCodeAuthentication'
    | 'createBasicGroupChat'
    | 'createCall'
    | 'createChatFilter'
    | 'createChatInviteLink'
    | 'createNewBasicGroupChat'
    | 'createNewSecretChat'
    | 'createNewStickerSet'
    | 'createNewSupergroupChat'
    | 'createPrivateChat'
    | 'createSecretChat'
    | 'createSupergroupChat'
    | 'createTemporaryPassword'
    | 'createVideoChat'
    | 'deleteAccount'
    | 'deleteAllCallMessages'
    | 'deleteAllRevokedChatInviteLinks'
    | 'deleteChat'
    | 'deleteChatFilter'
    | 'deleteChatHistory'
    | 'deleteChatMessagesByDate'
    | 'deleteChatMessagesBySender'
    | 'deleteChatReplyMarkup'
    | 'deleteCommands'
    | 'deleteFile'
    | 'deleteLanguagePack'
    | 'deleteMessages'
    | 'deletePassportElement'
    | 'deleteProfilePhoto'
    | 'deleteRevokedChatInviteLink'
    | 'deleteSavedCredentials'
    | 'deleteSavedOrderInfo'
    | 'destroy'
    | 'disableProxy'
    | 'discardCall'
    | 'disconnectAllWebsites'
    | 'disconnectWebsite'
    | 'downloadFile'
    | 'editChatFilter'
    | 'editChatInviteLink'
    | 'editCustomLanguagePackInfo'
    | 'editInlineMessageCaption'
    | 'editInlineMessageLiveLocation'
    | 'editInlineMessageMedia'
    | 'editInlineMessageReplyMarkup'
    | 'editInlineMessageText'
    | 'editMessageCaption'
    | 'editMessageLiveLocation'
    | 'editMessageMedia'
    | 'editMessageReplyMarkup'
    | 'editMessageSchedulingState'
    | 'editMessageText'
    | 'editProxy'
    | 'enableProxy'
    | 'endGroupCall'
    | 'endGroupCallRecording'
    | 'endGroupCallScreenSharing'
    | 'finishFileGeneration'
    | 'forwardMessages'
    | 'getAccountTtl'
    | 'getActiveLiveLocationMessages'
    | 'getActiveSessions'
    | 'getAllPassportElements'
    | 'getAnimatedEmoji'
    | 'getApplicationConfig'
    | 'getApplicationDownloadLink'
    | 'getArchivedStickerSets'
    | 'getAttachedStickerSets'
    | 'getAuthorizationState'
    | 'getAutoDownloadSettingsPresets'
    | 'getBackgroundUrl'
    | 'getBackgrounds'
    | 'getBankCardInfo'
    | 'getBasicGroup'
    | 'getBasicGroupFullInfo'
    | 'getBlockedMessageSenders'
    | 'getCallbackQueryAnswer'
    | 'getCallbackQueryMessage'
    | 'getChat'
    | 'getChatAdministrators'
    | 'getChatAvailableMessageSenders'
    | 'getChatEventLog'
    | 'getChatFilter'
    | 'getChatFilterDefaultIconName'
    | 'getChatHistory'
    | 'getChatInviteLink'
    | 'getChatInviteLinkCounts'
    | 'getChatInviteLinkMembers'
    | 'getChatInviteLinks'
    | 'getChatJoinRequests'
    | 'getChatListsToAddChat'
    | 'getChatMember'
    | 'getChatMessageByDate'
    | 'getChatMessageCalendar'
    | 'getChatMessageCount'
    | 'getChatNotificationSettingsExceptions'
    | 'getChatPinnedMessage'
    | 'getChatScheduledMessages'
    | 'getChatSparseMessagePositions'
    | 'getChatSponsoredMessage'
    | 'getChatStatistics'
    | 'getChats'
    | 'getCommands'
    | 'getConnectedWebsites'
    | 'getContacts'
    | 'getCountries'
    | 'getCountryCode'
    | 'getCreatedPublicChats'
    | 'getCurrentState'
    | 'getDatabaseStatistics'
    | 'getDeepLinkInfo'
    | 'getEmojiSuggestionsUrl'
    | 'getExternalLink'
    | 'getExternalLinkInfo'
    | 'getFavoriteStickers'
    | 'getFile'
    | 'getFileDownloadedPrefixSize'
    | 'getFileExtension'
    | 'getFileMimeType'
    | 'getGameHighScores'
    | 'getGroupCall'
    | 'getGroupCallInviteLink'
    | 'getGroupCallStreamSegment'
    | 'getGroupCallStreams'
    | 'getGroupsInCommon'
    | 'getImportedContactCount'
    | 'getInactiveSupergroupChats'
    | 'getInlineGameHighScores'
    | 'getInlineQueryResults'
    | 'getInstalledStickerSets'
    | 'getInternalLinkType'
    | 'getJsonString'
    | 'getJsonValue'
    | 'getLanguagePackInfo'
    | 'getLanguagePackString'
    | 'getLanguagePackStrings'
    | 'getLocalizationTargetInfo'
    | 'getLogStream'
    | 'getLogTagVerbosityLevel'
    | 'getLogTags'
    | 'getLogVerbosityLevel'
    | 'getLoginUrl'
    | 'getLoginUrlInfo'
    | 'getMapThumbnailFile'
    | 'getMarkdownText'
    | 'getMe'
    | 'getMessage'
    | 'getMessageAddedReactions'
    | 'getMessageAvailableReactions'
    | 'getMessageEmbeddingCode'
    | 'getMessageFileType'
    | 'getMessageImportConfirmationText'
    | 'getMessageLink'
    | 'getMessageLinkInfo'
    | 'getMessageLocally'
    | 'getMessagePublicForwards'
    | 'getMessageStatistics'
    | 'getMessageThread'
    | 'getMessageThreadHistory'
    | 'getMessageViewers'
    | 'getMessages'
    | 'getNetworkStatistics'
    | 'getOption'
    | 'getPassportAuthorizationForm'
    | 'getPassportAuthorizationFormAvailableElements'
    | 'getPassportElement'
    | 'getPasswordState'
    | 'getPaymentForm'
    | 'getPaymentReceipt'
    | 'getPhoneNumberInfo'
    | 'getPhoneNumberInfoSync'
    | 'getPollVoters'
    | 'getPreferredCountryLanguage'
    | 'getProxies'
    | 'getProxyLink'
    | 'getPushReceiverId'
    | 'getRecentInlineBots'
    | 'getRecentStickers'
    | 'getRecentlyOpenedChats'
    | 'getRecentlyVisitedTMeUrls'
    | 'getRecommendedChatFilters'
    | 'getRecoveryEmailAddress'
    | 'getRemoteFile'
    | 'getRepliedMessage'
    | 'getSavedAnimations'
    | 'getSavedOrderInfo'
    | 'getScopeNotificationSettings'
    | 'getSecretChat'
    | 'getStatisticalGraph'
    | 'getStickerEmojis'
    | 'getStickerSet'
    | 'getStickers'
    | 'getStorageStatistics'
    | 'getStorageStatisticsFast'
    | 'getSuggestedFileName'
    | 'getSuggestedStickerSetName'
    | 'getSuitableDiscussionChats'
    | 'getSupergroup'
    | 'getSupergroupFullInfo'
    | 'getSupergroupMembers'
    | 'getSupportUser'
    | 'getTemporaryPasswordState'
    | 'getTextEntities'
    | 'getTopChats'
    | 'getTrendingStickerSets'
    | 'getUser'
    | 'getUserFullInfo'
    | 'getUserPrivacySettingRules'
    | 'getUserProfilePhotos'
    | 'getVideoChatAvailableParticipants'
    | 'getVideoChatRtmpUrl'
    | 'getWebPageInstantView'
    | 'getWebPagePreview'
    | 'hideSuggestedAction'
    | 'importContacts'
    | 'importMessages'
    | 'inviteGroupCallParticipants'
    | 'joinChat'
    | 'joinChatByInviteLink'
    | 'joinGroupCall'
    | 'leaveChat'
    | 'leaveGroupCall'
    | 'loadChats'
    | 'loadGroupCallParticipants'
    | 'logOut'
    | 'openChat'
    | 'openMessageContent'
    | 'optimizeStorage'
    | 'parseMarkdown'
    | 'parseTextEntities'
    | 'pinChatMessage'
    | 'pingProxy'
    | 'processChatJoinRequest'
    | 'processChatJoinRequests'
    | 'processPushNotification'
    | 'readAllChatMentions'
    | 'readAllChatReactions'
    | 'readFilePart'
    | 'recoverAuthenticationPassword'
    | 'recoverPassword'
    | 'registerDevice'
    | 'registerUser'
    | 'removeAllFilesFromDownloads'
    | 'removeBackground'
    | 'removeChatActionBar'
    | 'removeContacts'
    | 'removeFavoriteSticker'
    | 'removeFileFromDownloads'
    | 'removeNotification'
    | 'removeNotificationGroup'
    | 'removeProxy'
    | 'removeRecentHashtag'
    | 'removeRecentSticker'
    | 'removeRecentlyFoundChat'
    | 'removeSavedAnimation'
    | 'removeStickerFromSet'
    | 'removeTopChat'
    | 'reorderChatFilters'
    | 'reorderInstalledStickerSets'
    | 'replacePrimaryChatInviteLink'
    | 'replaceVideoChatRtmpUrl'
    | 'reportChat'
    | 'reportChatPhoto'
    | 'reportSupergroupSpam'
    | 'requestAuthenticationPasswordRecovery'
    | 'requestPasswordRecovery'
    | 'requestQrCodeAuthentication'
    | 'resendAuthenticationCode'
    | 'resendChangePhoneNumberCode'
    | 'resendEmailAddressVerificationCode'
    | 'resendMessages'
    | 'resendPhoneNumberConfirmationCode'
    | 'resendPhoneNumberVerificationCode'
    | 'resendRecoveryEmailAddressCode'
    | 'resetAllNotificationSettings'
    | 'resetBackgrounds'
    | 'resetNetworkStatistics'
    | 'resetPassword'
    | 'revokeChatInviteLink'
    | 'revokeGroupCallInviteLink'
    | 'saveApplicationLogEvent'
    | 'searchBackground'
    | 'searchCallMessages'
    | 'searchChatMembers'
    | 'searchChatMessages'
    | 'searchChatRecentLocationMessages'
    | 'searchChats'
    | 'searchChatsNearby'
    | 'searchChatsOnServer'
    | 'searchContacts'
    | 'searchEmojis'
    | 'searchFileDownloads'
    | 'searchHashtags'
    | 'searchInstalledStickerSets'
    | 'searchMessages'
    | 'searchOutgoingDocumentMessages'
    | 'searchPublicChat'
    | 'searchPublicChats'
    | 'searchSecretMessages'
    | 'searchStickerSet'
    | 'searchStickerSets'
    | 'searchStickers'
    | 'searchUserByPhoneNumber'
    | 'sendBotStartMessage'
    | 'sendCallDebugInformation'
    | 'sendCallRating'
    | 'sendCallSignalingData'
    | 'sendChatAction'
    | 'sendChatScreenshotTakenNotification'
    | 'sendCustomRequest'
    | 'sendEmailAddressVerificationCode'
    | 'sendInlineQueryResultMessage'
    | 'sendMessage'
    | 'sendMessageAlbum'
    | 'sendPassportAuthorizationForm'
    | 'sendPaymentForm'
    | 'sendPhoneNumberConfirmationCode'
    | 'sendPhoneNumberVerificationCode'
    | 'setAccountTtl'
    | 'setAlarm'
    | 'setAuthenticationPhoneNumber'
    | 'setAutoDownloadSettings'
    | 'setBackground'
    | 'setBio'
    | 'setBotUpdatesStatus'
    | 'setChatAvailableReactions'
    | 'setChatClientData'
    | 'setChatDescription'
    | 'setChatDiscussionGroup'
    | 'setChatDraftMessage'
    | 'setChatLocation'
    | 'setChatMemberStatus'
    | 'setChatMessageSender'
    | 'setChatMessageTtl'
    | 'setChatNotificationSettings'
    | 'setChatPermissions'
    | 'setChatPhoto'
    | 'setChatSlowModeDelay'
    | 'setChatTheme'
    | 'setChatTitle'
    | 'setCommands'
    | 'setCustomLanguagePack'
    | 'setCustomLanguagePackString'
    | 'setDatabaseEncryptionKey'
    | 'setFileGenerationProgress'
    | 'setGameScore'
    | 'setGroupCallParticipantIsSpeaking'
    | 'setGroupCallParticipantVolumeLevel'
    | 'setGroupCallTitle'
    | 'setInactiveSessionTtl'
    | 'setInlineGameScore'
    | 'setLocation'
    | 'setLogStream'
    | 'setLogTagVerbosityLevel'
    | 'setLogVerbosityLevel'
    | 'setMessageReaction'
    | 'setName'
    | 'setNetworkType'
    | 'setOption'
    | 'setPassportElement'
    | 'setPassportElementErrors'
    | 'setPassword'
    | 'setPinnedChats'
    | 'setPollAnswer'
    | 'setProfilePhoto'
    | 'setRecoveryEmailAddress'
    | 'setScopeNotificationSettings'
    | 'setStickerPositionInSet'
    | 'setStickerSetThumbnail'
    | 'setSupergroupStickerSet'
    | 'setSupergroupUsername'
    | 'setTdlibParameters'
    | 'setUserPrivacySettingRules'
    | 'setUsername'
    | 'setVideoChatDefaultParticipant'
    | 'sharePhoneNumber'
    | 'startGroupCallRecording'
    | 'startGroupCallScreenSharing'
    | 'startScheduledGroupCall'
    | 'stopPoll'
    | 'synchronizeLanguagePack'
    | 'terminateAllOtherSessions'
    | 'terminateSession'
    | 'testCallBytes'
    | 'testCallEmpty'
    | 'testCallString'
    | 'testCallVectorInt'
    | 'testCallVectorIntObject'
    | 'testCallVectorString'
    | 'testCallVectorStringObject'
    | 'testGetDifference'
    | 'testNetwork'
    | 'testProxy'
    | 'testReturnError'
    | 'testSquareInt'
    | 'testUseUpdate'
    | 'toggleAllDownloadsArePaused'
    | 'toggleChatDefaultDisableNotification'
    | 'toggleChatHasProtectedContent'
    | 'toggleChatIsMarkedAsUnread'
    | 'toggleChatIsPinned'
    | 'toggleDownloadIsPaused'
    | 'toggleGroupCallEnabledStartNotification'
    | 'toggleGroupCallIsMyVideoEnabled'
    | 'toggleGroupCallIsMyVideoPaused'
    | 'toggleGroupCallMuteNewParticipants'
    | 'toggleGroupCallParticipantIsHandRaised'
    | 'toggleGroupCallParticipantIsMuted'
    | 'toggleGroupCallScreenSharingIsPaused'
    | 'toggleMessageSenderIsBlocked'
    | 'toggleSessionCanAcceptCalls'
    | 'toggleSessionCanAcceptSecretChats'
    | 'toggleSupergroupIsAllHistoryAvailable'
    | 'toggleSupergroupIsBroadcastGroup'
    | 'toggleSupergroupSignMessages'
    | 'transferChatOwnership'
    | 'translateText'
    | 'unpinAllChatMessages'
    | 'unpinChatMessage'
    | 'upgradeBasicGroupChatToSupergroupChat'
    | 'uploadFile'
    | 'uploadStickerFile'
    | 'validateOrderInfo'
    | 'viewMessages'
    | 'viewTrendingStickerSets'
    | 'writeGeneratedFilePart';

export const methods: MethodName[] = [
    'acceptCall',
    'acceptTermsOfService',
    'addChatMember',
    'addChatMembers',
    'addChatToList',
    'addContact',
    'addCustomServerLanguagePack',
    'addFavoriteSticker',
    'addFileToDownloads',
    'addLocalMessage',
    'addLogMessage',
    'addNetworkStatistics',
    'addProxy',
    'addRecentSticker',
    'addRecentlyFoundChat',
    'addSavedAnimation',
    'addStickerToSet',
    'answerCallbackQuery',
    'answerCustomQuery',
    'answerInlineQuery',
    'answerPreCheckoutQuery',
    'answerShippingQuery',
    'banChatMember',
    'blockMessageSenderFromReplies',
    'canTransferOwnership',
    'cancelDownloadFile',
    'cancelPasswordReset',
    'cancelUploadFile',
    'changeImportedContacts',
    'changePhoneNumber',
    'changeStickerSet',
    'checkAuthenticationBotToken',
    'checkAuthenticationCode',
    'checkAuthenticationPassword',
    'checkAuthenticationPasswordRecoveryCode',
    'checkChangePhoneNumberCode',
    'checkChatInviteLink',
    'checkChatUsername',
    'checkCreatedPublicChatsLimit',
    'checkDatabaseEncryptionKey',
    'checkEmailAddressVerificationCode',
    'checkPasswordRecoveryCode',
    'checkPhoneNumberConfirmationCode',
    'checkPhoneNumberVerificationCode',
    'checkRecoveryEmailAddressCode',
    'checkStickerSetName',
    'cleanFileName',
    'clearAllDraftMessages',
    'clearImportedContacts',
    'clearRecentStickers',
    'clearRecentlyFoundChats',
    'clickAnimatedEmojiMessage',
    'close',
    'closeChat',
    'closeSecretChat',
    'confirmQrCodeAuthentication',
    'createBasicGroupChat',
    'createCall',
    'createChatFilter',
    'createChatInviteLink',
    'createNewBasicGroupChat',
    'createNewSecretChat',
    'createNewStickerSet',
    'createNewSupergroupChat',
    'createPrivateChat',
    'createSecretChat',
    'createSupergroupChat',
    'createTemporaryPassword',
    'createVideoChat',
    'deleteAccount',
    'deleteAllCallMessages',
    'deleteAllRevokedChatInviteLinks',
    'deleteChat',
    'deleteChatFilter',
    'deleteChatHistory',
    'deleteChatMessagesByDate',
    'deleteChatMessagesBySender',
    'deleteChatReplyMarkup',
    'deleteCommands',
    'deleteFile',
    'deleteLanguagePack',
    'deleteMessages',
    'deletePassportElement',
    'deleteProfilePhoto',
    'deleteRevokedChatInviteLink',
    'deleteSavedCredentials',
    'deleteSavedOrderInfo',
    'destroy',
    'disableProxy',
    'discardCall',
    'disconnectAllWebsites',
    'disconnectWebsite',
    'downloadFile',
    'editChatFilter',
    'editChatInviteLink',
    'editCustomLanguagePackInfo',
    'editInlineMessageCaption',
    'editInlineMessageLiveLocation',
    'editInlineMessageMedia',
    'editInlineMessageReplyMarkup',
    'editInlineMessageText',
    'editMessageCaption',
    'editMessageLiveLocation',
    'editMessageMedia',
    'editMessageReplyMarkup',
    'editMessageSchedulingState',
    'editMessageText',
    'editProxy',
    'enableProxy',
    'endGroupCall',
    'endGroupCallRecording',
    'endGroupCallScreenSharing',
    'finishFileGeneration',
    'forwardMessages',
    'getAccountTtl',
    'getActiveLiveLocationMessages',
    'getActiveSessions',
    'getAllPassportElements',
    'getAnimatedEmoji',
    'getApplicationConfig',
    'getApplicationDownloadLink',
    'getArchivedStickerSets',
    'getAttachedStickerSets',
    'getAuthorizationState',
    'getAutoDownloadSettingsPresets',
    'getBackgroundUrl',
    'getBackgrounds',
    'getBankCardInfo',
    'getBasicGroup',
    'getBasicGroupFullInfo',
    'getBlockedMessageSenders',
    'getCallbackQueryAnswer',
    'getCallbackQueryMessage',
    'getChat',
    'getChatAdministrators',
    'getChatAvailableMessageSenders',
    'getChatEventLog',
    'getChatFilter',
    'getChatFilterDefaultIconName',
    'getChatHistory',
    'getChatInviteLink',
    'getChatInviteLinkCounts',
    'getChatInviteLinkMembers',
    'getChatInviteLinks',
    'getChatJoinRequests',
    'getChatListsToAddChat',
    'getChatMember',
    'getChatMessageByDate',
    'getChatMessageCalendar',
    'getChatMessageCount',
    'getChatNotificationSettingsExceptions',
    'getChatPinnedMessage',
    'getChatScheduledMessages',
    'getChatSparseMessagePositions',
    'getChatSponsoredMessage',
    'getChatStatistics',
    'getChats',
    'getCommands',
    'getConnectedWebsites',
    'getContacts',
    'getCountries',
    'getCountryCode',
    'getCreatedPublicChats',
    'getCurrentState',
    'getDatabaseStatistics',
    'getDeepLinkInfo',
    'getEmojiSuggestionsUrl',
    'getExternalLink',
    'getExternalLinkInfo',
    'getFavoriteStickers',
    'getFile',
    'getFileDownloadedPrefixSize',
    'getFileExtension',
    'getFileMimeType',
    'getGameHighScores',
    'getGroupCall',
    'getGroupCallInviteLink',
    'getGroupCallStreamSegment',
    'getGroupCallStreams',
    'getGroupsInCommon',
    'getImportedContactCount',
    'getInactiveSupergroupChats',
    'getInlineGameHighScores',
    'getInlineQueryResults',
    'getInstalledStickerSets',
    'getInternalLinkType',
    'getJsonString',
    'getJsonValue',
    'getLanguagePackInfo',
    'getLanguagePackString',
    'getLanguagePackStrings',
    'getLocalizationTargetInfo',
    'getLogStream',
    'getLogTagVerbosityLevel',
    'getLogTags',
    'getLogVerbosityLevel',
    'getLoginUrl',
    'getLoginUrlInfo',
    'getMapThumbnailFile',
    'getMarkdownText',
    'getMe',
    'getMessage',
    'getMessageAddedReactions',
    'getMessageAvailableReactions',
    'getMessageEmbeddingCode',
    'getMessageFileType',
    'getMessageImportConfirmationText',
    'getMessageLink',
    'getMessageLinkInfo',
    'getMessageLocally',
    'getMessagePublicForwards',
    'getMessageStatistics',
    'getMessageThread',
    'getMessageThreadHistory',
    'getMessageViewers',
    'getMessages',
    'getNetworkStatistics',
    'getOption',
    'getPassportAuthorizationForm',
    'getPassportAuthorizationFormAvailableElements',
    'getPassportElement',
    'getPasswordState',
    'getPaymentForm',
    'getPaymentReceipt',
    'getPhoneNumberInfo',
    'getPhoneNumberInfoSync',
    'getPollVoters',
    'getPreferredCountryLanguage',
    'getProxies',
    'getProxyLink',
    'getPushReceiverId',
    'getRecentInlineBots',
    'getRecentStickers',
    'getRecentlyOpenedChats',
    'getRecentlyVisitedTMeUrls',
    'getRecommendedChatFilters',
    'getRecoveryEmailAddress',
    'getRemoteFile',
    'getRepliedMessage',
    'getSavedAnimations',
    'getSavedOrderInfo',
    'getScopeNotificationSettings',
    'getSecretChat',
    'getStatisticalGraph',
    'getStickerEmojis',
    'getStickerSet',
    'getStickers',
    'getStorageStatistics',
    'getStorageStatisticsFast',
    'getSuggestedFileName',
    'getSuggestedStickerSetName',
    'getSuitableDiscussionChats',
    'getSupergroup',
    'getSupergroupFullInfo',
    'getSupergroupMembers',
    'getSupportUser',
    'getTemporaryPasswordState',
    'getTextEntities',
    'getTopChats',
    'getTrendingStickerSets',
    'getUser',
    'getUserFullInfo',
    'getUserPrivacySettingRules',
    'getUserProfilePhotos',
    'getVideoChatAvailableParticipants',
    'getVideoChatRtmpUrl',
    'getWebPageInstantView',
    'getWebPagePreview',
    'hideSuggestedAction',
    'importContacts',
    'importMessages',
    'inviteGroupCallParticipants',
    'joinChat',
    'joinChatByInviteLink',
    'joinGroupCall',
    'leaveChat',
    'leaveGroupCall',
    'loadChats',
    'loadGroupCallParticipants',
    'logOut',
    'openChat',
    'openMessageContent',
    'optimizeStorage',
    'parseMarkdown',
    'parseTextEntities',
    'pinChatMessage',
    'pingProxy',
    'processChatJoinRequest',
    'processChatJoinRequests',
    'processPushNotification',
    'readAllChatMentions',
    'readAllChatReactions',
    'readFilePart',
    'recoverAuthenticationPassword',
    'recoverPassword',
    'registerDevice',
    'registerUser',
    'removeAllFilesFromDownloads',
    'removeBackground',
    'removeChatActionBar',
    'removeContacts',
    'removeFavoriteSticker',
    'removeFileFromDownloads',
    'removeNotification',
    'removeNotificationGroup',
    'removeProxy',
    'removeRecentHashtag',
    'removeRecentSticker',
    'removeRecentlyFoundChat',
    'removeSavedAnimation',
    'removeStickerFromSet',
    'removeTopChat',
    'reorderChatFilters',
    'reorderInstalledStickerSets',
    'replacePrimaryChatInviteLink',
    'replaceVideoChatRtmpUrl',
    'reportChat',
    'reportChatPhoto',
    'reportSupergroupSpam',
    'requestAuthenticationPasswordRecovery',
    'requestPasswordRecovery',
    'requestQrCodeAuthentication',
    'resendAuthenticationCode',
    'resendChangePhoneNumberCode',
    'resendEmailAddressVerificationCode',
    'resendMessages',
    'resendPhoneNumberConfirmationCode',
    'resendPhoneNumberVerificationCode',
    'resendRecoveryEmailAddressCode',
    'resetAllNotificationSettings',
    'resetBackgrounds',
    'resetNetworkStatistics',
    'resetPassword',
    'revokeChatInviteLink',
    'revokeGroupCallInviteLink',
    'saveApplicationLogEvent',
    'searchBackground',
    'searchCallMessages',
    'searchChatMembers',
    'searchChatMessages',
    'searchChatRecentLocationMessages',
    'searchChats',
    'searchChatsNearby',
    'searchChatsOnServer',
    'searchContacts',
    'searchEmojis',
    'searchFileDownloads',
    'searchHashtags',
    'searchInstalledStickerSets',
    'searchMessages',
    'searchOutgoingDocumentMessages',
    'searchPublicChat',
    'searchPublicChats',
    'searchSecretMessages',
    'searchStickerSet',
    'searchStickerSets',
    'searchStickers',
    'searchUserByPhoneNumber',
    'sendBotStartMessage',
    'sendCallDebugInformation',
    'sendCallRating',
    'sendCallSignalingData',
    'sendChatAction',
    'sendChatScreenshotTakenNotification',
    'sendCustomRequest',
    'sendEmailAddressVerificationCode',
    'sendInlineQueryResultMessage',
    'sendMessage',
    'sendMessageAlbum',
    'sendPassportAuthorizationForm',
    'sendPaymentForm',
    'sendPhoneNumberConfirmationCode',
    'sendPhoneNumberVerificationCode',
    'setAccountTtl',
    'setAlarm',
    'setAuthenticationPhoneNumber',
    'setAutoDownloadSettings',
    'setBackground',
    'setBio',
    'setBotUpdatesStatus',
    'setChatAvailableReactions',
    'setChatClientData',
    'setChatDescription',
    'setChatDiscussionGroup',
    'setChatDraftMessage',
    'setChatLocation',
    'setChatMemberStatus',
    'setChatMessageSender',
    'setChatMessageTtl',
    'setChatNotificationSettings',
    'setChatPermissions',
    'setChatPhoto',
    'setChatSlowModeDelay',
    'setChatTheme',
    'setChatTitle',
    'setCommands',
    'setCustomLanguagePack',
    'setCustomLanguagePackString',
    'setDatabaseEncryptionKey',
    'setFileGenerationProgress',
    'setGameScore',
    'setGroupCallParticipantIsSpeaking',
    'setGroupCallParticipantVolumeLevel',
    'setGroupCallTitle',
    'setInactiveSessionTtl',
    'setInlineGameScore',
    'setLocation',
    'setLogStream',
    'setLogTagVerbosityLevel',
    'setLogVerbosityLevel',
    'setMessageReaction',
    'setName',
    'setNetworkType',
    'setOption',
    'setPassportElement',
    'setPassportElementErrors',
    'setPassword',
    'setPinnedChats',
    'setPollAnswer',
    'setProfilePhoto',
    'setRecoveryEmailAddress',
    'setScopeNotificationSettings',
    'setStickerPositionInSet',
    'setStickerSetThumbnail',
    'setSupergroupStickerSet',
    'setSupergroupUsername',
    'setTdlibParameters',
    'setUserPrivacySettingRules',
    'setUsername',
    'setVideoChatDefaultParticipant',
    'sharePhoneNumber',
    'startGroupCallRecording',
    'startGroupCallScreenSharing',
    'startScheduledGroupCall',
    'stopPoll',
    'synchronizeLanguagePack',
    'terminateAllOtherSessions',
    'terminateSession',
    'testCallBytes',
    'testCallEmpty',
    'testCallString',
    'testCallVectorInt',
    'testCallVectorIntObject',
    'testCallVectorString',
    'testCallVectorStringObject',
    'testGetDifference',
    'testNetwork',
    'testProxy',
    'testReturnError',
    'testSquareInt',
    'testUseUpdate',
    'toggleAllDownloadsArePaused',
    'toggleChatDefaultDisableNotification',
    'toggleChatHasProtectedContent',
    'toggleChatIsMarkedAsUnread',
    'toggleChatIsPinned',
    'toggleDownloadIsPaused',
    'toggleGroupCallEnabledStartNotification',
    'toggleGroupCallIsMyVideoEnabled',
    'toggleGroupCallIsMyVideoPaused',
    'toggleGroupCallMuteNewParticipants',
    'toggleGroupCallParticipantIsHandRaised',
    'toggleGroupCallParticipantIsMuted',
    'toggleGroupCallScreenSharingIsPaused',
    'toggleMessageSenderIsBlocked',
    'toggleSessionCanAcceptCalls',
    'toggleSessionCanAcceptSecretChats',
    'toggleSupergroupIsAllHistoryAvailable',
    'toggleSupergroupIsBroadcastGroup',
    'toggleSupergroupSignMessages',
    'transferChatOwnership',
    'translateText',
    'unpinAllChatMessages',
    'unpinChatMessage',
    'upgradeBasicGroupChatToSupergroupChat',
    'uploadFile',
    'uploadStickerFile',
    'validateOrderInfo',
    'viewMessages',
    'viewTrendingStickerSets',
    'writeGeneratedFilePart',
];

export type AuthIndependentMethodName =
    | 'addCustomServerLanguagePack'
    | 'addNetworkStatistics'
    | 'addProxy'
    | 'deleteAccount'
    | 'deleteLanguagePack'
    | 'destroy'
    | 'disableProxy'
    | 'editCustomLanguagePackInfo'
    | 'editProxy'
    | 'enableProxy'
    | 'getApplicationConfig'
    | 'getCountries'
    | 'getCountryCode'
    | 'getDeepLinkInfo'
    | 'getInternalLinkType'
    | 'getLanguagePackInfo'
    | 'getLanguagePackStrings'
    | 'getLocalizationTargetInfo'
    | 'getNetworkStatistics'
    | 'getOption'
    | 'getPhoneNumberInfo'
    | 'getProxies'
    | 'getProxyLink'
    | 'getStorageStatistics'
    | 'getStorageStatisticsFast'
    | 'pingProxy'
    | 'processPushNotification'
    | 'removeProxy'
    | 'resetNetworkStatistics'
    | 'saveApplicationLogEvent'
    | 'setCustomLanguagePackString'
    | 'setNetworkType'
    | 'setOption'
    | 'synchronizeLanguagePack'
    | 'testCallBytes'
    | 'testCallEmpty'
    | 'testCallString'
    | 'testCallVectorInt'
    | 'testCallVectorIntObject'
    | 'testCallVectorString'
    | 'testCallVectorStringObject'
    | 'testNetwork'
    | 'testProxy'
    | 'testSquareInt'
    | 'testUseUpdate';

export const authIndependentMethods: AuthIndependentMethodName[] = [
    'addCustomServerLanguagePack',
    'addNetworkStatistics',
    'addProxy',
    'deleteAccount',
    'deleteLanguagePack',
    'destroy',
    'disableProxy',
    'editCustomLanguagePackInfo',
    'editProxy',
    'enableProxy',
    'getApplicationConfig',
    'getCountries',
    'getCountryCode',
    'getDeepLinkInfo',
    'getInternalLinkType',
    'getLanguagePackInfo',
    'getLanguagePackStrings',
    'getLocalizationTargetInfo',
    'getNetworkStatistics',
    'getOption',
    'getPhoneNumberInfo',
    'getProxies',
    'getProxyLink',
    'getStorageStatistics',
    'getStorageStatisticsFast',
    'pingProxy',
    'processPushNotification',
    'removeProxy',
    'resetNetworkStatistics',
    'saveApplicationLogEvent',
    'setCustomLanguagePackString',
    'setNetworkType',
    'setOption',
    'synchronizeLanguagePack',
    'testCallBytes',
    'testCallEmpty',
    'testCallString',
    'testCallVectorInt',
    'testCallVectorIntObject',
    'testCallVectorString',
    'testCallVectorStringObject',
    'testNetwork',
    'testProxy',
    'testSquareInt',
    'testUseUpdate',
];

export type SyncMethodName =
    | 'addLogMessage'
    | 'cleanFileName'
    | 'getChatFilterDefaultIconName'
    | 'getFileExtension'
    | 'getFileMimeType'
    | 'getJsonString'
    | 'getJsonValue'
    | 'getLanguagePackString'
    | 'getLogStream'
    | 'getLogTagVerbosityLevel'
    | 'getLogTags'
    | 'getLogVerbosityLevel'
    | 'getMarkdownText'
    | 'getPhoneNumberInfoSync'
    | 'getPushReceiverId'
    | 'getTextEntities'
    | 'parseMarkdown'
    | 'parseTextEntities'
    | 'setLogStream'
    | 'setLogTagVerbosityLevel'
    | 'setLogVerbosityLevel'
    | 'testReturnError';

export const syncMethods: SyncMethodName[] = [
    'addLogMessage',
    'cleanFileName',
    'getChatFilterDefaultIconName',
    'getFileExtension',
    'getFileMimeType',
    'getJsonString',
    'getJsonValue',
    'getLanguagePackString',
    'getLogStream',
    'getLogTagVerbosityLevel',
    'getLogTags',
    'getLogVerbosityLevel',
    'getMarkdownText',
    'getPhoneNumberInfoSync',
    'getPushReceiverId',
    'getTextEntities',
    'parseMarkdown',
    'parseTextEntities',
    'setLogStream',
    'setLogTagVerbosityLevel',
    'setLogVerbosityLevel',
    'testReturnError',
];
