/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Admin REST API
 * An API to provide REST endpoints for query Kafka for admin operations
 *
 * The version of the OpenAPI document: 0.10.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A Kafka consumer is responsible for reading records from one or more topics and one or more partitions of a topic.
 * @export
 * @interface Consumer
 */
export interface Consumer {
    /**
     * Unique identifier for the consumer group to which this consumer belongs.
     * @type {string}
     * @memberof Consumer
     */
    'groupId': string;
    /**
     * The unique topic name to which this consumer belongs
     * @type {string}
     * @memberof Consumer
     */
    'topic': string;
    /**
     * The partition number to which this consumer group is assigned to.
     * @type {number}
     * @memberof Consumer
     */
    'partition': number;
    /**
     * Offset denotes the position of the consumer in a partition.
     * @type {number}
     * @memberof Consumer
     */
    'offset': number;
    /**
     * The log end offset is the offset of the last message written to a log.
     * @type {number}
     * @memberof Consumer
     */
    'logEndOffset'?: number;
    /**
     * Offset Lag is the delta between the last produced message and the last consumer\'s committed offset.
     * @type {number}
     * @memberof Consumer
     */
    'lag': number;
    /**
     * The member ID is a unique identifier given to a consumer by the coordinator upon initially joining the group.
     * @type {string}
     * @memberof Consumer
     */
    'memberId'?: string;
}

