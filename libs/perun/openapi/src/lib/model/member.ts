/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.16.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Auditable } from './auditable';


export interface Member extends Auditable { 
    userId?: number;
    voId?: number;
    status?: string;
    membershipType?: string;
    sourceGroupId?: number;
    sponsored?: boolean;
    groupStatus?: string;
    groupStatuses?: { [key: string]: string; };
}

