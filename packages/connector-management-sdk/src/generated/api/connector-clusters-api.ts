/* tslint:disable */
/* eslint-disable */
/**
 * Connector Service Fleet Manager
 * Connector Service Fleet Manager is a Rest API to manage connectors.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AddonParameter } from '../model';
// @ts-ignore
import { ConnectorCluster } from '../model';
// @ts-ignore
import { ConnectorClusterList } from '../model';
// @ts-ignore
import { ConnectorClusterRequest } from '../model';
/**
 * ConnectorClustersApi - axios parameter creator
 * @export
 */
export const ConnectorClustersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new connector cluster
         * @summary Create a new connector cluster
         * @param {boolean} async Perform the action in an asynchronous manner
         * @param {ConnectorClusterRequest} connectorClusterRequest Connector cluster data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConnectorCluster: async (async: boolean, connectorClusterRequest: ConnectorClusterRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'async' is not null or undefined
            assertParamExists('createConnectorCluster', 'async', async)
            // verify required parameter 'connectorClusterRequest' is not null or undefined
            assertParamExists('createConnectorCluster', 'connectorClusterRequest', connectorClusterRequest)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_clusters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (async !== undefined) {
                localVarQueryParameter['async'] = async;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(connectorClusterRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a connector cluster
         * @summary Delete a connector cluster
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConnectorCluster: async (connectorClusterId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectorClusterId' is not null or undefined
            assertParamExists('deleteConnectorCluster', 'connectorClusterId', connectorClusterId)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_clusters/{connector_cluster_id}`
                .replace(`{${"connector_cluster_id"}}`, encodeURIComponent(String(connectorClusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a connector cluster
         * @summary Get a connector cluster
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectorCluster: async (connectorClusterId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectorClusterId' is not null or undefined
            assertParamExists('getConnectorCluster', 'connectorClusterId', connectorClusterId)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_clusters/{connector_cluster_id}`
                .replace(`{${"connector_cluster_id"}}`, encodeURIComponent(String(connectorClusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a connector cluster\'s addon parameters
         * @summary Get a connector cluster\'s addon parameters
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectorClusterAddonParameters: async (connectorClusterId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectorClusterId' is not null or undefined
            assertParamExists('getConnectorClusterAddonParameters', 'connectorClusterId', connectorClusterId)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_clusters/{connector_cluster_id}/addon_parameters`
                .replace(`{${"connector_cluster_id"}}`, encodeURIComponent(String(connectorClusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of connector clusters
         * @summary Returns a list of connector clusters
         * @param {string} [page] Page index
         * @param {string} [size] Number of items in each page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConnectorClusters: async (page?: string, size?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_clusters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * udpate a connector cluster
         * @summary udpate a connector cluster
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {ConnectorClusterRequest} connectorClusterRequest Data to updated connector with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConnectorClusterById: async (connectorClusterId: string, connectorClusterRequest: ConnectorClusterRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectorClusterId' is not null or undefined
            assertParamExists('updateConnectorClusterById', 'connectorClusterId', connectorClusterId)
            // verify required parameter 'connectorClusterRequest' is not null or undefined
            assertParamExists('updateConnectorClusterById', 'connectorClusterRequest', connectorClusterRequest)
            const localVarPath = `/api/connector_mgmt/v1/kafka_connector_clusters/{connector_cluster_id}`
                .replace(`{${"connector_cluster_id"}}`, encodeURIComponent(String(connectorClusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(connectorClusterRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConnectorClustersApi - functional programming interface
 * @export
 */
export const ConnectorClustersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConnectorClustersApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new connector cluster
         * @summary Create a new connector cluster
         * @param {boolean} async Perform the action in an asynchronous manner
         * @param {ConnectorClusterRequest} connectorClusterRequest Connector cluster data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createConnectorCluster(async: boolean, connectorClusterRequest: ConnectorClusterRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectorCluster>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createConnectorCluster(async, connectorClusterRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a connector cluster
         * @summary Delete a connector cluster
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteConnectorCluster(connectorClusterId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteConnectorCluster(connectorClusterId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a connector cluster
         * @summary Get a connector cluster
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConnectorCluster(connectorClusterId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectorCluster>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConnectorCluster(connectorClusterId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a connector cluster\'s addon parameters
         * @summary Get a connector cluster\'s addon parameters
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConnectorClusterAddonParameters(connectorClusterId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AddonParameter>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConnectorClusterAddonParameters(connectorClusterId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of connector clusters
         * @summary Returns a list of connector clusters
         * @param {string} [page] Page index
         * @param {string} [size] Number of items in each page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listConnectorClusters(page?: string, size?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectorClusterList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listConnectorClusters(page, size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * udpate a connector cluster
         * @summary udpate a connector cluster
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {ConnectorClusterRequest} connectorClusterRequest Data to updated connector with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConnectorClusterById(connectorClusterId: string, connectorClusterRequest: ConnectorClusterRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConnectorClusterById(connectorClusterId, connectorClusterRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConnectorClustersApi - factory interface
 * @export
 */
export const ConnectorClustersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConnectorClustersApiFp(configuration)
    return {
        /**
         * Create a new connector cluster
         * @summary Create a new connector cluster
         * @param {boolean} async Perform the action in an asynchronous manner
         * @param {ConnectorClusterRequest} connectorClusterRequest Connector cluster data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createConnectorCluster(async: boolean, connectorClusterRequest: ConnectorClusterRequest, options?: any): AxiosPromise<ConnectorCluster> {
            return localVarFp.createConnectorCluster(async, connectorClusterRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a connector cluster
         * @summary Delete a connector cluster
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteConnectorCluster(connectorClusterId: string, options?: any): AxiosPromise<Error> {
            return localVarFp.deleteConnectorCluster(connectorClusterId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a connector cluster
         * @summary Get a connector cluster
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectorCluster(connectorClusterId: string, options?: any): AxiosPromise<ConnectorCluster> {
            return localVarFp.getConnectorCluster(connectorClusterId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a connector cluster\'s addon parameters
         * @summary Get a connector cluster\'s addon parameters
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectorClusterAddonParameters(connectorClusterId: string, options?: any): AxiosPromise<Array<AddonParameter>> {
            return localVarFp.getConnectorClusterAddonParameters(connectorClusterId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of connector clusters
         * @summary Returns a list of connector clusters
         * @param {string} [page] Page index
         * @param {string} [size] Number of items in each page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConnectorClusters(page?: string, size?: string, options?: any): AxiosPromise<ConnectorClusterList> {
            return localVarFp.listConnectorClusters(page, size, options).then((request) => request(axios, basePath));
        },
        /**
         * udpate a connector cluster
         * @summary udpate a connector cluster
         * @param {string} connectorClusterId The id of the connector cluster
         * @param {ConnectorClusterRequest} connectorClusterRequest Data to updated connector with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConnectorClusterById(connectorClusterId: string, connectorClusterRequest: ConnectorClusterRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateConnectorClusterById(connectorClusterId, connectorClusterRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConnectorClustersApi - interface
 * @export
 * @interface ConnectorClustersApi
 */
export interface ConnectorClustersApiInterface {
    /**
     * Create a new connector cluster
     * @summary Create a new connector cluster
     * @param {boolean} async Perform the action in an asynchronous manner
     * @param {ConnectorClusterRequest} connectorClusterRequest Connector cluster data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApiInterface
     */
    createConnectorCluster(async: boolean, connectorClusterRequest: ConnectorClusterRequest, options?: any): AxiosPromise<ConnectorCluster>;

    /**
     * Delete a connector cluster
     * @summary Delete a connector cluster
     * @param {string} connectorClusterId The id of the connector cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApiInterface
     */
    deleteConnectorCluster(connectorClusterId: string, options?: any): AxiosPromise<Error>;

    /**
     * Get a connector cluster
     * @summary Get a connector cluster
     * @param {string} connectorClusterId The id of the connector cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApiInterface
     */
    getConnectorCluster(connectorClusterId: string, options?: any): AxiosPromise<ConnectorCluster>;

    /**
     * Get a connector cluster\'s addon parameters
     * @summary Get a connector cluster\'s addon parameters
     * @param {string} connectorClusterId The id of the connector cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApiInterface
     */
    getConnectorClusterAddonParameters(connectorClusterId: string, options?: any): AxiosPromise<Array<AddonParameter>>;

    /**
     * Returns a list of connector clusters
     * @summary Returns a list of connector clusters
     * @param {string} [page] Page index
     * @param {string} [size] Number of items in each page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApiInterface
     */
    listConnectorClusters(page?: string, size?: string, options?: any): AxiosPromise<ConnectorClusterList>;

    /**
     * udpate a connector cluster
     * @summary udpate a connector cluster
     * @param {string} connectorClusterId The id of the connector cluster
     * @param {ConnectorClusterRequest} connectorClusterRequest Data to updated connector with
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApiInterface
     */
    updateConnectorClusterById(connectorClusterId: string, connectorClusterRequest: ConnectorClusterRequest, options?: any): AxiosPromise<void>;

}

/**
 * ConnectorClustersApi - object-oriented interface
 * @export
 * @class ConnectorClustersApi
 * @extends {BaseAPI}
 */
export class ConnectorClustersApi extends BaseAPI implements ConnectorClustersApiInterface {
    /**
     * Create a new connector cluster
     * @summary Create a new connector cluster
     * @param {boolean} async Perform the action in an asynchronous manner
     * @param {ConnectorClusterRequest} connectorClusterRequest Connector cluster data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApi
     */
    public createConnectorCluster(async: boolean, connectorClusterRequest: ConnectorClusterRequest, options?: any) {
        return ConnectorClustersApiFp(this.configuration).createConnectorCluster(async, connectorClusterRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a connector cluster
     * @summary Delete a connector cluster
     * @param {string} connectorClusterId The id of the connector cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApi
     */
    public deleteConnectorCluster(connectorClusterId: string, options?: any) {
        return ConnectorClustersApiFp(this.configuration).deleteConnectorCluster(connectorClusterId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a connector cluster
     * @summary Get a connector cluster
     * @param {string} connectorClusterId The id of the connector cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApi
     */
    public getConnectorCluster(connectorClusterId: string, options?: any) {
        return ConnectorClustersApiFp(this.configuration).getConnectorCluster(connectorClusterId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a connector cluster\'s addon parameters
     * @summary Get a connector cluster\'s addon parameters
     * @param {string} connectorClusterId The id of the connector cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApi
     */
    public getConnectorClusterAddonParameters(connectorClusterId: string, options?: any) {
        return ConnectorClustersApiFp(this.configuration).getConnectorClusterAddonParameters(connectorClusterId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of connector clusters
     * @summary Returns a list of connector clusters
     * @param {string} [page] Page index
     * @param {string} [size] Number of items in each page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApi
     */
    public listConnectorClusters(page?: string, size?: string, options?: any) {
        return ConnectorClustersApiFp(this.configuration).listConnectorClusters(page, size, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * udpate a connector cluster
     * @summary udpate a connector cluster
     * @param {string} connectorClusterId The id of the connector cluster
     * @param {ConnectorClusterRequest} connectorClusterRequest Data to updated connector with
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectorClustersApi
     */
    public updateConnectorClusterById(connectorClusterId: string, connectorClusterRequest: ConnectorClusterRequest, options?: any) {
        return ConnectorClustersApiFp(this.configuration).updateConnectorClusterById(connectorClusterId, connectorClusterRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
