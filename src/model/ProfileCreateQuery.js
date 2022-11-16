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
import {ProfileCreateQueryAsSubResource} from './ProfileCreateQueryAsSubResource.js';

/**
 * The ProfileCreateQuery model module.
 * @module model/ProfileCreateQuery
 * @version 2022-11-14.pre
 */
export class ProfileCreateQuery {
  /**
   * Constructs a new <code>ProfileCreateQuery</code>.
   * @alias module:model/ProfileCreateQuery
   * @class
   * @param data {module:model/ProfileCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>ProfileCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileCreateQuery} obj Optional instance to populate.
   * @return {module:model/ProfileCreateQuery} The populated <code>ProfileCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfileCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = ProfileCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ProfileCreateQueryAsSubResource} data
 */
ProfileCreateQuery.prototype.data = undefined;

