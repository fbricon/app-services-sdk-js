/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.8.1-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { OffsetType } from './offset-type';
import { TopicsToResetOffset } from './topics-to-reset-offset';

/**
 * 
 * @export
 * @interface ConsumerGroupResetOffsetParameters
 */
export interface ConsumerGroupResetOffsetParameters {
    /**
     * 
     * @type {OffsetType}
     * @memberof ConsumerGroupResetOffsetParameters
     */
    'offset': OffsetType;
    /**
     * Value associated with the given `offset`. Not used for `offset` values `earliest` and `latest`. When `offset` is `timestamp` then `value` must be a valid timestamp representing the point in time to reset the consumer group. When `offset` is `absolute` then `value` must be the integer offset to which the consumer group will be reset.
     * @type {string}
     * @memberof ConsumerGroupResetOffsetParameters
     */
    'value'?: string;
    /**
     * 
     * @type {Array<TopicsToResetOffset>}
     * @memberof ConsumerGroupResetOffsetParameters
     */
    'topics'?: Array<TopicsToResetOffset>;
}

