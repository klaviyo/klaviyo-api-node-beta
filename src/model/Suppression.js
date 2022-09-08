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
 * The Suppression model module.
 * @module model/Suppression
 * @version 2022-09-07.pre
 */
export class Suppression {
  /**
   * Constructs a new <code>Suppression</code>.
   * @alias module:model/Suppression
   * @class
   * @param email {String} 
   */
  constructor(email) {
    this.email = email;
  }

  /**
   * Constructs a <code>Suppression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Suppression} obj Optional instance to populate.
   * @return {module:model/Suppression} The populated <code>Suppression</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Suppression();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
Suppression.prototype.email = undefined;

