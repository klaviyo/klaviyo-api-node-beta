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
import {SuppressionCreateJobCreateQueryAsSubResource} from './SuppressionCreateJobCreateQueryAsSubResource.js';

/**
 * The SuppressionCreateJobCreateQuery model module.
 * @module model/SuppressionCreateJobCreateQuery
 * @version 2022-11-14.pre
 */
export class SuppressionCreateJobCreateQuery {
  /**
   * Constructs a new <code>SuppressionCreateJobCreateQuery</code>.
   * @alias module:model/SuppressionCreateJobCreateQuery
   * @class
   * @param data {module:model/SuppressionCreateJobCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>SuppressionCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuppressionCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/SuppressionCreateJobCreateQuery} The populated <code>SuppressionCreateJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SuppressionCreateJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = SuppressionCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/SuppressionCreateJobCreateQueryAsSubResource} data
 */
SuppressionCreateJobCreateQuery.prototype.data = undefined;

