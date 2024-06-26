/* tslint:disable */
/* eslint-disable */
/**
 * people-backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetPerson404Response
 */
export interface GetPerson404Response {
    /**
     * 
     * @type {string}
     * @memberof GetPerson404Response
     */
    message: string;
}

/**
 * Check if a given object implements the GetPerson404Response interface.
 */
export function instanceOfGetPerson404Response(value: object): value is GetPerson404Response {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function GetPerson404ResponseFromJSON(json: any): GetPerson404Response {
    return GetPerson404ResponseFromJSONTyped(json, false);
}

export function GetPerson404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPerson404Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function GetPerson404ResponseToJSON(value?: GetPerson404Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}

