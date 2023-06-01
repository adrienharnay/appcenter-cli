/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Notifications } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppCenterClient } from "../appCenterClient";
import {
  NotificationsGetUserEmailSettingsOptionalParams,
  NotificationsGetUserEmailSettingsResponse,
  NotificationsGetAppEmailSettingsOptionalParams,
  NotificationsGetAppEmailSettingsResponse
} from "../models";

/** Class containing Notifications operations. */
export class NotificationsImpl implements Notifications {
  private readonly client: AppCenterClient;

  /**
   * Initialize a new instance of the class Notifications class.
   * @param client Reference to the service client
   */
  constructor(client: AppCenterClient) {
    this.client = client;
  }

  /**
   * Get Default email notification settings for the user
   * @param options The options parameters.
   */
  getUserEmailSettings(
    options?: NotificationsGetUserEmailSettingsOptionalParams
  ): Promise<NotificationsGetUserEmailSettingsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUserEmailSettingsOperationSpec
    );
  }

  /**
   * Get Email notification settings of user for a particular app
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  getAppEmailSettings(
    ownerName: string,
    appName: string,
    options?: NotificationsGetAppEmailSettingsOptionalParams
  ): Promise<NotificationsGetAppEmailSettingsResponse> {
    return this.client.sendOperationRequest(
      { ownerName, appName, options },
      getAppEmailSettingsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getUserEmailSettingsOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/user/notifications/emailSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1GbpowzV01UserNotificationsEmailsettingsGetResponses200ContentApplicationJsonSchema
    },
    default: {
      bodyMapper:
        Mappers.Paths3OiijqV01UserNotificationsEmailsettingsGetResponsesDefaultContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getAppEmailSettingsOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/notifications/emailSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths19Z9V3IV01AppsOwnerNameAppNameNotificationsEmailsettingsGetResponses200ContentApplicationJsonSchema
    },
    default: {
      bodyMapper:
        Mappers.Paths1Jg75I3V01AppsOwnerNameAppNameNotificationsEmailsettingsGetResponsesDefaultContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
  headerParameters: [Parameters.accept],
  serializer
};
