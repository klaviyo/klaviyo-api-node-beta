/*
 * Klaviyo API (Beta)
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-11-14.pre
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {AudiencesSubObject} from './AudiencesSubObject.js';
import {SendOptionsSubObject} from './SendOptionsSubObject.js';
import {SendStrategySubObject} from './SendStrategySubObject.js';
import {TrackingOptionsSubObject} from './TrackingOptionsSubObject.js';

/**
 * The CampaignPartialUpdateQueryAsSubResourceAttributes model module.
 * @module model/CampaignPartialUpdateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
export class CampaignPartialUpdateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CampaignPartialUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignPartialUpdateQueryAsSubResourceAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CampaignPartialUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignPartialUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignPartialUpdateQueryAsSubResourceAttributes} The populated <code>CampaignPartialUpdateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignPartialUpdateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('audiences'))
        obj.audiences = AudiencesSubObject.constructFromObject(data['audiences']);
      if (data.hasOwnProperty('send_options'))
        obj.sendOptions = SendOptionsSubObject.constructFromObject(data['send_options']);
      if (data.hasOwnProperty('tracking_options'))
        obj.trackingOptions = TrackingOptionsSubObject.constructFromObject(data['tracking_options']);
      if (data.hasOwnProperty('send_strategy'))
        obj.sendStrategy = SendStrategySubObject.constructFromObject(data['send_strategy']);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * @member {module:model/AudiencesSubObject} audiences
 */
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.audiences = undefined;

/**
 * @member {module:model/SendOptionsSubObject} sendOptions
 */
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.sendOptions = undefined;

/**
 * @member {module:model/TrackingOptionsSubObject} trackingOptions
 */
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.trackingOptions = undefined;

/**
 * @member {module:model/SendStrategySubObject} sendStrategy
 */
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.sendStrategy = undefined;
