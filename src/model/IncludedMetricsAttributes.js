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
 * The IncludedMetricsAttributes model module.
 * @module model/IncludedMetricsAttributes
 * @version 2022-09-07.pre
 */
export class IncludedMetricsAttributes {
  /**
   * Constructs a new <code>IncludedMetricsAttributes</code>.
   * @alias module:model/IncludedMetricsAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IncludedMetricsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedMetricsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedMetricsAttributes} The populated <code>IncludedMetricsAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedMetricsAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'String');
      if (data.hasOwnProperty('integration'))
        obj.integration = ApiClient.convertToType(data['integration'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
IncludedMetricsAttributes.prototype.name = undefined;

/**
 * @member {String} created
 */
IncludedMetricsAttributes.prototype.created = undefined;

/**
 * @member {String} updated
 */
IncludedMetricsAttributes.prototype.updated = undefined;

/**
 * @member {Object} integration
 */
IncludedMetricsAttributes.prototype.integration = undefined;

