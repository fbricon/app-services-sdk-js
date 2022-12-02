/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift SmartEvents Fleet Manager V2
 * The API exposed by the fleet manager of the SmartEvents service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ManagedResourceStatus } from './managed-resource-status';

/**
 * 
 * @export
 * @interface ProcessorResponse
 */
export interface ProcessorResponse {
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'kind': string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'href': string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'submitted_at': string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'published_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'modified_at'?: string;
    /**
     * 
     * @type {ManagedResourceStatus}
     * @memberof ProcessorResponse
     */
    'status': ManagedResourceStatus;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'owner': string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'name': string;
    /**
     * 
     * @type {object}
     * @memberof ProcessorResponse
     */
    'flows': object;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'status_message'?: string;
}

