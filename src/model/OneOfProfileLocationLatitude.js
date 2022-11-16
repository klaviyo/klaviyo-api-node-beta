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
 * The OneOfProfileLocationLatitude model module.
 * @module model/OneOfProfileLocationLatitude
 * @version 2022-11-14.pre
 */
export class OneOfProfileLocationLatitude {
  /**
   * Constructs a new <code>OneOfProfileLocationLatitude</code>.
   * @alias module:model/OneOfProfileLocationLatitude
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfProfileLocationLatitude</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfProfileLocationLatitude} obj Optional instance to populate.
   * @return {module:model/OneOfProfileLocationLatitude} The populated <code>OneOfProfileLocationLatitude</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfProfileLocationLatitude();
    }
    return obj;
  }
}
