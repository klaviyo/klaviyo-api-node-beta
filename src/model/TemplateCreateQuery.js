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
import {TemplateCreateQueryAsSubResource} from './TemplateCreateQueryAsSubResource.js';

/**
 * The TemplateCreateQuery model module.
 * @module model/TemplateCreateQuery
 * @version 2022-11-14.pre
 */
export class TemplateCreateQuery {
  /**
   * Constructs a new <code>TemplateCreateQuery</code>.
   * @alias module:model/TemplateCreateQuery
   * @class
   * @param data {module:model/TemplateCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>TemplateCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateCreateQuery} obj Optional instance to populate.
   * @return {module:model/TemplateCreateQuery} The populated <code>TemplateCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = TemplateCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TemplateCreateQueryAsSubResource} data
 */
TemplateCreateQuery.prototype.data = undefined;

