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
 * The SendOptions model module.
 * @module model/SendOptions
 * @version 2022-11-14.pre
 */
export class SendOptions {
  /**
   * Constructs a new <code>SendOptions</code>.
   * @alias module:model/SendOptions
   * @class
   * @param useSmartSending {Boolean} 
   * @param isTransactional {Boolean} 
   */
  constructor(useSmartSending, isTransactional) {
    this.useSmartSending = useSmartSending;
    this.isTransactional = isTransactional;
  }

  /**
   * Constructs a <code>SendOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendOptions} obj Optional instance to populate.
   * @return {module:model/SendOptions} The populated <code>SendOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SendOptions();
      if (data.hasOwnProperty('use_smart_sending'))
        obj.useSmartSending = ApiClient.convertToType(data['use_smart_sending'], 'Boolean');
      if (data.hasOwnProperty('is_transactional'))
        obj.isTransactional = ApiClient.convertToType(data['is_transactional'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Boolean} useSmartSending
 */
SendOptions.prototype.useSmartSending = undefined;

/**
 * @member {Boolean} isTransactional
 */
SendOptions.prototype.isTransactional = undefined;

