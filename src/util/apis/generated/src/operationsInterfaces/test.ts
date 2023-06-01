/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  TestGetDeviceSetOfUserOptionalParams,
  TestGetDeviceSetOfUserResponse,
  TestUpdateDeviceSetOfUserOptionalParams,
  TestUpdateDeviceSetOfUserResponse,
  TestDeleteDeviceSetOfUserOptionalParams,
  TestListDeviceSetsOfUserOptionalParams,
  TestListDeviceSetsOfUserResponse,
  TestCreateDeviceSetOfUserOptionalParams,
  TestCreateDeviceSetOfUserResponse,
  TestGetAllTestRunsForSeriesOptionalParams,
  TestGetAllTestRunsForSeriesResponse,
  TestDeleteTestSeriesOptionalParams,
  TestPatchTestSeriesOptionalParams,
  TestPatchTestSeriesResponse,
  TestGetAllTestSeriesOptionalParams,
  TestGetAllTestSeriesResponse,
  TestCreateTestSeriesOptionalParams,
  TestCreateTestSeriesResponse,
  TestStopTestRunOptionalParams,
  TestStopTestRunResponse,
  TestGetTestRunStateOptionalParams,
  TestGetTestRunStateResponse,
  TestCloudStartTestRunOptions,
  TestStartTestRunOptionalParams,
  TestStartTestRunResponse,
  TestGetTestReportOptionalParams,
  TestGetTestReportResponse,
  PostContentSchemaItem,
  TestUploadHashesBatchOptionalParams,
  TestUploadHashesBatchResponse,
  TestCloudFileHash,
  TestUploadHashOptionalParams,
  TestUploadHashResponse,
  TestStartUploadingFileOptionalParams,
  TestStartUploadingFileResponse,
  TestGetTestRunOptionalParams,
  TestGetTestRunResponse,
  TestArchiveTestRunOptionalParams,
  TestArchiveTestRunResponse,
  TestGetTestRunsOptionalParams,
  TestGetTestRunsResponse,
  TestCreateTestRunOptionalParams,
  TestCreateTestRunResponse,
  TestGdprExportTestRunOptionalParams,
  TestGdprExportTestRunResponse,
  TestGdprExportPipelineTestOptionalParams,
  TestGdprExportPipelineTestResponse,
  TestGdprExportHashFileOptionalParams,
  TestGdprExportHashFileResponse,
  TestGdprExportFileSetFileOptionalParams,
  TestGdprExportFileSetFileResponse,
  TestGdprExportAppOptionalParams,
  TestGdprExportAppResponse,
  TestGdprExportAppsOptionalParams,
  TestGdprExportAppsResponse,
  TestGetSubscriptionsOptionalParams,
  TestGetSubscriptionsResponse,
  TestCreateSubscriptionOptionalParams,
  TestCreateSubscriptionResponse,
  TestGetDeviceSetOfOwnerOptionalParams,
  TestGetDeviceSetOfOwnerResponse,
  TestUpdateDeviceSetOfOwnerOptionalParams,
  TestUpdateDeviceSetOfOwnerResponse,
  TestDeleteDeviceSetOfOwnerOptionalParams,
  TestListDeviceSetsOfOwnerOptionalParams,
  TestListDeviceSetsOfOwnerResponse,
  TestCreateDeviceSetOfOwnerOptionalParams,
  TestCreateDeviceSetOfOwnerResponse,
  TestCreateDeviceSelectionOptionalParams,
  TestCreateDeviceSelectionResponse,
  TestGetDeviceConfigurationsOptionalParams,
  TestGetDeviceConfigurationsResponse,
  TestGdprExportFeatureFlagOptionalParams,
  TestGdprExportFeatureFlagResponse,
  TestGdprExportAccountOptionalParams,
  TestGdprExportAccountResponse,
  TestGdprExportAccountsOptionalParams,
  TestGdprExportAccountsResponse
} from "../models";

