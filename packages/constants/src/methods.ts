export type MethodName = 'acceptCall' | 'acceptTermsOfService' | 'addChatMember' | 'addChatMembers' | 'addChatToList' | 'addContact' | 'addCustomServerLanguagePack' | 'addFavoriteSticker' | 'addLocalMessage' | 'addLogMessage' | 'addNetworkStatistics' | 'addProxy' | 'addRecentSticker' | 'addRecentlyFoundChat' | 'addSavedAnimation' | 'addStickerToSet' | 'answerCallbackQuery' | 'answerCustomQuery' | 'answerInlineQuery' | 'answerPreCheckoutQuery' | 'answerShippingQuery' | 'banChatMember' | 'blockMessageSenderFromReplies' | 'canTransferOwnership' | 'cancelDownloadFile' | 'cancelPasswordReset' | 'cancelUploadFile' | 'changeImportedContacts' | 'changePhoneNumber' | 'changeStickerSet' | 'checkAuthenticationBotToken' | 'checkAuthenticationCode' | 'checkAuthenticationPassword' | 'checkAuthenticationPasswordRecoveryCode' | 'checkChangePhoneNumberCode' | 'checkChatInviteLink' | 'checkChatUsername' | 'checkCreatedPublicChatsLimit' | 'checkDatabaseEncryptionKey' | 'checkEmailAddressVerificationCode' | 'checkPasswordRecoveryCode' | 'checkPhoneNumberConfirmationCode' | 'checkPhoneNumberVerificationCode' | 'checkRecoveryEmailAddressCode' | 'checkStickerSetName' | 'cleanFileName' | 'clearAllDraftMessages' | 'clearImportedContacts' | 'clearRecentStickers' | 'clearRecentlyFoundChats' | 'clickAnimatedEmojiMessage' | 'close' | 'closeChat' | 'closeSecretChat' | 'confirmQrCodeAuthentication' | 'createBasicGroupChat' | 'createCall' | 'createChatFilter' | 'createChatInviteLink' | 'createNewBasicGroupChat' | 'createNewSecretChat' | 'createNewStickerSet' | 'createNewSupergroupChat' | 'createPrivateChat' | 'createSecretChat' | 'createSupergroupChat' | 'createTemporaryPassword' | 'createVoiceChat' | 'deleteAccount' | 'deleteAllCallMessages' | 'deleteAllRevokedChatInviteLinks' | 'deleteChat' | 'deleteChatFilter' | 'deleteChatHistory' | 'deleteChatMessagesFromUser' | 'deleteChatReplyMarkup' | 'deleteCommands' | 'deleteFile' | 'deleteLanguagePack' | 'deleteMessages' | 'deletePassportElement' | 'deleteProfilePhoto' | 'deleteRevokedChatInviteLink' | 'deleteSavedCredentials' | 'deleteSavedOrderInfo' | 'destroy' | 'disableProxy' | 'discardCall' | 'discardGroupCall' | 'disconnectAllWebsites' | 'disconnectWebsite' | 'downloadFile' | 'editChatFilter' | 'editChatInviteLink' | 'editCustomLanguagePackInfo' | 'editInlineMessageCaption' | 'editInlineMessageLiveLocation' | 'editInlineMessageMedia' | 'editInlineMessageReplyMarkup' | 'editInlineMessageText' | 'editMessageCaption' | 'editMessageLiveLocation' | 'editMessageMedia' | 'editMessageReplyMarkup' | 'editMessageSchedulingState' | 'editMessageText' | 'editProxy' | 'enableProxy' | 'endGroupCallRecording' | 'endGroupCallScreenSharing' | 'finishFileGeneration' | 'forwardMessages' | 'getAccountTtl' | 'getActiveLiveLocationMessages' | 'getActiveSessions' | 'getAllPassportElements' | 'getApplicationConfig' | 'getApplicationDownloadLink' | 'getArchivedStickerSets' | 'getAttachedStickerSets' | 'getAuthorizationState' | 'getAutoDownloadSettingsPresets' | 'getBackgroundUrl' | 'getBackgrounds' | 'getBankCardInfo' | 'getBasicGroup' | 'getBasicGroupFullInfo' | 'getBlockedMessageSenders' | 'getCallbackQueryAnswer' | 'getCallbackQueryMessage' | 'getChat' | 'getChatAdministrators' | 'getChatEventLog' | 'getChatFilter' | 'getChatFilterDefaultIconName' | 'getChatHistory' | 'getChatInviteLink' | 'getChatInviteLinkCounts' | 'getChatInviteLinkMembers' | 'getChatInviteLinks' | 'getChatListsToAddChat' | 'getChatMember' | 'getChatMessageByDate' | 'getChatMessageCount' | 'getChatNotificationSettingsExceptions' | 'getChatPinnedMessage' | 'getChatScheduledMessages' | 'getChatSponsoredMessages' | 'getChatStatistics' | 'getChats' | 'getCommands' | 'getConnectedWebsites' | 'getContacts' | 'getCountries' | 'getCountryCode' | 'getCreatedPublicChats' | 'getCurrentState' | 'getDatabaseStatistics' | 'getDeepLinkInfo' | 'getEmojiSuggestionsUrl' | 'getExternalLink' | 'getExternalLinkInfo' | 'getFavoriteStickers' | 'getFile' | 'getFileDownloadedPrefixSize' | 'getFileExtension' | 'getFileMimeType' | 'getGameHighScores' | 'getGroupCall' | 'getGroupCallInviteLink' | 'getGroupCallStreamSegment' | 'getGroupsInCommon' | 'getImportedContactCount' | 'getInactiveSupergroupChats' | 'getInlineGameHighScores' | 'getInlineQueryResults' | 'getInstalledStickerSets' | 'getInternalLinkType' | 'getJsonString' | 'getJsonValue' | 'getLanguagePackInfo' | 'getLanguagePackString' | 'getLanguagePackStrings' | 'getLocalizationTargetInfo' | 'getLogStream' | 'getLogTagVerbosityLevel' | 'getLogTags' | 'getLogVerbosityLevel' | 'getLoginUrl' | 'getLoginUrlInfo' | 'getMapThumbnailFile' | 'getMarkdownText' | 'getMe' | 'getMessage' | 'getMessageEmbeddingCode' | 'getMessageFileType' | 'getMessageImportConfirmationText' | 'getMessageLink' | 'getMessageLinkInfo' | 'getMessageLocally' | 'getMessagePublicForwards' | 'getMessageStatistics' | 'getMessageThread' | 'getMessageThreadHistory' | 'getMessageViewers' | 'getMessages' | 'getNetworkStatistics' | 'getOption' | 'getPassportAuthorizationForm' | 'getPassportAuthorizationFormAvailableElements' | 'getPassportElement' | 'getPasswordState' | 'getPaymentForm' | 'getPaymentReceipt' | 'getPhoneNumberInfo' | 'getPhoneNumberInfoSync' | 'getPollVoters' | 'getPreferredCountryLanguage' | 'getProxies' | 'getProxyLink' | 'getPushReceiverId' | 'getRecentInlineBots' | 'getRecentStickers' | 'getRecentlyOpenedChats' | 'getRecentlyVisitedTMeUrls' | 'getRecommendedChatFilters' | 'getRecoveryEmailAddress' | 'getRemoteFile' | 'getRepliedMessage' | 'getSavedAnimations' | 'getSavedOrderInfo' | 'getScopeNotificationSettings' | 'getSecretChat' | 'getStatisticalGraph' | 'getStickerEmojis' | 'getStickerSet' | 'getStickers' | 'getStorageStatistics' | 'getStorageStatisticsFast' | 'getSuggestedFileName' | 'getSuggestedStickerSetName' | 'getSuitableDiscussionChats' | 'getSupergroup' | 'getSupergroupFullInfo' | 'getSupergroupMembers' | 'getSupportUser' | 'getTemporaryPasswordState' | 'getTextEntities' | 'getTopChats' | 'getTrendingStickerSets' | 'getUser' | 'getUserFullInfo' | 'getUserPrivacySettingRules' | 'getUserProfilePhotos' | 'getVoiceChatAvailableParticipants' | 'getWebPageInstantView' | 'getWebPagePreview' | 'hideSuggestedAction' | 'importContacts' | 'importMessages' | 'inviteGroupCallParticipants' | 'joinChat' | 'joinChatByInviteLink' | 'joinGroupCall' | 'leaveChat' | 'leaveGroupCall' | 'loadChats' | 'loadGroupCallParticipants' | 'logOut' | 'openChat' | 'openMessageContent' | 'optimizeStorage' | 'parseMarkdown' | 'parseTextEntities' | 'pinChatMessage' | 'pingProxy' | 'processPushNotification' | 'readAllChatMentions' | 'readFilePart' | 'recoverAuthenticationPassword' | 'recoverPassword' | 'registerDevice' | 'registerUser' | 'removeBackground' | 'removeChatActionBar' | 'removeContacts' | 'removeFavoriteSticker' | 'removeNotification' | 'removeNotificationGroup' | 'removeProxy' | 'removeRecentHashtag' | 'removeRecentSticker' | 'removeRecentlyFoundChat' | 'removeSavedAnimation' | 'removeStickerFromSet' | 'removeTopChat' | 'reorderChatFilters' | 'reorderInstalledStickerSets' | 'replacePrimaryChatInviteLink' | 'reportChat' | 'reportChatPhoto' | 'reportSupergroupSpam' | 'requestAuthenticationPasswordRecovery' | 'requestPasswordRecovery' | 'requestQrCodeAuthentication' | 'resendAuthenticationCode' | 'resendChangePhoneNumberCode' | 'resendEmailAddressVerificationCode' | 'resendMessages' | 'resendPhoneNumberConfirmationCode' | 'resendPhoneNumberVerificationCode' | 'resendRecoveryEmailAddressCode' | 'resetAllNotificationSettings' | 'resetBackgrounds' | 'resetNetworkStatistics' | 'resetPassword' | 'revokeChatInviteLink' | 'revokeGroupCallInviteLink' | 'saveApplicationLogEvent' | 'searchBackground' | 'searchCallMessages' | 'searchChatMembers' | 'searchChatMessages' | 'searchChatRecentLocationMessages' | 'searchChats' | 'searchChatsNearby' | 'searchChatsOnServer' | 'searchContacts' | 'searchEmojis' | 'searchHashtags' | 'searchInstalledStickerSets' | 'searchMessages' | 'searchPublicChat' | 'searchPublicChats' | 'searchSecretMessages' | 'searchStickerSet' | 'searchStickerSets' | 'searchStickers' | 'sendBotStartMessage' | 'sendCallDebugInformation' | 'sendCallRating' | 'sendCallSignalingData' | 'sendChatAction' | 'sendChatScreenshotTakenNotification' | 'sendCustomRequest' | 'sendEmailAddressVerificationCode' | 'sendInlineQueryResultMessage' | 'sendMessage' | 'sendMessageAlbum' | 'sendPassportAuthorizationForm' | 'sendPaymentForm' | 'sendPhoneNumberConfirmationCode' | 'sendPhoneNumberVerificationCode' | 'setAccountTtl' | 'setAlarm' | 'setAuthenticationPhoneNumber' | 'setAutoDownloadSettings' | 'setBackground' | 'setBio' | 'setBotUpdatesStatus' | 'setChatClientData' | 'setChatDescription' | 'setChatDiscussionGroup' | 'setChatDraftMessage' | 'setChatLocation' | 'setChatMemberStatus' | 'setChatMessageTtlSetting' | 'setChatNotificationSettings' | 'setChatPermissions' | 'setChatPhoto' | 'setChatSlowModeDelay' | 'setChatTheme' | 'setChatTitle' | 'setCommands' | 'setCustomLanguagePack' | 'setCustomLanguagePackString' | 'setDatabaseEncryptionKey' | 'setFileGenerationProgress' | 'setGameScore' | 'setGroupCallParticipantIsSpeaking' | 'setGroupCallParticipantVolumeLevel' | 'setGroupCallTitle' | 'setInlineGameScore' | 'setLocation' | 'setLogStream' | 'setLogTagVerbosityLevel' | 'setLogVerbosityLevel' | 'setName' | 'setNetworkType' | 'setOption' | 'setPassportElement' | 'setPassportElementErrors' | 'setPassword' | 'setPinnedChats' | 'setPollAnswer' | 'setProfilePhoto' | 'setRecoveryEmailAddress' | 'setScopeNotificationSettings' | 'setStickerPositionInSet' | 'setStickerSetThumbnail' | 'setSupergroupStickerSet' | 'setSupergroupUsername' | 'setTdlibParameters' | 'setUserPrivacySettingRules' | 'setUsername' | 'setVoiceChatDefaultParticipant' | 'sharePhoneNumber' | 'startGroupCallRecording' | 'startGroupCallScreenSharing' | 'startScheduledGroupCall' | 'stopPoll' | 'synchronizeLanguagePack' | 'terminateAllOtherSessions' | 'terminateSession' | 'testCallBytes' | 'testCallEmpty' | 'testCallString' | 'testCallVectorInt' | 'testCallVectorIntObject' | 'testCallVectorString' | 'testCallVectorStringObject' | 'testGetDifference' | 'testNetwork' | 'testProxy' | 'testReturnError' | 'testSquareInt' | 'testUseUpdate' | 'toggleChatDefaultDisableNotification' | 'toggleChatIsMarkedAsUnread' | 'toggleChatIsPinned' | 'toggleGroupCallEnabledStartNotification' | 'toggleGroupCallIsMyVideoEnabled' | 'toggleGroupCallIsMyVideoPaused' | 'toggleGroupCallMuteNewParticipants' | 'toggleGroupCallParticipantIsHandRaised' | 'toggleGroupCallParticipantIsMuted' | 'toggleGroupCallScreenSharingIsPaused' | 'toggleMessageSenderIsBlocked' | 'toggleSupergroupIsAllHistoryAvailable' | 'toggleSupergroupIsBroadcastGroup' | 'toggleSupergroupSignMessages' | 'transferChatOwnership' | 'unpinAllChatMessages' | 'unpinChatMessage' | 'upgradeBasicGroupChatToSupergroupChat' | 'uploadFile' | 'uploadStickerFile' | 'validateOrderInfo' | 'viewMessages' | 'viewSponsoredMessage' | 'viewTrendingStickerSets' | 'writeGeneratedFilePart'

