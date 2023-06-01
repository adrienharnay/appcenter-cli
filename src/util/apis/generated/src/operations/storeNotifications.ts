/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { StoreNotifications } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppCenterClient } from "../appCenterClient";
import {
  StoreNotificationsGetNotificationByAppIdOptionalParams,
  StoreNotificationsGetNotificationByAppIdResponse
} from "../models";

/** Class containing StoreNotifications operations. */
export class StoreNotificationsImpl implements StoreNotifications {
  private readonly client: AppCenterClient;

  /**
   * Initialize a new instance of the class StoreNotifications class.
   * @param client Reference to the service client
   */
  constructor(client: AppCenterClient) {
    this.client = client;
  }

  /**
   * Application specific store service status
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getNotificationByAppId(
    ownerName: string,
    appName: string,
    options?: StoreNotificationsGetNotificationByAppIdOptionalParams
  ): Promise<StoreNotificationsGetNotificationByAppIdResponse> {
    return this.client.sendOperationRequest(
      { ownerName, appName, options },
      getNotificationByAppIdOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNotificationByAppIdOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/store_service_status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths18FdbxcV01AppsOwnerNameAppNameStoreServiceStatusGetResponses200ContentApplicationJsonSchema
    },
    default: {
      bodyMapper:
        Mappers.Paths1Yn7B37V01AppsOwnerNameAppNameStoreServiceStatusGetResponsesDefaultContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
  headerParameters: [Parameters.accept],
  serializer
};
