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
 * The OneOfSendStrategySubObjectOptions model module.
 * @module model/OneOfSendStrategySubObjectOptions
 * @version 2022-11-14.pre
 */
export class OneOfSendStrategySubObjectOptions {
  /**
   * Constructs a new <code>OneOfSendStrategySubObjectOptions</code>.
   * @alias module:model/OneOfSendStrategySubObjectOptions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfSendStrategySubObjectOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfSendStrategySubObjectOptions} obj Optional instance to populate.
   * @return {module:model/OneOfSendStrategySubObjectOptions} The populated <code>OneOfSendStrategySubObjectOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfSendStrategySubObjectOptions();
    }
    return obj;
  }
}
