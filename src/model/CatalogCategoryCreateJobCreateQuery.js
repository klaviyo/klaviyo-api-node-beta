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
import {CatalogCategoryCreateJobCreateQueryAsSubResource} from './CatalogCategoryCreateJobCreateQueryAsSubResource.js';

/**
 * The CatalogCategoryCreateJobCreateQuery model module.
 * @module model/CatalogCategoryCreateJobCreateQuery
 * @version 2022-09-07.pre
 */
export class CatalogCategoryCreateJobCreateQuery {
  /**
   * Constructs a new <code>CatalogCategoryCreateJobCreateQuery</code>.
   * @alias module:model/CatalogCategoryCreateJobCreateQuery
   * @class
   * @param data {module:model/CatalogCategoryCreateJobCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateJobCreateQuery} The populated <code>CatalogCategoryCreateJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryCreateJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CatalogCategoryCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogCategoryCreateJobCreateQueryAsSubResource} data
 */
CatalogCategoryCreateJobCreateQuery.prototype.data = undefined;

