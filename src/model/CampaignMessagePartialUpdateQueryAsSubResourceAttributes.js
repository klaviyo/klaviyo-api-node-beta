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
import {ContentSubObject} from './ContentSubObject.js';

/**
 * The CampaignMessagePartialUpdateQueryAsSubResourceAttributes model module.
 * @module model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
export class CampaignMessagePartialUpdateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CampaignMessagePartialUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CampaignMessagePartialUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes} The populated <code>CampaignMessagePartialUpdateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignMessagePartialUpdateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ContentSubObject.constructFromObject(data['content']);
    }
    return obj;
  }
}

/**
 * @member {String} label
 */
CampaignMessagePartialUpdateQueryAsSubResourceAttributes.prototype.label = undefined;

/**
 * @member {module:model/ContentSubObject} content
 */
CampaignMessagePartialUpdateQueryAsSubResourceAttributes.prototype.content = undefined;

