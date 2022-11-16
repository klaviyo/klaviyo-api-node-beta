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
import {CatalogVariantUpdateQueryAsSubResourceAttributes} from './CatalogVariantUpdateQueryAsSubResourceAttributes.js';

/**
 * The CatalogVariantUpdateQueryAsSubResource model module.
 * @module model/CatalogVariantUpdateQueryAsSubResource
 * @version 2022-11-14.pre
 */
export class CatalogVariantUpdateQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogVariantUpdateQueryAsSubResource</code>.
   * @alias module:model/CatalogVariantUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogVariantUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/CatalogVariantUpdateQueryAsSubResourceAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogVariantUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateQueryAsSubResource} The populated <code>CatalogVariantUpdateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantUpdateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogVariantUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogVariantUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-variant"
   * @const
   */
  catalogVariant: "catalog-variant"
};
/**
 * @member {module:model/CatalogVariantUpdateQueryAsSubResource.TypeEnum} type
 */
CatalogVariantUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
CatalogVariantUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CatalogVariantUpdateQueryAsSubResourceAttributes} attributes
 */
CatalogVariantUpdateQueryAsSubResource.prototype.attributes = undefined;

