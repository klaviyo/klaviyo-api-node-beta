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
import {CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes} from './CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes.js';

/**
 * The CatalogCategoryDeleteJobCreateQueryAsSubResource model module.
 * @module model/CatalogCategoryDeleteJobCreateQueryAsSubResource
 * @version 2022-09-07.pre
 */
export class CatalogCategoryDeleteJobCreateQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogCategoryDeleteJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogCategoryDeleteJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource} The populated <code>CatalogCategoryDeleteJobCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryDeleteJobCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogCategoryDeleteJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-category-bulk-delete-job"
   * @const
   */
  catalogCategoryBulkDeleteJob: "catalog-category-bulk-delete-job"
};
/**
 * @member {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource.TypeEnum} type
 */
CatalogCategoryDeleteJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes} attributes
 */
CatalogCategoryDeleteJobCreateQueryAsSubResource.prototype.attributes = undefined;

