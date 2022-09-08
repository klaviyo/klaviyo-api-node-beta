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
import {CatalogItemUpdateJobCreateQueryAsSubResourceAttributes} from './CatalogItemUpdateJobCreateQueryAsSubResourceAttributes.js';

/**
 * The CatalogItemUpdateJobCreateQueryAsSubResource model module.
 * @module model/CatalogItemUpdateJobCreateQueryAsSubResource
 * @version 2022-09-07.pre
 */
export class CatalogItemUpdateJobCreateQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogItemUpdateJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogItemUpdateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemUpdateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogItemUpdateJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateJobCreateQueryAsSubResource} The populated <code>CatalogItemUpdateJobCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemUpdateJobCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogItemUpdateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogItemUpdateJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item-bulk-update-job"
   * @const
   */
  catalogItemBulkUpdateJob: "catalog-item-bulk-update-job"
};
/**
 * @member {module:model/CatalogItemUpdateJobCreateQueryAsSubResource.TypeEnum} type
 */
CatalogItemUpdateJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes} attributes
 */
CatalogItemUpdateJobCreateQueryAsSubResource.prototype.attributes = undefined;

