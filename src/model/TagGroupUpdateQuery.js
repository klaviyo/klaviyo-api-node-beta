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
import {TagGroupUpdateQueryAsSubResource} from './TagGroupUpdateQueryAsSubResource.js';

/**
 * The TagGroupUpdateQuery model module.
 * @module model/TagGroupUpdateQuery
 * @version 2022-11-14.pre
 */
export class TagGroupUpdateQuery {
  /**
   * Constructs a new <code>TagGroupUpdateQuery</code>.
   * @alias module:model/TagGroupUpdateQuery
   * @class
   * @param data {module:model/TagGroupUpdateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TagGroupUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupUpdateQuery} obj Optional instance to populate.
   * @return {module:model/TagGroupUpdateQuery} The populated <code>TagGroupUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagGroupUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = TagGroupUpdateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TagGroupUpdateQueryAsSubResource} data
 */
TagGroupUpdateQuery.prototype.data = undefined;

