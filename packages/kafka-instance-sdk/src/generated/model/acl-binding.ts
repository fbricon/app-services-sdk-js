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


import { AclOperation } from './acl-operation';
import { AclPatternType } from './acl-pattern-type';
import { AclPermissionType } from './acl-permission-type';
import { AclResourceType } from './acl-resource-type';

/**
 * Represents a binding between a resource pattern and an access control entry
 * @export
 * @interface AclBinding
 */
export interface AclBinding {
    /**
     * 
     * @type {AclResourceType}
     * @memberof AclBinding
     */
    'resourceType': AclResourceType;
    /**
     * 
     * @type {string}
     * @memberof AclBinding
     */
    'resourceName': string;
    /**
     * 
     * @type {AclPatternType}
     * @memberof AclBinding
     */
    'patternType': AclPatternType;
    /**
     * Identifies the user or service account to which an ACL entry is bound. The literal prefix value of `User:` is required. May be used to specify all users with value `User:*`.
     * @type {string}
     * @memberof AclBinding
     */
    'principal': string;
    /**
     * 
     * @type {AclOperation}
     * @memberof AclBinding
     */
    'operation': AclOperation;
    /**
     * 
     * @type {AclPermissionType}
     * @memberof AclBinding
     */
    'permission': AclPermissionType;
}

