/*
 * Klaviyo API (Beta)
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-09-07.pre
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
import {Subscription} from './Subscription.js';

/**
 * The SubscriptionCreateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes
 * @version 2022-09-07.pre
 */
export class SubscriptionCreateJobCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>SubscriptionCreateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param listId {String} 
   * @param subscriptions {Array.<module:model/Subscription>} 
   */
  constructor(listId, subscriptions) {
    this.listId = listId;
    this.subscriptions = subscriptions;
  }

  /**
   * Constructs a <code>SubscriptionCreateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes} The populated <code>SubscriptionCreateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionCreateJobCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('list_id'))
        obj.listId = ApiClient.convertToType(data['list_id'], 'String');
      if (data.hasOwnProperty('custom_source'))
        obj.customSource = ApiClient.convertToType(data['custom_source'], 'String');
      if (data.hasOwnProperty('subscriptions'))
        obj.subscriptions = ApiClient.convertToType(data['subscriptions'], [Subscription]);
    }
    return obj;
  }
}

/**
 * @member {String} listId
 */
SubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.listId = undefined;

/**
 * @member {String} customSource
 */
SubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.customSource = undefined;

/**
 * @member {Array.<module:model/Subscription>} subscriptions
 */
SubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.subscriptions = undefined;

