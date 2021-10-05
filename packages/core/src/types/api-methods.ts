import * as api from './methods'

export interface ApiMethods {
  acceptCall: api.acceptCall
  acceptTermsOfService: api.acceptTermsOfService
  addChatMember: api.addChatMember
  addChatMembers: api.addChatMembers
  addChatToList: api.addChatToList
  addContact: api.addContact
  addCustomServerLanguagePack: api.addCustomServerLanguagePack
  addFavoriteSticker: api.addFavoriteSticker
  addLocalMessage: api.addLocalMessage
  addLogMessage: api.addLogMessage
  addLogMessageSync: api.addLogMessageSync
  addNetworkStatistics: api.addNetworkStatistics
  addProxy: api.addProxy
  addRecentSticker: api.addRecentSticker
  addRecentlyFoundChat: api.addRecentlyFoundChat
  addSavedAnimation: api.addSavedAnimation
  addStickerToSet: api.addStickerToSet
  answerCallbackQuery: api.answerCallbackQuery
  answerCustomQuery: api.answerCustomQuery
  answerInlineQuery: api.answerInlineQuery
  answerPreCheckoutQuery: api.answerPreCheckoutQuery
  answerShippingQuery: api.answerShippingQuery
  banChatMember: api.banChatMember
  blockMessageSenderFromReplies: api.blockMessageSenderFromReplies
  canTransferOwnership: api.canTransferOwnership
  cancelDownloadFile: api.cancelDownloadFile
  cancelPasswordReset: api.cancelPasswordReset
  cancelUploadFile: api.cancelUploadFile
  changeImportedContacts: api.changeImportedContacts
  changePhoneNumber: api.changePhoneNumber
  changeStickerSet: api.changeStickerSet
  checkAuthenticationBotToken: api.checkAuthenticationBotToken
  checkAuthenticationCode: api.checkAuthenticationCode
  checkAuthenticationPassword: api.checkAuthenticationPassword
  checkAuthenticationPasswordRecoveryCode: api.checkAuthenticationPasswordRecoveryCode
  checkChangePhoneNumberCode: api.checkChangePhoneNumberCode
  checkChatInviteLink: api.checkChatInviteLink
  checkChatUsername: api.checkChatUsername
  checkCreatedPublicChatsLimit: api.checkCreatedPublicChatsLimit
  checkDatabaseEncryptionKey: api.checkDatabaseEncryptionKey
  checkEmailAddressVerificationCode: api.checkEmailAddressVerificationCode
  checkPasswordRecoveryCode: api.checkPasswordRecoveryCode
  checkPhoneNumberConfirmationCode: api.checkPhoneNumberConfirmationCode
  checkPhoneNumberVerificationCode: api.checkPhoneNumberVerificationCode
  checkRecoveryEmailAddressCode: api.checkRecoveryEmailAddressCode
  checkStickerSetName: api.checkStickerSetName
  cleanFileName: api.cleanFileName
  cleanFileNameSync: api.cleanFileNameSync
  clearAllDraftMessages: api.clearAllDraftMessages
  clearImportedContacts: api.clearImportedContacts
  clearRecentStickers: api.clearRecentStickers
  clearRecentlyFoundChats: api.clearRecentlyFoundChats
  clickAnimatedEmojiMessage: api.clickAnimatedEmojiMessage
  close: api.close
  closeChat: api.closeChat
  closeSecretChat: api.closeSecretChat
  confirmQrCodeAuthentication: api.confirmQrCodeAuthentication
  createBasicGroupChat: api.createBasicGroupChat
  createCall: api.createCall
  createChatFilter: api.createChatFilter
  createChatInviteLink: api.createChatInviteLink
  createNewBasicGroupChat: api.createNewBasicGroupChat
  createNewSecretChat: api.createNewSecretChat
  createNewStickerSet: api.createNewStickerSet
  createNewSupergroupChat: api.createNewSupergroupChat
  createPrivateChat: api.createPrivateChat
  createSecretChat: api.createSecretChat
  createSupergroupChat: api.createSupergroupChat
  createTemporaryPassword: api.createTemporaryPassword
  createVoiceChat: api.createVoiceChat
  deleteAccount: api.deleteAccount
  deleteAllCallMessages: api.deleteAllCallMessages
  deleteAllRevokedChatInviteLinks: api.deleteAllRevokedChatInviteLinks
  deleteChat: api.deleteChat
  deleteChatFilter: api.deleteChatFilter
  deleteChatHistory: api.deleteChatHistory
  deleteChatMessagesFromUser: api.deleteChatMessagesFromUser
  deleteChatReplyMarkup: api.deleteChatReplyMarkup
  deleteCommands: api.deleteCommands
  deleteFile: api.deleteFile
  deleteLanguagePack: api.deleteLanguagePack
  deleteMessages: api.deleteMessages
  deletePassportElement: api.deletePassportElement
  deleteProfilePhoto: api.deleteProfilePhoto
  deleteRevokedChatInviteLink: api.deleteRevokedChatInviteLink
  deleteSavedCredentials: api.deleteSavedCredentials
  deleteSavedOrderInfo: api.deleteSavedOrderInfo
  destroy: api.destroy
  disableProxy: api.disableProxy
  discardCall: api.discardCall
  discardGroupCall: api.discardGroupCall
  disconnectAllWebsites: api.disconnectAllWebsites
  disconnectWebsite: api.disconnectWebsite
  downloadFile: api.downloadFile
  editChatFilter: api.editChatFilter
  editChatInviteLink: api.editChatInviteLink
  editCustomLanguagePackInfo: api.editCustomLanguagePackInfo
  editInlineMessageCaption: api.editInlineMessageCaption
  editInlineMessageLiveLocation: api.editInlineMessageLiveLocation
  editInlineMessageMedia: api.editInlineMessageMedia
  editInlineMessageReplyMarkup: api.editInlineMessageReplyMarkup
  editInlineMessageText: api.editInlineMessageText
  editMessageCaption: api.editMessageCaption
  editMessageLiveLocation: api.editMessageLiveLocation
  editMessageMedia: api.editMessageMedia
  editMessageReplyMarkup: api.editMessageReplyMarkup
  editMessageSchedulingState: api.editMessageSchedulingState
  editMessageText: api.editMessageText
  editProxy: api.editProxy
  enableProxy: api.enableProxy
  endGroupCallRecording: api.endGroupCallRecording
  endGroupCallScreenSharing: api.endGroupCallScreenSharing
  finishFileGeneration: api.finishFileGeneration
  forwardMessages: api.forwardMessages
  getAccountTtl: api.getAccountTtl
  getActiveLiveLocationMessages: api.getActiveLiveLocationMessages
  getActiveSessions: api.getActiveSessions
  getAllPassportElements: api.getAllPassportElements
  getApplicationConfig: api.getApplicationConfig
  getApplicationDownloadLink: api.getApplicationDownloadLink
  getArchivedStickerSets: api.getArchivedStickerSets
  getAttachedStickerSets: api.getAttachedStickerSets
  getAuthorizationState: api.getAuthorizationState
  getAutoDownloadSettingsPresets: api.getAutoDownloadSettingsPresets
  getBackgroundUrl: api.getBackgroundUrl
  getBackgrounds: api.getBackgrounds
  getBankCardInfo: api.getBankCardInfo
  getBasicGroup: api.getBasicGroup
  getBasicGroupFullInfo: api.getBasicGroupFullInfo
  getBlockedMessageSenders: api.getBlockedMessageSenders
  getCallbackQueryAnswer: api.getCallbackQueryAnswer
  getCallbackQueryMessage: api.getCallbackQueryMessage
  getChat: api.getChat
  getChatAdministrators: api.getChatAdministrators
  getChatEventLog: api.getChatEventLog
  getChatFilter: api.getChatFilter
  getChatFilterDefaultIconName: api.getChatFilterDefaultIconName
  getChatFilterDefaultIconNameSync: api.getChatFilterDefaultIconNameSync
  getChatHistory: api.getChatHistory
  getChatInviteLink: api.getChatInviteLink
  getChatInviteLinkCounts: api.getChatInviteLinkCounts
  getChatInviteLinkMembers: api.getChatInviteLinkMembers
  getChatInviteLinks: api.getChatInviteLinks
  getChatListsToAddChat: api.getChatListsToAddChat
  getChatMember: api.getChatMember
  getChatMessageByDate: api.getChatMessageByDate
  getChatMessageCount: api.getChatMessageCount
  getChatNotificationSettingsExceptions: api.getChatNotificationSettingsExceptions
  getChatPinnedMessage: api.getChatPinnedMessage
  getChatScheduledMessages: api.getChatScheduledMessages
  getChatSponsoredMessages: api.getChatSponsoredMessages
  getChatStatistics: api.getChatStatistics
  getChats: api.getChats
  getCommands: api.getCommands
  getConnectedWebsites: api.getConnectedWebsites
  getContacts: api.getContacts
  getCountries: api.getCountries
  getCountryCode: api.getCountryCode
  getCreatedPublicChats: api.getCreatedPublicChats
  getCurrentState: api.getCurrentState
  getDatabaseStatistics: api.getDatabaseStatistics
  getDeepLinkInfo: api.getDeepLinkInfo
  getEmojiSuggestionsUrl: api.getEmojiSuggestionsUrl
  getExternalLink: api.getExternalLink
  getExternalLinkInfo: api.getExternalLinkInfo
  getFavoriteStickers: api.getFavoriteStickers
  getFile: api.getFile
  getFileDownloadedPrefixSize: api.getFileDownloadedPrefixSize
  getFileExtension: api.getFileExtension
  getFileExtensionSync: api.getFileExtensionSync
  getFileMimeType: api.getFileMimeType
  getFileMimeTypeSync: api.getFileMimeTypeSync
  getGameHighScores: api.getGameHighScores
  getGroupCall: api.getGroupCall
  getGroupCallInviteLink: api.getGroupCallInviteLink
  getGroupCallStreamSegment: api.getGroupCallStreamSegment
  getGroupsInCommon: api.getGroupsInCommon
  getImportedContactCount: api.getImportedContactCount
  getInactiveSupergroupChats: api.getInactiveSupergroupChats
  getInlineGameHighScores: api.getInlineGameHighScores
  getInlineQueryResults: api.getInlineQueryResults
  getInstalledStickerSets: api.getInstalledStickerSets
  getInternalLinkType: api.getInternalLinkType
  getJsonString: api.getJsonString
  getJsonStringSync: api.getJsonStringSync
  getJsonValue: api.getJsonValue
  getJsonValueSync: api.getJsonValueSync
  getLanguagePackInfo: api.getLanguagePackInfo
  getLanguagePackString: api.getLanguagePackString
  getLanguagePackStringSync: api.getLanguagePackStringSync
  getLanguagePackStrings: api.getLanguagePackStrings
  getLocalizationTargetInfo: api.getLocalizationTargetInfo
  getLogStream: api.getLogStream
  getLogStreamSync: api.getLogStreamSync
  getLogTagVerbosityLevel: api.getLogTagVerbosityLevel
  getLogTagVerbosityLevelSync: api.getLogTagVerbosityLevelSync
  getLogTags: api.getLogTags
  getLogTagsSync: api.getLogTagsSync
  getLogVerbosityLevel: api.getLogVerbosityLevel
  getLogVerbosityLevelSync: api.getLogVerbosityLevelSync
  getLoginUrl: api.getLoginUrl
  getLoginUrlInfo: api.getLoginUrlInfo
  getMapThumbnailFile: api.getMapThumbnailFile
  getMarkdownText: api.getMarkdownText
  getMarkdownTextSync: api.getMarkdownTextSync
  getMe: api.getMe
  getMessage: api.getMessage
  getMessageEmbeddingCode: api.getMessageEmbeddingCode
  getMessageFileType: api.getMessageFileType
  getMessageImportConfirmationText: api.getMessageImportConfirmationText
  getMessageLink: api.getMessageLink
  getMessageLinkInfo: api.getMessageLinkInfo
  getMessageLocally: api.getMessageLocally
  getMessagePublicForwards: api.getMessagePublicForwards
  getMessageStatistics: api.getMessageStatistics
  getMessageThread: api.getMessageThread
  getMessageThreadHistory: api.getMessageThreadHistory
  getMessageViewers: api.getMessageViewers
  getMessages: api.getMessages
  getNetworkStatistics: api.getNetworkStatistics
  getOption: api.getOption
  getPassportAuthorizationForm: api.getPassportAuthorizationForm
  getPassportAuthorizationFormAvailableElements: api.getPassportAuthorizationFormAvailableElements
  getPassportElement: api.getPassportElement
  getPasswordState: api.getPasswordState
  getPaymentForm: api.getPaymentForm
  getPaymentReceipt: api.getPaymentReceipt
  getPhoneNumberInfo: api.getPhoneNumberInfo
  getPhoneNumberInfoSync: api.getPhoneNumberInfoSync
  getPhoneNumberInfoSyncSync: api.getPhoneNumberInfoSyncSync
  getPollVoters: api.getPollVoters
  getPreferredCountryLanguage: api.getPreferredCountryLanguage
  getProxies: api.getProxies
  getProxyLink: api.getProxyLink
  getPushReceiverId: api.getPushReceiverId
  getPushReceiverIdSync: api.getPushReceiverIdSync
  getRecentInlineBots: api.getRecentInlineBots
  getRecentStickers: api.getRecentStickers
  getRecentlyOpenedChats: api.getRecentlyOpenedChats
  getRecentlyVisitedTMeUrls: api.getRecentlyVisitedTMeUrls
  getRecommendedChatFilters: api.getRecommendedChatFilters
  getRecoveryEmailAddress: api.getRecoveryEmailAddress
  getRemoteFile: api.getRemoteFile
  getRepliedMessage: api.getRepliedMessage
  getSavedAnimations: api.getSavedAnimations
  getSavedOrderInfo: api.getSavedOrderInfo
  getScopeNotificationSettings: api.getScopeNotificationSettings
  getSecretChat: api.getSecretChat
  getStatisticalGraph: api.getStatisticalGraph
  getStickerEmojis: api.getStickerEmojis
  getStickerSet: api.getStickerSet
  getStickers: api.getStickers
  getStorageStatistics: api.getStorageStatistics
  getStorageStatisticsFast: api.getStorageStatisticsFast
  getSuggestedFileName: api.getSuggestedFileName
  getSuggestedStickerSetName: api.getSuggestedStickerSetName
  getSuitableDiscussionChats: api.getSuitableDiscussionChats
  getSupergroup: api.getSupergroup
  getSupergroupFullInfo: api.getSupergroupFullInfo
  getSupergroupMembers: api.getSupergroupMembers
  getSupportUser: api.getSupportUser
  getTemporaryPasswordState: api.getTemporaryPasswordState
  getTextEntities: api.getTextEntities
  getTextEntitiesSync: api.getTextEntitiesSync
  getTopChats: api.getTopChats
  getTrendingStickerSets: api.getTrendingStickerSets
  getUser: api.getUser
  getUserFullInfo: api.getUserFullInfo
  getUserPrivacySettingRules: api.getUserPrivacySettingRules
  getUserProfilePhotos: api.getUserProfilePhotos
  getVoiceChatAvailableParticipants: api.getVoiceChatAvailableParticipants
  getWebPageInstantView: api.getWebPageInstantView
  getWebPagePreview: api.getWebPagePreview
  hideSuggestedAction: api.hideSuggestedAction
  importContacts: api.importContacts
  importMessages: api.importMessages
  inviteGroupCallParticipants: api.inviteGroupCallParticipants
  joinChat: api.joinChat
  joinChatByInviteLink: api.joinChatByInviteLink
  joinGroupCall: api.joinGroupCall
  leaveChat: api.leaveChat
  leaveGroupCall: api.leaveGroupCall
  loadChats: api.loadChats
  loadGroupCallParticipants: api.loadGroupCallParticipants
  logOut: api.logOut
  openChat: api.openChat
  openMessageContent: api.openMessageContent
  optimizeStorage: api.optimizeStorage
  parseMarkdown: api.parseMarkdown
  parseMarkdownSync: api.parseMarkdownSync
  parseTextEntities: api.parseTextEntities
  parseTextEntitiesSync: api.parseTextEntitiesSync
  pinChatMessage: api.pinChatMessage
  pingProxy: api.pingProxy
  processPushNotification: api.processPushNotification
  readAllChatMentions: api.readAllChatMentions
  readFilePart: api.readFilePart
  recoverAuthenticationPassword: api.recoverAuthenticationPassword
  recoverPassword: api.recoverPassword
  registerDevice: api.registerDevice
  registerUser: api.registerUser
  removeBackground: api.removeBackground
  removeChatActionBar: api.removeChatActionBar
  removeContacts: api.removeContacts
  removeFavoriteSticker: api.removeFavoriteSticker
  removeNotification: api.removeNotification
  removeNotificationGroup: api.removeNotificationGroup
  removeProxy: api.removeProxy
  removeRecentHashtag: api.removeRecentHashtag
  removeRecentSticker: api.removeRecentSticker
  removeRecentlyFoundChat: api.removeRecentlyFoundChat
  removeSavedAnimation: api.removeSavedAnimation
  removeStickerFromSet: api.removeStickerFromSet
  removeTopChat: api.removeTopChat
  reorderChatFilters: api.reorderChatFilters
  reorderInstalledStickerSets: api.reorderInstalledStickerSets
  replacePrimaryChatInviteLink: api.replacePrimaryChatInviteLink
  reportChat: api.reportChat
  reportChatPhoto: api.reportChatPhoto
  reportSupergroupSpam: api.reportSupergroupSpam
  requestAuthenticationPasswordRecovery: api.requestAuthenticationPasswordRecovery
  requestPasswordRecovery: api.requestPasswordRecovery
  requestQrCodeAuthentication: api.requestQrCodeAuthentication
  resendAuthenticationCode: api.resendAuthenticationCode
  resendChangePhoneNumberCode: api.resendChangePhoneNumberCode
  resendEmailAddressVerificationCode: api.resendEmailAddressVerificationCode
  resendMessages: api.resendMessages
  resendPhoneNumberConfirmationCode: api.resendPhoneNumberConfirmationCode
  resendPhoneNumberVerificationCode: api.resendPhoneNumberVerificationCode
  resendRecoveryEmailAddressCode: api.resendRecoveryEmailAddressCode
  resetAllNotificationSettings: api.resetAllNotificationSettings
  resetBackgrounds: api.resetBackgrounds
  resetNetworkStatistics: api.resetNetworkStatistics
  resetPassword: api.resetPassword
  revokeChatInviteLink: api.revokeChatInviteLink
  revokeGroupCallInviteLink: api.revokeGroupCallInviteLink
  saveApplicationLogEvent: api.saveApplicationLogEvent
  searchBackground: api.searchBackground
  searchCallMessages: api.searchCallMessages
  searchChatMembers: api.searchChatMembers
  searchChatMessages: api.searchChatMessages
  searchChatRecentLocationMessages: api.searchChatRecentLocationMessages
  searchChats: api.searchChats
  searchChatsNearby: api.searchChatsNearby
  searchChatsOnServer: api.searchChatsOnServer
  searchContacts: api.searchContacts
  searchEmojis: api.searchEmojis
  searchHashtags: api.searchHashtags
  searchInstalledStickerSets: api.searchInstalledStickerSets
  searchMessages: api.searchMessages
  searchPublicChat: api.searchPublicChat
  searchPublicChats: api.searchPublicChats
  searchSecretMessages: api.searchSecretMessages
  searchStickerSet: api.searchStickerSet
  searchStickerSets: api.searchStickerSets
  searchStickers: api.searchStickers
  sendBotStartMessage: api.sendBotStartMessage
  sendCallDebugInformation: api.sendCallDebugInformation
  sendCallRating: api.sendCallRating
  sendCallSignalingData: api.sendCallSignalingData
  sendChatAction: api.sendChatAction
  sendChatScreenshotTakenNotification: api.sendChatScreenshotTakenNotification
  sendCustomRequest: api.sendCustomRequest
  sendEmailAddressVerificationCode: api.sendEmailAddressVerificationCode
  sendInlineQueryResultMessage: api.sendInlineQueryResultMessage
  sendMessage: api.sendMessage
  sendMessageAlbum: api.sendMessageAlbum
  sendPassportAuthorizationForm: api.sendPassportAuthorizationForm
  sendPaymentForm: api.sendPaymentForm
  sendPhoneNumberConfirmationCode: api.sendPhoneNumberConfirmationCode
  sendPhoneNumberVerificationCode: api.sendPhoneNumberVerificationCode
  setAccountTtl: api.setAccountTtl
  setAlarm: api.setAlarm
  setAuthenticationPhoneNumber: api.setAuthenticationPhoneNumber
  setAutoDownloadSettings: api.setAutoDownloadSettings
  setBackground: api.setBackground
  setBio: api.setBio
  setBotUpdatesStatus: api.setBotUpdatesStatus
  setChatClientData: api.setChatClientData
  setChatDescription: api.setChatDescription
  setChatDiscussionGroup: api.setChatDiscussionGroup
  setChatDraftMessage: api.setChatDraftMessage
  setChatLocation: api.setChatLocation
  setChatMemberStatus: api.setChatMemberStatus
  setChatMessageTtlSetting: api.setChatMessageTtlSetting
  setChatNotificationSettings: api.setChatNotificationSettings
  setChatPermissions: api.setChatPermissions
  setChatPhoto: api.setChatPhoto
  setChatSlowModeDelay: api.setChatSlowModeDelay
  setChatTheme: api.setChatTheme
  setChatTitle: api.setChatTitle
  setCommands: api.setCommands
  setCustomLanguagePack: api.setCustomLanguagePack
  setCustomLanguagePackString: api.setCustomLanguagePackString
  setDatabaseEncryptionKey: api.setDatabaseEncryptionKey
  setFileGenerationProgress: api.setFileGenerationProgress
  setGameScore: api.setGameScore
  setGroupCallParticipantIsSpeaking: api.setGroupCallParticipantIsSpeaking
  setGroupCallParticipantVolumeLevel: api.setGroupCallParticipantVolumeLevel
  setGroupCallTitle: api.setGroupCallTitle
  setInlineGameScore: api.setInlineGameScore
  setLocation: api.setLocation
  setLogStream: api.setLogStream
  setLogStreamSync: api.setLogStreamSync
  setLogTagVerbosityLevel: api.setLogTagVerbosityLevel
  setLogTagVerbosityLevelSync: api.setLogTagVerbosityLevelSync
  setLogVerbosityLevel: api.setLogVerbosityLevel
  setLogVerbosityLevelSync: api.setLogVerbosityLevelSync
  setName: api.setName
  setNetworkType: api.setNetworkType
  setOption: api.setOption
  setPassportElement: api.setPassportElement
  setPassportElementErrors: api.setPassportElementErrors
  setPassword: api.setPassword
  setPinnedChats: api.setPinnedChats
  setPollAnswer: api.setPollAnswer
  setProfilePhoto: api.setProfilePhoto
  setRecoveryEmailAddress: api.setRecoveryEmailAddress
  setScopeNotificationSettings: api.setScopeNotificationSettings
  setStickerPositionInSet: api.setStickerPositionInSet
  setStickerSetThumbnail: api.setStickerSetThumbnail
  setSupergroupStickerSet: api.setSupergroupStickerSet
  setSupergroupUsername: api.setSupergroupUsername
  setTdlibParameters: api.setTdlibParameters
  setUserPrivacySettingRules: api.setUserPrivacySettingRules
  setUsername: api.setUsername
  setVoiceChatDefaultParticipant: api.setVoiceChatDefaultParticipant
  sharePhoneNumber: api.sharePhoneNumber
  startGroupCallRecording: api.startGroupCallRecording
  startGroupCallScreenSharing: api.startGroupCallScreenSharing
  startScheduledGroupCall: api.startScheduledGroupCall
  stopPoll: api.stopPoll
  synchronizeLanguagePack: api.synchronizeLanguagePack
  terminateAllOtherSessions: api.terminateAllOtherSessions
  terminateSession: api.terminateSession
  testCallBytes: api.testCallBytes
  testCallEmpty: api.testCallEmpty
  testCallString: api.testCallString
  testCallVectorInt: api.testCallVectorInt
  testCallVectorIntObject: api.testCallVectorIntObject
  testCallVectorString: api.testCallVectorString
  testCallVectorStringObject: api.testCallVectorStringObject
  testGetDifference: api.testGetDifference
  testNetwork: api.testNetwork
  testProxy: api.testProxy
  testReturnError: api.testReturnError
  testReturnErrorSync: api.testReturnErrorSync
  testSquareInt: api.testSquareInt
  testUseUpdate: api.testUseUpdate
  toggleChatDefaultDisableNotification: api.toggleChatDefaultDisableNotification
  toggleChatIsMarkedAsUnread: api.toggleChatIsMarkedAsUnread
  toggleChatIsPinned: api.toggleChatIsPinned
  toggleGroupCallEnabledStartNotification: api.toggleGroupCallEnabledStartNotification
  toggleGroupCallIsMyVideoEnabled: api.toggleGroupCallIsMyVideoEnabled
  toggleGroupCallIsMyVideoPaused: api.toggleGroupCallIsMyVideoPaused
  toggleGroupCallMuteNewParticipants: api.toggleGroupCallMuteNewParticipants
  toggleGroupCallParticipantIsHandRaised: api.toggleGroupCallParticipantIsHandRaised
  toggleGroupCallParticipantIsMuted: api.toggleGroupCallParticipantIsMuted
  toggleGroupCallScreenSharingIsPaused: api.toggleGroupCallScreenSharingIsPaused
  toggleMessageSenderIsBlocked: api.toggleMessageSenderIsBlocked
  toggleSupergroupIsAllHistoryAvailable: api.toggleSupergroupIsAllHistoryAvailable
  toggleSupergroupIsBroadcastGroup: api.toggleSupergroupIsBroadcastGroup
  toggleSupergroupSignMessages: api.toggleSupergroupSignMessages
  transferChatOwnership: api.transferChatOwnership
  unpinAllChatMessages: api.unpinAllChatMessages
  unpinChatMessage: api.unpinChatMessage
  upgradeBasicGroupChatToSupergroupChat: api.upgradeBasicGroupChatToSupergroupChat
  uploadFile: api.uploadFile
  uploadStickerFile: api.uploadStickerFile
  validateOrderInfo: api.validateOrderInfo
  viewMessages: api.viewMessages
  viewSponsoredMessage: api.viewSponsoredMessage
  viewTrendingStickerSets: api.viewTrendingStickerSets
  writeGeneratedFilePart: api.writeGeneratedFilePart
}
