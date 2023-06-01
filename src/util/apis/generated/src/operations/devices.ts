/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Devices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppCenterClient } from "../appCenterClient";
import {
  Paths1Jpgih6V01UsersUserIdDevicesRegisterPostRequestbodyContentApplicationJsonSchema,
  DevicesRegisterUserForDeviceOptionalParams,
  DevicesRegisterUserForDeviceResponse,
  DevicesDeviceDetailsOptionalParams,
  DevicesDeviceDetailsResponse,
  DevicesRemoveUserDeviceOptionalParams,
  DevicesRemoveUserDeviceResponse,
  DevicesUserDevicesListOptionalParams,
  DevicesUserDevicesListResponse,
  DevicesGetReleaseUpdateDevicesStatusOptionalParams,
  DevicesGetReleaseUpdateDevicesStatusResponse,
  DevicesListCsvFormatOptionalParams,
  DevicesListCsvFormatResponse,
  DevicesListOptionalParams,
  DevicesListResponse,
  DevicesBlockLogsOptionalParams,
  DevicesBlockLogsResponse
} from "../models";

/** Class containing Devices operations. */
export class DevicesImpl implements Devices {
  private readonly client: AppCenterClient;

  /**
   * Initialize a new instance of the class Devices class.
   * @param client Reference to the service client
   */
  constructor(client: AppCenterClient) {
    this.client = client;
  }

  /**
   * Registers a user for an existing device
   * @param userId The ID of the user
   * @param body The device info.
   * @param options The options parameters.
   */
  registerUserForDevice(
    userId: string,
    body: Paths1Jpgih6V01UsersUserIdDevicesRegisterPostRequestbodyContentApplicationJsonSchema,
    options?: DevicesRegisterUserForDeviceOptionalParams
  ): Promise<DevicesRegisterUserForDeviceResponse> {
    return this.client.sendOperationRequest(
      { userId, body, options },
      registerUserForDeviceOperationSpec
    );
  }

  /**
   * Returns the device details.
   * @param deviceUdid The UDID of the device
   * @param options The options parameters.
   */
  deviceDetails(
    deviceUdid: string,
    options?: DevicesDeviceDetailsOptionalParams
  ): Promise<DevicesDeviceDetailsResponse> {
    return this.client.sendOperationRequest(
      { deviceUdid, options },
      deviceDetailsOperationSpec
    );
  }

