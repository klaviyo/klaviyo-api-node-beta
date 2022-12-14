/*
 * Klaviyo API (Beta)
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-12-15.pre
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
import {CampaignPartialUpdateQueryAsSubResourceAttributes} from './CampaignPartialUpdateQueryAsSubResourceAttributes.js';

/**
 * The CampaignPartialUpdateQueryAsSubResource model module.
 * @module model/CampaignPartialUpdateQueryAsSubResource
 * @version 2022-12-15.pre
 */
export class CampaignPartialUpdateQueryAsSubResource {
  /**
   * Constructs a new <code>CampaignPartialUpdateQueryAsSubResource</code>.
   * @alias module:model/CampaignPartialUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CampaignPartialUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} The campaign ID to be retrieved
   * @param attributes {module:model/CampaignPartialUpdateQueryAsSubResourceAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignPartialUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignPartialUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CampaignPartialUpdateQueryAsSubResource} The populated <code>CampaignPartialUpdateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignPartialUpdateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CampaignPartialUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignPartialUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "campaign"
   * @const
   */
  campaign: "campaign"
};
/**
 * @member {module:model/CampaignPartialUpdateQueryAsSubResource.TypeEnum} type
 */
CampaignPartialUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * The campaign ID to be retrieved
 * @member {String} id
 */
CampaignPartialUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CampaignPartialUpdateQueryAsSubResourceAttributes} attributes
 */
CampaignPartialUpdateQueryAsSubResource.prototype.attributes = undefined;

