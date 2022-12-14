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
import {CampaignSendJobCreateQueryAsSubResource} from './CampaignSendJobCreateQueryAsSubResource.js';

/**
 * The CampaignSendJobCreateQuery model module.
 * @module model/CampaignSendJobCreateQuery
 * @version 2022-12-15.pre
 */
export class CampaignSendJobCreateQuery {
  /**
   * Constructs a new <code>CampaignSendJobCreateQuery</code>.
   * @alias module:model/CampaignSendJobCreateQuery
   * @class
   * @param data {module:model/CampaignSendJobCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignSendJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSendJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CampaignSendJobCreateQuery} The populated <code>CampaignSendJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignSendJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CampaignSendJobCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignSendJobCreateQueryAsSubResource} data
 */
CampaignSendJobCreateQuery.prototype.data = undefined;

