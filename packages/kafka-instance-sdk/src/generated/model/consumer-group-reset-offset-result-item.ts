/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Instance API
 * API for interacting with Kafka Instance. Includes Produce, Consume and Admin APIs
 *
 * The version of the OpenAPI document: 0.13.1-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ConsumerGroupResetOffsetResultItem
 */
export interface ConsumerGroupResetOffsetResultItem {
    /**
     * 
     * @type {string}
     * @memberof ConsumerGroupResetOffsetResultItem
     */
    'topic'?: string;
    /**
     * 
     * @type {number}
     * @memberof ConsumerGroupResetOffsetResultItem
     */
    'partition'?: number;
    /**
     * 
     * @type {number}
     * @memberof ConsumerGroupResetOffsetResultItem
     */
    'offset'?: number;
}

