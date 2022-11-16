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

/**
 * The SendTimeSubObject model module.
 * @module model/SendTimeSubObject
 * @version 2022-11-14.pre
 */
export class SendTimeSubObject {
  /**
   * Constructs a new <code>SendTimeSubObject</code>.
   * @alias module:model/SendTimeSubObject
   * @class
   * @param datetime {Date} 
   * @param isLocal {Boolean} 
   */
  constructor(datetime, isLocal) {
    this.datetime = datetime;
    this.isLocal = isLocal;
  }

  /**
   * Constructs a <code>SendTimeSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendTimeSubObject} obj Optional instance to populate.
   * @return {module:model/SendTimeSubObject} The populated <code>SendTimeSubObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SendTimeSubObject();
      if (data.hasOwnProperty('datetime'))
        obj.datetime = ApiClient.convertToType(data['datetime'], 'Date');
      if (data.hasOwnProperty('is_local'))
        obj.isLocal = ApiClient.convertToType(data['is_local'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Date} datetime
 */
SendTimeSubObject.prototype.datetime = undefined;

/**
 * @member {Boolean} isLocal
 */
SendTimeSubObject.prototype.isLocal = undefined;