export const methods: MethodName[] = ['acceptCall', 'acceptTermsOfService', 'addChatMember', 'addChatMembers', 'addChatToList', 'addContact', 'addCustomServerLanguagePack', 'addFavoriteSticker', 'addLocalMessage', 'addLogMessage', 'addNetworkStatistics', 'addProxy', 'addRecentSticker', 'addRecentlyFoundChat', 'addSavedAnimation', 'addStickerToSet', 'answerCallbackQuery', 'answerCustomQuery', 'answerInlineQuery', 'answerPreCheckoutQuery', 'answerShippingQuery', 'banChatMember', 'blockMessageSenderFromReplies', 'canTransferOwnership', 'cancelDownloadFile', 'cancelPasswordReset', 'cancelUploadFile', 'changeImportedContacts', 'changePhoneNumber', 'changeStickerSet', 'checkAuthenticationBotToken', 'checkAuthenticationCode', 'checkAuthenticationPassword', 'checkAuthenticationPasswordRecoveryCode', 'checkChangePhoneNumberCode', 'checkChatInviteLink', 'checkChatUsername', 'checkCreatedPublicChatsLimit', 'checkDatabaseEncryptionKey', 'checkEmailAddressVerificationCode', 'checkPasswordRecoveryCode', 'checkPhoneNumberConfirmationCode', 'checkPhoneNumberVerificationCode', 'checkRecoveryEmailAddressCode', 'checkStickerSetName', 'cleanFileName', 'clearAllDraftMessages', 'clearImportedContacts', 'clearRecentStickers', 'clearRecentlyFoundChats', 'clickAnimatedEmojiMessage', 'close', 'closeChat', 'closeSecretChat', 'confirmQrCodeAuthentication', 'createBasicGroupChat', 'createCall', 'createChatFilter', 'createChatInviteLink', 'createNewBasicGroupChat', 'createNewSecretChat', 'createNewStickerSet', 'createNewSupergroupChat', 'createPrivateChat', 'createSecretChat', 'createSupergroupChat', 'createTemporaryPassword', 'createVoiceChat', 'deleteAccount', 'deleteAllCallMessages', 'deleteAllRevokedChatInviteLinks', 'deleteChat', 'deleteChatFilter', 'deleteChatHistory', 'deleteChatMessagesFromUser', 'deleteChatReplyMarkup', 'deleteCommands', 'deleteFile', 'deleteLanguagePack', 'deleteMessages', 'deletePassportElement', 'deleteProfilePhoto', 'deleteRevokedChatInviteLink', 'deleteSavedCredentials', 'deleteSavedOrderInfo', 'destroy', 'disableProxy', 'discardCall', 'discardGroupCall', 'disconnectAllWebsites', 'disconnectWebsite', 'downloadFile', 'editChatFilter', 'editChatInviteLink', 'editCustomLanguagePackInfo', 'editInlineMessageCaption', 'editInlineMessageLiveLocation', 'editInlineMessageMedia', 'editInlineMessageReplyMarkup', 'editInlineMessageText', 'editMessageCaption', 'editMessageLiveLocation', 'editMessageMedia', 'editMessageReplyMarkup', 'editMessageSchedulingState', 'editMessageText', 'editProxy', 'enableProxy', 'endGroupCallRecording', 'endGroupCallScreenSharing', 'finishFileGeneration', 'forwardMessages', 'getAccountTtl', 'getActiveLiveLocationMessages', 'getActiveSessions', 'getAllPassportElements', 'getApplicationConfig', 'getApplicationDownloadLink', 'getArchivedStickerSets', 'getAttachedStickerSets', 'getAuthorizationState', 'getAutoDownloadSettingsPresets', 'getBackgroundUrl', 'getBackgrounds', 'getBankCardInfo', 'getBasicGroup', 'getBasicGroupFullInfo', 'getBlockedMessageSenders', 'getCallbackQueryAnswer', 'getCallbackQueryMessage', 'getChat', 'getChatAdministrators', 'getChatEventLog', 'getChatFilter', 'getChatFilterDefaultIconName', 'getChatHistory', 'getChatInviteLink', 'getChatInviteLinkCounts', 'getChatInviteLinkMembers', 'getChatInviteLinks', 'getChatListsToAddChat', 'getChatMember', 'getChatMessageByDate', 'getChatMessageCount', 'getChatNotificationSettingsExceptions', 'getChatPinnedMessage', 'getChatScheduledMessages', 'getChatSponsoredMessages', 'getChatStatistics', 'getChats', 'getCommands', 'getConnectedWebsites', 'getContacts', 'getCountries', 'getCountryCode', 'getCreatedPublicChats', 'getCurrentState', 'getDatabaseStatistics', 'getDeepLinkInfo', 'getEmojiSuggestionsUrl', 'getExternalLink', 'getExternalLinkInfo', 'getFavoriteStickers', 'getFile', 'getFileDownloadedPrefixSize', 'getFileExtension', 'getFileMimeType', 'getGameHighScores', 'getGroupCall', 'getGroupCallInviteLink', 'getGroupCallStreamSegment', 'getGroupsInCommon', 'getImportedContactCount', 'getInactiveSupergroupChats', 'getInlineGameHighScores', 'getInlineQueryResults', 'getInstalledStickerSets', 'getInternalLinkType', 'getJsonString', 'getJsonValue', 'getLanguagePackInfo', 'getLanguagePackString', 'getLanguagePackStrings', 'getLocalizationTargetInfo', 'getLogStream', 'getLogTagVerbosityLevel', 'getLogTags', 'getLogVerbosityLevel', 'getLoginUrl', 'getLoginUrlInfo', 'getMapThumbnailFile', 'getMarkdownText', 'getMe', 'getMessage', 'getMessageEmbeddingCode', 'getMessageFileType', 'getMessageImportConfirmationText', 'getMessageLink', 'getMessageLinkInfo', 'getMessageLocally', 'getMessagePublicForwards', 'getMessageStatistics', 'getMessageThread', 'getMessageThreadHistory', 'getMessageViewers', 'getMessages', 'getNetworkStatistics', 'getOption', 'getPassportAuthorizationForm', 'getPassportAuthorizationFormAvailableElements', 'getPassportElement', 'getPasswordState', 'getPaymentForm', 'getPaymentReceipt', 'getPhoneNumberInfo', 'getPhoneNumberInfoSync', 'getPollVoters', 'getPreferredCountryLanguage', 'getProxies', 'getProxyLink', 'getPushReceiverId', 'getRecentInlineBots', 'getRecentStickers', 'getRecentlyOpenedChats', 'getRecentlyVisitedTMeUrls', 'getRecommendedChatFilters', 'getRecoveryEmailAddress', 'getRemoteFile', 'getRepliedMessage', 'getSavedAnimations', 'getSavedOrderInfo', 'getScopeNotificationSettings', 'getSecretChat', 'getStatisticalGraph', 'getStickerEmojis', 'getStickerSet', 'getStickers', 'getStorageStatistics', 'getStorageStatisticsFast', 'getSuggestedFileName', 'getSuggestedStickerSetName', 'getSuitableDiscussionChats', 'getSupergroup', 'getSupergroupFullInfo', 'getSupergroupMembers', 'getSupportUser', 'getTemporaryPasswordState', 'getTextEntities', 'getTopChats', 'getTrendingStickerSets', 'getUser', 'getUserFullInfo', 'getUserPrivacySettingRules', 'getUserProfilePhotos', 'getVoiceChatAvailableParticipants', 'getWebPageInstantView', 'getWebPagePreview', 'hideSuggestedAction', 'importContacts', 'importMessages', 'inviteGroupCallParticipants', 'joinChat', 'joinChatByInviteLink', 'joinGroupCall', 'leaveChat', 'leaveGroupCall', 'loadChats', 'loadGroupCallParticipants', 'logOut', 'openChat', 'openMessageContent', 'optimizeStorage', 'parseMarkdown', 'parseTextEntities', 'pinChatMessage', 'pingProxy', 'processPushNotification', 'readAllChatMentions', 'readFilePart', 'recoverAuthenticationPassword', 'recoverPassword', 'registerDevice', 'registerUser', 'removeBackground', 'removeChatActionBar', 'removeContacts', 'removeFavoriteSticker', 'removeNotification', 'removeNotificationGroup', 'removeProxy', 'removeRecentHashtag', 'removeRecentSticker', 'removeRecentlyFoundChat', 'removeSavedAnimation', 'removeStickerFromSet', 'removeTopChat', 'reorderChatFilters', 'reorderInstalledStickerSets', 'replacePrimaryChatInviteLink', 'reportChat', 'reportChatPhoto', 'reportSupergroupSpam', 'requestAuthenticationPasswordRecovery', 'requestPasswordRecovery', 'requestQrCodeAuthentication', 'resendAuthenticationCode', 'resendChangePhoneNumberCode', 'resendEmailAddressVerificationCode', 'resendMessages', 'resendPhoneNumberConfirmationCode', 'resendPhoneNumberVerificationCode', 'resendRecoveryEmailAddressCode', 'resetAllNotificationSettings', 'resetBackgrounds', 'resetNetworkStatistics', 'resetPassword', 'revokeChatInviteLink', 'revokeGroupCallInviteLink', 'saveApplicationLogEvent', 'searchBackground', 'searchCallMessages', 'searchChatMembers', 'searchChatMessages', 'searchChatRecentLocationMessages', 'searchChats', 'searchChatsNearby', 'searchChatsOnServer', 'searchContacts', 'searchEmojis', 'searchHashtags', 'searchInstalledStickerSets', 'searchMessages', 'searchPublicChat', 'searchPublicChats', 'searchSecretMessages', 'searchStickerSet', 'searchStickerSets', 'searchStickers', 'sendBotStartMessage', 'sendCallDebugInformation', 'sendCallRating', 'sendCallSignalingData', 'sendChatAction', 'sendChatScreenshotTakenNotification', 'sendCustomRequest', 'sendEmailAddressVerificationCode', 'sendInlineQueryResultMessage', 'sendMessage', 'sendMessageAlbum', 'sendPassportAuthorizationForm', 'sendPaymentForm', 'sendPhoneNumberConfirmationCode', 'sendPhoneNumberVerificationCode', 'setAccountTtl', 'setAlarm', 'setAuthenticationPhoneNumber', 'setAutoDownloadSettings', 'setBackground', 'setBio', 'setBotUpdatesStatus', 'setChatClientData', 'setChatDescription', 'setChatDiscussionGroup', 'setChatDraftMessage', 'setChatLocation', 'setChatMemberStatus', 'setChatMessageTtlSetting', 'setChatNotificationSettings', 'setChatPermissions', 'setChatPhoto', 'setChatSlowModeDelay', 'setChatTheme', 'setChatTitle', 'setCommands', 'setCustomLanguagePack', 'setCustomLanguagePackString', 'setDatabaseEncryptionKey', 'setFileGenerationProgress', 'setGameScore', 'setGroupCallParticipantIsSpeaking', 'setGroupCallParticipantVolumeLevel', 'setGroupCallTitle', 'setInlineGameScore', 'setLocation', 'setLogStream', 'setLogTagVerbosityLevel', 'setLogVerbosityLevel', 'setName', 'setNetworkType', 'setOption', 'setPassportElement', 'setPassportElementErrors', 'setPassword', 'setPinnedChats', 'setPollAnswer', 'setProfilePhoto', 'setRecoveryEmailAddress', 'setScopeNotificationSettings', 'setStickerPositionInSet', 'setStickerSetThumbnail', 'setSupergroupStickerSet', 'setSupergroupUsername', 'setTdlibParameters', 'setUserPrivacySettingRules', 'setUsername', 'setVoiceChatDefaultParticipant', 'sharePhoneNumber', 'startGroupCallRecording', 'startGroupCallScreenSharing', 'startScheduledGroupCall', 'stopPoll', 'synchronizeLanguagePack', 'terminateAllOtherSessions', 'terminateSession', 'testCallBytes', 'testCallEmpty', 'testCallString', 'testCallVectorInt', 'testCallVectorIntObject', 'testCallVectorString', 'testCallVectorStringObject', 'testGetDifference', 'testNetwork', 'testProxy', 'testReturnError', 'testSquareInt', 'testUseUpdate', 'toggleChatDefaultDisableNotification', 'toggleChatIsMarkedAsUnread', 'toggleChatIsPinned', 'toggleGroupCallEnabledStartNotification', 'toggleGroupCallIsMyVideoEnabled', 'toggleGroupCallIsMyVideoPaused', 'toggleGroupCallMuteNewParticipants', 'toggleGroupCallParticipantIsHandRaised', 'toggleGroupCallParticipantIsMuted', 'toggleGroupCallScreenSharingIsPaused', 'toggleMessageSenderIsBlocked', 'toggleSupergroupIsAllHistoryAvailable', 'toggleSupergroupIsBroadcastGroup', 'toggleSupergroupSignMessages', 'transferChatOwnership', 'unpinAllChatMessages', 'unpinChatMessage', 'upgradeBasicGroupChatToSupergroupChat', 'uploadFile', 'uploadStickerFile', 'validateOrderInfo', 'viewMessages', 'viewSponsoredMessage', 'viewTrendingStickerSets', 'writeGeneratedFilePart']

