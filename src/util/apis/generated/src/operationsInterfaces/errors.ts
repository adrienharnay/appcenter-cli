/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ErrorsListSessionLogsOptionalParams,
  ErrorsListSessionLogsResponse,
  ErrorsErrorAttachmentTextOptionalParams,
  ErrorsErrorAttachmentTextResponse,
  ErrorsErrorAttachmentLocationOptionalParams,
  ErrorsErrorAttachmentLocationResponse,
  ErrorsErrorAttachmentsOptionalParams,
  ErrorsErrorAttachmentsResponse,
  ErrorsErrorSearchOptionalParams,
  ErrorsErrorSearchResponse,
  PutContentSchemaRetentionInDays,
  ErrorsPutRetentionSettingsOptionalParams,
  ErrorsPutRetentionSettingsResponse,
  ErrorsGetRetentionSettingsOptionalParams,
  ErrorsGetRetentionSettingsResponse,
  ErrorsErrorFreeDevicePercentagesOptionalParams,
  ErrorsErrorFreeDevicePercentagesResponse,
  ErrorsGroupErrorStackTraceOptionalParams,
  ErrorsGroupErrorStackTraceResponse,
  ErrorsGroupOperatingSystemCountsOptionalParams,
  ErrorsGroupOperatingSystemCountsResponse,
  ErrorsGroupModelCountsOptionalParams,
  ErrorsGroupModelCountsResponse,
  ErrorsErrorStackTraceOptionalParams,
  ErrorsErrorStackTraceResponse,
  ErrorsErrorLocationOptionalParams,
  ErrorsErrorLocationResponse,
  ErrorsErrorDownloadOptionalParams,
  ErrorsErrorDownloadResponse,
  ErrorsGetErrorDetailsOptionalParams,
  ErrorsGetErrorDetailsResponse,
  ErrorsDeleteErrorOptionalParams,
  ErrorsDeleteErrorResponse,
  ErrorsLatestErrorDetailsOptionalParams,
  ErrorsLatestErrorDetailsResponse,
  ErrorsListForGroupOptionalParams,
  ErrorsListForGroupResponse,
  ErrorsGroupErrorFreeDevicePercentagesOptionalParams,
  ErrorsGroupErrorFreeDevicePercentagesResponse,
  ErrorsGroupCountsPerDayOptionalParams,
  ErrorsGroupCountsPerDayResponse,
  ErrorsGroupDetailsOptionalParams,
  ErrorsGroupDetailsResponse,
  PatchContentSchemaState,
  ErrorsUpdateStateOptionalParams,
  ErrorsUpdateStateResponse,
  ErrorsErrorGroupsSearchOptionalParams,
  ErrorsErrorGroupsSearchResponse,
  ErrorsGroupListOptionalParams,
  ErrorsGroupListResponse,
  ErrorsCountsPerDayOptionalParams,
  ErrorsCountsPerDayResponse,
  ErrorsAvailableVersionsOptionalParams,
  ErrorsAvailableVersionsResponse,
  ErrorsAppBuildsListOptionalParams,
  ErrorsAppBuildsListResponse
} from "../models";

