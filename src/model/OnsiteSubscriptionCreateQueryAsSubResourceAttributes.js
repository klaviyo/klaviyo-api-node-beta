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

/**
 * The OnsiteSubscriptionCreateQueryAsSubResourceAttributes model module.
 * @module model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes
 * @version 2022-09-07.pre
 */
export class OnsiteSubscriptionCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>OnsiteSubscriptionCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes
   * @class
   * @param listId {String} 
   */
  constructor(listId) {
    this.listId = listId;
  }

  /**
   * Constructs a <code>OnsiteSubscriptionCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes} The populated <code>OnsiteSubscriptionCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnsiteSubscriptionCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('list_id'))
        obj.listId = ApiClient.convertToType(data['list_id'], 'String');
      if (data.hasOwnProperty('custom_source'))
        obj.customSource = ApiClient.convertToType(data['custom_source'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone_number'))
        obj.phoneNumber = ApiClient.convertToType(data['phone_number'], 'String');
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} listId
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.listId = undefined;

/**
 * @member {String} customSource
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.customSource = undefined;

/**
 * @member {String} email
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.email = undefined;

/**
 * @member {String} phoneNumber
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.phoneNumber = undefined;

/**
 * @member {Object} properties
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.properties = undefined;