export type AuthIndependentMethodName = 'addCustomServerLanguagePack' | 'addNetworkStatistics' | 'addProxy' | 'deleteAccount' | 'deleteLanguagePack' | 'destroy' | 'disableProxy' | 'editCustomLanguagePackInfo' | 'editProxy' | 'enableProxy' | 'getApplicationConfig' | 'getCountries' | 'getCountryCode' | 'getDeepLinkInfo' | 'getInternalLinkType' | 'getLanguagePackInfo' | 'getLanguagePackStrings' | 'getLocalizationTargetInfo' | 'getNetworkStatistics' | 'getOption' | 'getPhoneNumberInfo' | 'getProxies' | 'getProxyLink' | 'getStorageStatistics' | 'getStorageStatisticsFast' | 'pingProxy' | 'processPushNotification' | 'removeProxy' | 'resetNetworkStatistics' | 'saveApplicationLogEvent' | 'setCustomLanguagePackString' | 'setNetworkType' | 'setOption' | 'synchronizeLanguagePack' | 'testCallBytes' | 'testCallEmpty' | 'testCallString' | 'testCallVectorInt' | 'testCallVectorIntObject' | 'testCallVectorString' | 'testCallVectorStringObject' | 'testNetwork' | 'testProxy' | 'testSquareInt' | 'testUseUpdate'