/** Interface representing a Errors. */
export interface Errors {
  /**
   * Get session logs by error ID
   * @param errorId The id of the error
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  listSessionLogs(
    errorId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsListSessionLogsOptionalParams
  ): Promise<ErrorsListSessionLogsResponse>;
  /**
   * Error attachment text.
   * @param errorId The id of the error
   * @param attachmentId Error attachment id.
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  errorAttachmentText(
    errorId: string,
    attachmentId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsErrorAttachmentTextOptionalParams
  ): Promise<ErrorsErrorAttachmentTextResponse>;
  /**
   * Error attachment location.
   * @param errorId The id of the error
   * @param attachmentId Error attachment id.
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  errorAttachmentLocation(
    errorId: string,
    attachmentId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsErrorAttachmentLocationOptionalParams
  ): Promise<ErrorsErrorAttachmentLocationResponse>;
  /**
   * List error attachments.
   * @param errorId The id of the error
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  errorAttachments(
    errorId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsErrorAttachmentsOptionalParams
  ): Promise<ErrorsErrorAttachmentsResponse>;
  /**
   * Errors list based on search parameters
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  errorSearch(
    ownerName: string,
    appName: string,
    options?: ErrorsErrorSearchOptionalParams
  ): Promise<ErrorsErrorSearchResponse>;
  /**
   * Creates and updates the retention settings in days
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param retentionInDays
   * @param options The options parameters.
   */
  putRetentionSettings(
    ownerName: string,
    appName: string,
    retentionInDays: PutContentSchemaRetentionInDays,
    options?: ErrorsPutRetentionSettingsOptionalParams
  ): Promise<ErrorsPutRetentionSettingsResponse>;
  /**
   * gets the retention settings in days
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getRetentionSettings(
    ownerName: string,
    appName: string,
    options?: ErrorsGetRetentionSettingsOptionalParams
  ): Promise<ErrorsGetRetentionSettingsResponse>;
  /**
   * Percentage of error-free devices by day in the time range based on the selected versions. If
   * SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash
   * devices is greater than active devices
   * @param start Start date time in data in ISO 8601 date time format
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  errorFreeDevicePercentages(
    start: Date,
    ownerName: string,
    appName: string,
    options?: ErrorsErrorFreeDevicePercentagesOptionalParams
  ): Promise<ErrorsErrorFreeDevicePercentagesResponse>;
  /**
   * Gets the stack trace for the error group.
   * @param errorGroupId The id of the error group
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  groupErrorStackTrace(
    errorGroupId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsGroupErrorStackTraceOptionalParams
  ): Promise<ErrorsGroupErrorStackTraceResponse>;
  /**
   * Top OSes of the selected error group.
   * @param errorGroupId The id of the error group
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  groupOperatingSystemCounts(
    errorGroupId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsGroupOperatingSystemCountsOptionalParams
  ): Promise<ErrorsGroupOperatingSystemCountsResponse>;
  /**
   * Top models of the selected error group.
   * @param errorGroupId The id of the error group
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  groupModelCounts(
    errorGroupId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsGroupModelCountsOptionalParams
  ): Promise<ErrorsGroupModelCountsResponse>;
  /**
   * Error Stacktrace details.
   * @param errorGroupId The id of the error group
   * @param errorId The id of the error
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  errorStackTrace(
    errorGroupId: string,
    errorId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsErrorStackTraceOptionalParams
  ): Promise<ErrorsErrorStackTraceResponse>;
  /**
   * Error location.
   * @param errorGroupId The id of the error group
   * @param errorId The id of the error
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  errorLocation(
    errorGroupId: string,
    errorId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsErrorLocationOptionalParams
  ): Promise<ErrorsErrorLocationResponse>;
  /**
   * Download details for a specific error.
   * @param errorGroupId The id of the error group
   * @param errorId The id of the error
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  errorDownload(
    errorGroupId: string,
    errorId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsErrorDownloadOptionalParams
  ): Promise<ErrorsErrorDownloadResponse>;
  /**
   * Error details.
   * @param errorGroupId The id of the error group
   * @param errorId The id of the error
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getErrorDetails(
    errorGroupId: string,
    errorId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsGetErrorDetailsOptionalParams
  ): Promise<ErrorsGetErrorDetailsResponse>;
  /**
   * Delete a specific error and related attachments and blobs for an app. Searchable data will not be
   * deleted immediately and may take up to 30 days.
   * @param errorGroupId The id of the error group
   * @param errorId The id of the error
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  deleteError(
    errorGroupId: string,
    errorId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsDeleteErrorOptionalParams
  ): Promise<ErrorsDeleteErrorResponse>;
  /**
   * Latest error details.
   * @param errorGroupId The id of the error group
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  latestErrorDetails(
    errorGroupId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsLatestErrorDetailsOptionalParams
  ): Promise<ErrorsLatestErrorDetailsResponse>;
  /**
   * Get all errors for group
   * @param errorGroupId The id of the error group
   * @param start Start date time in data in ISO 8601 date time format
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  listForGroup(
    errorGroupId: string,
    start: Date,
    ownerName: string,
    appName: string,
    options?: ErrorsListForGroupOptionalParams
  ): Promise<ErrorsListForGroupResponse>;
  /**
   * Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is
   * greater than active devices
   * @param errorGroupId The id of the error group
   * @param start Start date time in data in ISO 8601 date time format
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  groupErrorFreeDevicePercentages(
    errorGroupId: string,
    start: Date,
    ownerName: string,
    appName: string,
    options?: ErrorsGroupErrorFreeDevicePercentagesOptionalParams
  ): Promise<ErrorsGroupErrorFreeDevicePercentagesResponse>;
  /**
   * Count of errors by day in the time range of the selected error group with selected version
   * @param errorGroupId The id of the error group
   * @param start Start date time in data in ISO 8601 date time format
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  groupCountsPerDay(
    errorGroupId: string,
    start: Date,
    ownerName: string,
    appName: string,
    options?: ErrorsGroupCountsPerDayOptionalParams
  ): Promise<ErrorsGroupCountsPerDayResponse>;
  /**
   * Error group details
   * @param errorGroupId The id of the error group
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  groupDetails(
    errorGroupId: string,
    ownerName: string,
    appName: string,
    options?: ErrorsGroupDetailsOptionalParams
  ): Promise<ErrorsGroupDetailsResponse>;
  /**
   * Update error group state
   * @param errorGroupId The id of the error group
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param state
   * @param options The options parameters.
   */
  updateState(
    errorGroupId: string,
    ownerName: string,
    appName: string,
    state: PatchContentSchemaState,
    options?: ErrorsUpdateStateOptionalParams
  ): Promise<ErrorsUpdateStateResponse>;
  /**
   * Error groups list based on search parameters
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  errorGroupsSearch(
    ownerName: string,
    appName: string,
    options?: ErrorsErrorGroupsSearchOptionalParams
  ): Promise<ErrorsErrorGroupsSearchResponse>;
  /**
   * List of error groups
   * @param start Start date time in data in ISO 8601 date time format
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  groupList(
    start: Date,
    ownerName: string,
    appName: string,
    options?: ErrorsGroupListOptionalParams
  ): Promise<ErrorsGroupListResponse>;
  /**
   * Count of crashes or errors by day in the time range based the selected versions. If
   * SingleErrorTypeParameter is not provided, defaults to handlederror.
   * @param start Start date time in data in ISO 8601 date time format
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  countsPerDay(
    start: Date,
    ownerName: string,
    appName: string,
    options?: ErrorsCountsPerDayOptionalParams
  ): Promise<ErrorsCountsPerDayResponse>;
  /**
   * Get all available versions in the time range.
   * @param start Start date time in data in ISO 8601 date time format
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  availableVersions(
    start: Date,
    ownerName: string,
    appName: string,
    options?: ErrorsAvailableVersionsOptionalParams
  ): Promise<ErrorsAvailableVersionsResponse>;
  /**
   * List of app builds
   * @param version test
   * @param start Start date time in data in ISO 8601 date time format
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  appBuildsList(
    version: string,
    start: Date,
    ownerName: string,
    appName: string,
    options?: ErrorsAppBuildsListOptionalParams
  ): Promise<ErrorsAppBuildsListResponse>;
}
