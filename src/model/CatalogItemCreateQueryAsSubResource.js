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
import {CatalogItemCreateQueryAsSubResourceAttributes} from './CatalogItemCreateQueryAsSubResourceAttributes.js';
import {CatalogItemCreateQueryAsSubResourceRelationships} from './CatalogItemCreateQueryAsSubResourceRelationships.js';

/**
 * The CatalogItemCreateQueryAsSubResource model module.
 * @module model/CatalogItemCreateQueryAsSubResource
 * @version 2022-09-07.pre
 */
export class CatalogItemCreateQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogItemCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogItemCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogItemCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogItemCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQueryAsSubResource} The populated <code>CatalogItemCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogItemCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('relationships'))
        obj.relationships = CatalogItemCreateQueryAsSubResourceRelationships.constructFromObject(data['relationships']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogItemCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item"
   * @const
   */
  catalogItem: "catalog-item"
};
/**
 * @member {module:model/CatalogItemCreateQueryAsSubResource.TypeEnum} type
 */
CatalogItemCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogItemCreateQueryAsSubResourceAttributes} attributes
 */
CatalogItemCreateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogItemCreateQueryAsSubResourceRelationships} relationships
 */
CatalogItemCreateQueryAsSubResource.prototype.relationships = undefined;