  /**
   * Removes an existing device from a user
   * @param deviceUdid The UDID of the device
   * @param options The options parameters.
   */
  removeUserDevice(
    deviceUdid: string,
    options?: DevicesRemoveUserDeviceOptionalParams
  ): Promise<DevicesRemoveUserDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceUdid, options },
      removeUserDeviceOperationSpec
    );
  }

  /**
   * Returns all devices associated with the given user.
   * @param options The options parameters.
   */
  userDevicesList(
    options?: DevicesUserDevicesListOptionalParams
  ): Promise<DevicesUserDevicesListResponse> {
    return this.client.sendOperationRequest(
      { options },
      userDevicesListOperationSpec
    );
  }

  /**
   * Returns the resign status to the caller
   * @param releaseId The ID of the release.
   * @param resignId The ID of the resign operation.
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getReleaseUpdateDevicesStatus(
    releaseId: string,
    resignId: string,
    ownerName: string,
    appName: string,
    options?: DevicesGetReleaseUpdateDevicesStatusOptionalParams
  ): Promise<DevicesGetReleaseUpdateDevicesStatusResponse> {
    return this.client.sendOperationRequest(
      { releaseId, resignId, ownerName, appName, options },
      getReleaseUpdateDevicesStatusOperationSpec
    );
  }

  /**
   * Returns all devices associated with the given distribution group.
   * @param distributionGroupName The name of the distribution group.
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  listCsvFormat(
    distributionGroupName: string,
    ownerName: string,
    appName: string,
    options?: DevicesListCsvFormatOptionalParams
  ): Promise<DevicesListCsvFormatResponse> {
    return this.client.sendOperationRequest(
      { distributionGroupName, ownerName, appName, options },
      listCsvFormatOperationSpec
    );
  }

  /**
   * Returns all devices associated with the given distribution group
   * @param distributionGroupName The name of the distribution group.
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  list(
    distributionGroupName: string,
    ownerName: string,
    appName: string,
    options?: DevicesListOptionalParams
  ): Promise<DevicesListResponse> {
    return this.client.sendOperationRequest(
      { distributionGroupName, ownerName, appName, options },
      listOperationSpec
    );
  }

  /**
   * **Warning, this operation is not reversible.**
   *
   *  A successful call to this API will permanently stop ingesting any logs received via SDK for the
   * given installation ID, and cannot be restored. We advise caution when using this API, it is designed
   * to permanently disable collection from a specific installation of the app on a device, usually
   * following the request from a user.
   *
   * @param installId The id of the device
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  blockLogs(
    installId: string,
    ownerName: string,
    appName: string,
    options?: DevicesBlockLogsOptionalParams
  ): Promise<DevicesBlockLogsResponse> {
    return this.client.sendOperationRequest(
      { installId, ownerName, appName, options },
      blockLogsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const registerUserForDeviceOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/users/{user_id}/devices/register",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths8WlmngV01UsersUserIdDevicesRegisterPostResponses200ContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.PathsCls8YvV01UsersUserIdDevicesRegisterPostResponses404ContentApplicationJsonSchema
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host, Parameters.userId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deviceDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/user/devices/{device_udid}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Cmt7BV01UserDevicesDeviceUdidGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper:
        Mappers.PathsZ51JvlV01UserDevicesDeviceUdidGetResponses400ContentApplicationJsonSchema
    },
    403: {
      bodyMapper:
        Mappers.Paths1Bbrb90V01UserDevicesDeviceUdidGetResponses403ContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.Paths1T6Akw2V01UserDevicesDeviceUdidGetResponses404ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.deviceUdid],
  headerParameters: [Parameters.accept],
  serializer
};
const removeUserDeviceOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/user/devices/{device_udid}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    403: {
      bodyMapper:
        Mappers.PathsHdlzv9V01UserDevicesDeviceUdidDeleteResponses403ContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.Paths8DvmvfV01UserDevicesDeviceUdidDeleteResponses404ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.deviceUdid],
  headerParameters: [Parameters.accept],
  serializer
};
const userDevicesListOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/user/devices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "PathsSu173DV01UserDevicesGetResponses200ContentApplicationJsonSchemaItems"
            }
          }
        }
      }
    },
    400: {
      bodyMapper:
        Mappers.PathsUflabiV01UserDevicesGetResponses400ContentApplicationJsonSchema
    },
    403: {
      bodyMapper:
        Mappers.PathsY65BgyV01UserDevicesGetResponses403ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getReleaseUpdateDevicesStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/update_devices/{resign_id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths13R6WlgV01AppsOwnerNameAppNameReleasesReleaseIdUpdateDevicesResignIdGetResponses200ContentApplicationJsonSchema
    },
    400: {
      bodyMapper:
        Mappers.Paths1O1G9I2V01AppsOwnerNameAppNameReleasesReleaseIdUpdateDevicesResignIdGetResponses400ContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.PathsRigtgjV01AppsOwnerNameAppNameReleasesReleaseIdUpdateDevicesResignIdGetResponses404ContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.includeProvisioningProfile],
  urlParameters: [
    Parameters.$host,
    Parameters.releaseId,
    Parameters.resignId,
    Parameters.ownerName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listCsvFormatOperationSpec: coreClient.OperationSpec = {
  path:
    "/v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/devices/download_devices_list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    400: {
      bodyMapper:
        Mappers.PathsPetbu0V01AppsOwnerNameAppNameDistributionGroupsDistributionGroupNameDevicesDownloadDevicesListGetResponses400ContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.Paths1Lf13O3V01AppsOwnerNameAppNameDistributionGroupsDistributionGroupNameDevicesDownloadDevicesListGetResponses404ContentApplicationJsonSchema
    },
    500: {
      bodyMapper:
        Mappers.Paths1LlermxV01AppsOwnerNameAppNameDistributionGroupsDistributionGroupNameDevicesDownloadDevicesListGetResponses500ContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.unprovisionedOnly, Parameters.udids],
  urlParameters: [
    Parameters.$host,
    Parameters.ownerName,
    Parameters.appName,
    Parameters.distributionGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/devices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "PathsTsc2V7V01AppsOwnerNameAppNameDistributionGroupsDistributionGroupNameDevicesGetResponses200ContentApplicationJsonSchemaItems"
            }
          }
        }
      }
    },
    400: {
      bodyMapper:
        Mappers.Paths12Hwzd4V01AppsOwnerNameAppNameDistributionGroupsDistributionGroupNameDevicesGetResponses400ContentApplicationJsonSchema
    },
    404: {
      bodyMapper:
        Mappers.PathsWkyzigV01AppsOwnerNameAppNameDistributionGroupsDistributionGroupNameDevicesGetResponses404ContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.releaseId1],
  urlParameters: [
    Parameters.$host,
    Parameters.ownerName,
    Parameters.appName,
    Parameters.distributionGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const blockLogsOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/devices/block_logs/{install_id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.ownerName,
    Parameters.appName,
    Parameters.installId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
