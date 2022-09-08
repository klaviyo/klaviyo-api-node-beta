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
import {ListPartialUpdateQueryAsSubResource} from './ListPartialUpdateQueryAsSubResource.js';

/**
 * The ListPartialUpdateQuery model module.
 * @module model/ListPartialUpdateQuery
 * @version 2022-09-07.pre
 */
export class ListPartialUpdateQuery {
  /**
   * Constructs a new <code>ListPartialUpdateQuery</code>.
   * @alias module:model/ListPartialUpdateQuery
   * @class
   * @param data {module:model/ListPartialUpdateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>ListPartialUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListPartialUpdateQuery} obj Optional instance to populate.
   * @return {module:model/ListPartialUpdateQuery} The populated <code>ListPartialUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListPartialUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = ListPartialUpdateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ListPartialUpdateQueryAsSubResource} data
 */
ListPartialUpdateQuery.prototype.data = undefined;

