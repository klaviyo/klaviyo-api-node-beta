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
import {SubscriptionCreateJobCreateQueryAsSubResource} from './SubscriptionCreateJobCreateQueryAsSubResource.js';

/**
 * The SubscriptionCreateJobCreateQuery model module.
 * @module model/SubscriptionCreateJobCreateQuery
 * @version 2022-11-14.pre
 */
export class SubscriptionCreateJobCreateQuery {
  /**
   * Constructs a new <code>SubscriptionCreateJobCreateQuery</code>.
   * @alias module:model/SubscriptionCreateJobCreateQuery
   * @class
   * @param data {module:model/SubscriptionCreateJobCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>SubscriptionCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/SubscriptionCreateJobCreateQuery} The populated <code>SubscriptionCreateJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionCreateJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = SubscriptionCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/SubscriptionCreateJobCreateQueryAsSubResource} data
 */
SubscriptionCreateJobCreateQuery.prototype.data = undefined;

