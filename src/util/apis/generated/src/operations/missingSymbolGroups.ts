/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MissingSymbolGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppCenterClient } from "../appCenterClient";
import {
  MissingSymbolGroupsInfoOptionalParams,
  MissingSymbolGroupsInfoResponse,
  MissingSymbolGroupsGetOptionalParams,
  MissingSymbolGroupsGetResponse,
  MissingSymbolGroupsListOptionalParams,
  MissingSymbolGroupsListResponse
} from "../models";

/** Class containing MissingSymbolGroups operations. */
export class MissingSymbolGroupsImpl implements MissingSymbolGroups {
  private readonly client: AppCenterClient;

  /**
   * Initialize a new instance of the class MissingSymbolGroups class.
   * @param client Reference to the service client
   */
  constructor(client: AppCenterClient) {
    this.client = client;
  }

  /**
   * Gets application level statistics for all missing symbol groups
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  info(
    ownerName: string,
    appName: string,
    options?: MissingSymbolGroupsInfoOptionalParams
  ): Promise<MissingSymbolGroupsInfoResponse> {
    return this.client.sendOperationRequest(
      { ownerName, appName, options },
      infoOperationSpec
    );
  }

  /**
   * Gets missing symbol crash group by its id
   * @param symbolGroupId missing symbol crash group id
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  get(
    symbolGroupId: string,
    ownerName: string,
    appName: string,
    options?: MissingSymbolGroupsGetOptionalParams
  ): Promise<MissingSymbolGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { symbolGroupId, ownerName, appName, options },
      getOperationSpec
    );
  }

  /**
   * Gets top N (ordered by crash count) of crash groups by missing symbol
   * @param top top N elements
   * @param ownerName The name of the owner
   * @param appName The name of the application
   * @param options The options parameters.
   */
  list(
    top: number,
    ownerName: string,
    appName: string,
    options?: MissingSymbolGroupsListOptionalParams
  ): Promise<MissingSymbolGroupsListResponse> {
    return this.client.sendOperationRequest(
      { top, ownerName, appName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const infoOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/diagnostics/symbol_groups_info",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths11FvsglV01AppsOwnerNameAppNameDiagnosticsSymbolGroupsInfoGetResponses200ContentApplicationJsonSchema
    },
    default: {
      bodyMapper:
        Mappers.Paths1WfkyxuV01AppsOwnerNameAppNameDiagnosticsSymbolGroupsInfoGetResponsesDefaultContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/v0.1/apps/{owner_name}/{app_name}/diagnostics/symbol_groups/{symbol_group_id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths12L0F2LV01AppsOwnerNameAppNameDiagnosticsSymbolGroupsSymbolGroupIdGetResponses200ContentApplicationJsonSchema
    },
    default: {
      bodyMapper:
        Mappers.Paths4Cl255V01AppsOwnerNameAppNameDiagnosticsSymbolGroupsSymbolGroupIdGetResponsesDefaultContentApplicationJsonSchema
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.ownerName,
    Parameters.appName,
    Parameters.symbolGroupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/v0.1/apps/{owner_name}/{app_name}/diagnostics/symbol_groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsQn5ExjV01AppsOwnerNameAppNameDiagnosticsSymbolGroupsGetResponses200ContentApplicationJsonSchema
    },
    default: {
      bodyMapper:
        Mappers.Paths1ByvenaV01AppsOwnerNameAppNameDiagnosticsSymbolGroupsGetResponsesDefaultContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.filter, Parameters.top3],
  urlParameters: [Parameters.$host, Parameters.ownerName, Parameters.appName],
  headerParameters: [Parameters.accept],
  serializer
};
