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
import {TemplateUpdateQueryAsSubResource} from './TemplateUpdateQueryAsSubResource.js';

/**
 * The TemplateUpdateQuery model module.
 * @module model/TemplateUpdateQuery
 * @version 2022-11-14.pre
 */
export class TemplateUpdateQuery {
  /**
   * Constructs a new <code>TemplateUpdateQuery</code>.
   * @alias module:model/TemplateUpdateQuery
   * @class
   * @param data {module:model/TemplateUpdateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TemplateUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQuery} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQuery} The populated <code>TemplateUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = TemplateUpdateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TemplateUpdateQueryAsSubResource} data
 */
TemplateUpdateQuery.prototype.data = undefined;