export const authIndependentMethods: AuthIndependentMethodName[] = ['addCustomServerLanguagePack', 'addNetworkStatistics', 'addProxy', 'deleteAccount', 'deleteLanguagePack', 'destroy', 'disableProxy', 'editCustomLanguagePackInfo', 'editProxy', 'enableProxy', 'getApplicationConfig', 'getCountries', 'getCountryCode', 'getDeepLinkInfo', 'getInternalLinkType', 'getLanguagePackInfo', 'getLanguagePackStrings', 'getLocalizationTargetInfo', 'getNetworkStatistics', 'getOption', 'getPhoneNumberInfo', 'getProxies', 'getProxyLink', 'getStorageStatistics', 'getStorageStatisticsFast', 'pingProxy', 'processPushNotification', 'removeProxy', 'resetNetworkStatistics', 'saveApplicationLogEvent', 'setCustomLanguagePackString', 'setNetworkType', 'setOption', 'synchronizeLanguagePack', 'testCallBytes', 'testCallEmpty', 'testCallString', 'testCallVectorInt', 'testCallVectorIntObject', 'testCallVectorString', 'testCallVectorStringObject', 'testNetwork', 'testProxy', 'testSquareInt', 'testUseUpdate']

export type SyncMethodName = 'addLogMessage' | 'cleanFileName' | 'getChatFilterDefaultIconName' | 'getFileExtension' | 'getFileMimeType' | 'getJsonString' | 'getJsonValue' | 'getLanguagePackString' | 'getLogStream' | 'getLogTagVerbosityLevel' | 'getLogTags' | 'getLogVerbosityLevel' | 'getMarkdownText' | 'getPhoneNumberInfoSync' | 'getPushReceiverId' | 'getTextEntities' | 'parseMarkdown' | 'parseTextEntities' | 'setLogStream' | 'setLogTagVerbosityLevel' | 'setLogVerbosityLevel' | 'testReturnError'

export const syncMethods: SyncMethodName[] = ['addLogMessage', 'cleanFileName', 'getChatFilterDefaultIconName', 'getFileExtension', 'getFileMimeType', 'getJsonString', 'getJsonValue', 'getLanguagePackString', 'getLogStream', 'getLogTagVerbosityLevel', 'getLogTags', 'getLogVerbosityLevel', 'getMarkdownText', 'getPhoneNumberInfoSync', 'getPushReceiverId', 'getTextEntities', 'parseMarkdown', 'parseTextEntities', 'setLogStream', 'setLogTagVerbosityLevel', 'setLogVerbosityLevel', 'testReturnError']
