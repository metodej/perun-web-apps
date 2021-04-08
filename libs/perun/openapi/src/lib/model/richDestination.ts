/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.22.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Destination } from './destination';
import { DestinationPropagationType } from './destinationPropagationType';
import { Service } from './service';
import { Facility } from './facility';
import { DestinationType } from './destinationType';


export interface RichDestination extends Destination { 
    blocked?: boolean;
    service?: Service;
    facility?: Facility;
}

