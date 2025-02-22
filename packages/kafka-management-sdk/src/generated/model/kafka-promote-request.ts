/* tslint:disable */
/* eslint-disable */
/**
 * Kafka Management API
 * Kafka Management API is a REST API to manage Kafka instances
 *
 * The version of the OpenAPI document: 1.15.0
 * Contact: rhosak-support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface KafkaPromoteRequest
 */
export interface KafkaPromoteRequest {
    /**
     * The desired Kafka billing model to promote the kafka instance to. Promotion is performed asynchronously. Accepted values: [\'marketplace\', \'standard\']
     * @type {string}
     * @memberof KafkaPromoteRequest
     */
    'desired_kafka_billing_model': string;
    /**
     * The desired billing marketplace to promote the kafka instance to. Accepted values: [\'aws\', \'rhm\']. Only considered when desired_kafka_billing_model is \'marketplace\'
     * @type {string}
     * @memberof KafkaPromoteRequest
     */
    'desired_marketplace'?: string;
    /**
     * The desired Kafka billing cloud account ID to promote the kafka instance to. Only considered when desired_kafka_billing_model is \'marketplace\'
     * @type {string}
     * @memberof KafkaPromoteRequest
     */
    'desired_billing_cloud_account_id'?: string;
}

