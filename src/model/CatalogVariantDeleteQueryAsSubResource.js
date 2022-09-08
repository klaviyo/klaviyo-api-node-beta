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
 * The CatalogVariantDeleteQueryAsSubResource model module.
 * @module model/CatalogVariantDeleteQueryAsSubResource
 * @version 2022-09-07.pre
 */
export class CatalogVariantDeleteQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogVariantDeleteQueryAsSubResource</code>.
   * @alias module:model/CatalogVariantDeleteQueryAsSubResource
   * @class
   * @param type {module:model/CatalogVariantDeleteQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   */
  constructor(type, id) {
    this.type = type;
    this.id = id;
  }

  /**
   * Constructs a <code>CatalogVariantDeleteQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantDeleteQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogVariantDeleteQueryAsSubResource} The populated <code>CatalogVariantDeleteQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantDeleteQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogVariantDeleteQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-variant"
   * @const
   */
  catalogVariant: "catalog-variant"
};
/**
 * @member {module:model/CatalogVariantDeleteQueryAsSubResource.TypeEnum} type
 */
CatalogVariantDeleteQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
CatalogVariantDeleteQueryAsSubResource.prototype.id = undefined;
