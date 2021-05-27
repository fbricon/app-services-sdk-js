/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Service Fleet Manager
 * Kafka Service Fleet Manager is a Rest API to manage kafka instances and connectors.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Schema for the request to create a service account
 * @export
 * @interface ServiceAccountRequest
 */
export interface ServiceAccountRequest {
    /**
     * The name of the service account
     * @type {string}
     * @memberof ServiceAccountRequest
     */
    name: string;
    /**
     * A description for the service account
     * @type {string}
     * @memberof ServiceAccountRequest
     */
    description?: string;
}