/** Interface representing a Test. */
export interface Test {
  /**
   * Gets a device set belonging to the user
   * @param id The UUID of the device set
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getDeviceSetOfUser(
    id: string,
    ownerName: string,
    appName: string,
    options?: TestGetDeviceSetOfUserOptionalParams
  ): Promise<TestGetDeviceSetOfUserResponse>;
  /**
   * Updates a device set belonging to the user
   * @param id The UUID of the device set
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param devices List of device IDs
   * @param name The name of the device set
   * @param options The options parameters.
   */
  updateDeviceSetOfUser(
    id: string,
    ownerName: string,
    appName: string,
    devices: string[],
    name: string,
    options?: TestUpdateDeviceSetOfUserOptionalParams
  ): Promise<TestUpdateDeviceSetOfUserResponse>;
  /**
   * Deletes a device set belonging to the user
   * @param id The UUID of the device set
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  deleteDeviceSetOfUser(
    id: string,
    ownerName: string,
    appName: string,
    options?: TestDeleteDeviceSetOfUserOptionalParams
  ): Promise<void>;
  /**
   * Lists device sets belonging to the user
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  listDeviceSetsOfUser(
    ownerName: string,
    appName: string,
    options?: TestListDeviceSetsOfUserOptionalParams
  ): Promise<TestListDeviceSetsOfUserResponse>;
  /**
   * Creates a device set belonging to the user
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param devices List of device IDs
   * @param name The name of the device set
   * @param options The options parameters.
   */
  createDeviceSetOfUser(
    ownerName: string,
    appName: string,
    devices: string[],
    name: string,
    options?: TestCreateDeviceSetOfUserOptionalParams
  ): Promise<TestCreateDeviceSetOfUserResponse>;
  /**
   * Returns list of all test runs for a given test series
   * @param testSeriesSlug The slug of the test series
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getAllTestRunsForSeries(
    testSeriesSlug: string,
    ownerName: string,
    appName: string,
    options?: TestGetAllTestRunsForSeriesOptionalParams
  ): Promise<TestGetAllTestRunsForSeriesResponse>;
  /**
   * Deletes a single test series
   * @param testSeriesSlug The slug of the test series
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  deleteTestSeries(
    testSeriesSlug: string,
    ownerName: string,
    appName: string,
    options?: TestDeleteTestSeriesOptionalParams
  ): Promise<void>;
  /**
   * Updates name and slug of a test series
   * @param testSeriesSlug The slug of the test series
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param name Name of the new test series
   * @param options The options parameters.
   */
  patchTestSeries(
    testSeriesSlug: string,
    ownerName: string,
    appName: string,
    name: string,
    options?: TestPatchTestSeriesOptionalParams
  ): Promise<TestPatchTestSeriesResponse>;
  /**
   * Returns list of all test series for an application
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getAllTestSeries(
    ownerName: string,
    appName: string,
    options?: TestGetAllTestSeriesOptionalParams
  ): Promise<TestGetAllTestSeriesResponse>;
  /**
   * Creates new test series for an application
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param name Name of the new test series
   * @param options The options parameters.
   */
  createTestSeries(
    ownerName: string,
    appName: string,
    name: string,
    options?: TestCreateTestSeriesOptionalParams
  ): Promise<TestCreateTestSeriesResponse>;
  /**
   * Stop a test run execution
   * @param testRunId The ID of the test run to be stopped
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  stopTestRun(
    testRunId: string,
    ownerName: string,
    appName: string,
    options?: TestStopTestRunOptionalParams
  ): Promise<TestStopTestRunResponse>;
  /**
   * Gets state of the test run
   * @param testRunId The ID of the test run
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getTestRunState(
    testRunId: string,
    ownerName: string,
    appName: string,
    options?: TestGetTestRunStateOptionalParams
  ): Promise<TestGetTestRunStateResponse>;
  /**
   * Starts test run
   * @param testRunId The ID of the test run
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param startOptions Option required to start the test run
   * @param options The options parameters.
   */
  startTestRun(
    testRunId: string,
    ownerName: string,
    appName: string,
    startOptions: TestCloudStartTestRunOptions,
    options?: TestStartTestRunOptionalParams
  ): Promise<TestStartTestRunResponse>;
  /**
   * Returns a single test report
   * @param testRunId The ID of the test run
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getTestReport(
    testRunId: string,
    ownerName: string,
    appName: string,
    options?: TestGetTestReportOptionalParams
  ): Promise<TestGetTestReportResponse>;
  /**
   * Adds file with the given hash to a test run
   * @param testRunId The ID of the test run
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param fileInfo File hash information
   * @param options The options parameters.
   */
  uploadHashesBatch(
    testRunId: string,
    ownerName: string,
    appName: string,
    fileInfo: PostContentSchemaItem[],
    options?: TestUploadHashesBatchOptionalParams
  ): Promise<TestUploadHashesBatchResponse>;
  /**
   * Adds file with the given hash to a test run
   * @param testRunId The ID of the test run
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param fileInfo File hash information
   * @param options The options parameters.
   */
  uploadHash(
    testRunId: string,
    ownerName: string,
    appName: string,
    fileInfo: TestCloudFileHash,
    options?: TestUploadHashOptionalParams
  ): Promise<TestUploadHashResponse>;
  /**
   * Uploads file for a test run
   * @param testRunId The ID of the test run
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  startUploadingFile(
    testRunId: string,
    ownerName: string,
    appName: string,
    options?: TestStartUploadingFileOptionalParams
  ): Promise<TestStartUploadingFileResponse>;
  /**
   * Returns a single test runs
   * @param testRunId The ID of the test run
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getTestRun(
    testRunId: string,
    ownerName: string,
    appName: string,
    options?: TestGetTestRunOptionalParams
  ): Promise<TestGetTestRunResponse>;
  /**
   * Logically deletes a test run
   * @param testRunId The ID of the test run
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  archiveTestRun(
    testRunId: string,
    ownerName: string,
    appName: string,
    options?: TestArchiveTestRunOptionalParams
  ): Promise<TestArchiveTestRunResponse>;
  /**
   * Returns a list of test runs
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getTestRuns(
    ownerName: string,
    appName: string,
    options?: TestGetTestRunsOptionalParams
  ): Promise<TestGetTestRunsResponse>;
  /**
   * Creates a new test run
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  createTestRun(
    ownerName: string,
    appName: string,
    options?: TestCreateTestRunOptionalParams
  ): Promise<TestCreateTestRunResponse>;
  /**
   * Lists test run data
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  gdprExportTestRun(
    ownerName: string,
    appName: string,
    options?: TestGdprExportTestRunOptionalParams
  ): Promise<TestGdprExportTestRunResponse>;
  /**
   * Lists pipeline test data
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  gdprExportPipelineTest(
    ownerName: string,
    appName: string,
    options?: TestGdprExportPipelineTestOptionalParams
  ): Promise<TestGdprExportPipelineTestResponse>;
  /**
   * Lists hash file data
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  gdprExportHashFile(
    ownerName: string,
    appName: string,
    options?: TestGdprExportHashFileOptionalParams
  ): Promise<TestGdprExportHashFileResponse>;
  /**
   * Lists file set file data
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  gdprExportFileSetFile(
    ownerName: string,
    appName: string,
    options?: TestGdprExportFileSetFileOptionalParams
  ): Promise<TestGdprExportFileSetFileResponse>;
  /**
   * Lists app data
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  gdprExportApp(
    ownerName: string,
    appName: string,
    options?: TestGdprExportAppOptionalParams
  ): Promise<TestGdprExportAppResponse>;
  /**
   * Lists all the endpoints available for Test apps data
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  gdprExportApps(
    ownerName: string,
    appName: string,
    options?: TestGdprExportAppsOptionalParams
  ): Promise<TestGdprExportAppsResponse>;
  /**
   * Get information about the currently active subscriptions, if any
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getSubscriptions(
    ownerName: string,
    appName: string,
    options?: TestGetSubscriptionsOptionalParams
  ): Promise<TestGetSubscriptionsResponse>;
  /**
   * Accept a free trial subscription
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  createSubscription(
    ownerName: string,
    appName: string,
    options?: TestCreateSubscriptionOptionalParams
  ): Promise<TestCreateSubscriptionResponse>;
  /**
   * Gets a device set belonging to the owner
   * @param id The UUID of the device set
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getDeviceSetOfOwner(
    id: string,
    ownerName: string,
    appName: string,
    options?: TestGetDeviceSetOfOwnerOptionalParams
  ): Promise<TestGetDeviceSetOfOwnerResponse>;
  /**
   * Updates a device set belonging to the owner
   * @param id The UUID of the device set
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param devices List of device IDs
   * @param name The name of the device set
   * @param options The options parameters.
   */
  updateDeviceSetOfOwner(
    id: string,
    ownerName: string,
    appName: string,
    devices: string[],
    name: string,
    options?: TestUpdateDeviceSetOfOwnerOptionalParams
  ): Promise<TestUpdateDeviceSetOfOwnerResponse>;
  /**
   * Deletes a device set belonging to the owner
   * @param id The UUID of the device set
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  deleteDeviceSetOfOwner(
    id: string,
    ownerName: string,
    appName: string,
    options?: TestDeleteDeviceSetOfOwnerOptionalParams
  ): Promise<void>;
  /**
   * Lists device sets belonging to the owner
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  listDeviceSetsOfOwner(
    ownerName: string,
    appName: string,
    options?: TestListDeviceSetsOfOwnerOptionalParams
  ): Promise<TestListDeviceSetsOfOwnerResponse>;
  /**
   * Creates a device set belonging to the owner
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param devices List of device IDs
   * @param name The name of the device set
   * @param options The options parameters.
   */
  createDeviceSetOfOwner(
    ownerName: string,
    appName: string,
    devices: string[],
    name: string,
    options?: TestCreateDeviceSetOfOwnerOptionalParams
  ): Promise<TestCreateDeviceSetOfOwnerResponse>;
  /**
   * Creates a short ID for a list of devices
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param devices Array of String
   * @param options The options parameters.
   */
  createDeviceSelection(
    ownerName: string,
    appName: string,
    devices: string[],
    options?: TestCreateDeviceSelectionOptionalParams
  ): Promise<TestCreateDeviceSelectionResponse>;
  /**
   * Returns a list of available devices
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getDeviceConfigurations(
    ownerName: string,
    appName: string,
    options?: TestGetDeviceConfigurationsOptionalParams
  ): Promise<TestGetDeviceConfigurationsResponse>;
  /**
   * Lists feature flag data
   * @param options The options parameters.
   */
  gdprExportFeatureFlag(
    options?: TestGdprExportFeatureFlagOptionalParams
  ): Promise<TestGdprExportFeatureFlagResponse>;
  /**
   * Lists account data
   * @param options The options parameters.
   */
  gdprExportAccount(
    options?: TestGdprExportAccountOptionalParams
  ): Promise<TestGdprExportAccountResponse>;
  /**
   * Lists all the endpoints available for Test accounts data
   * @param options The options parameters.
   */
  gdprExportAccounts(
    options?: TestGdprExportAccountsOptionalParams
  ): Promise<TestGdprExportAccountsResponse>;
}
