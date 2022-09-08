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
import {IncludedItemsAttributes} from './IncludedItemsAttributes.js';
import {IncludedVariantsLinks} from './IncludedVariantsLinks.js';

/**
 * The IncludedItems model module.
 * @module model/IncludedItems
 * @version 2022-09-07.pre
 */
export class IncludedItems {
  /**
   * Constructs a new <code>IncludedItems</code>.
   * @alias module:model/IncludedItems
   * @class
   * @param type {module:model/IncludedItems.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedItemsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  constructor(type, id, attributes, links) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedItems} obj Optional instance to populate.
   * @return {module:model/IncludedItems} The populated <code>IncludedItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedItems();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = IncludedItemsAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('links'))
        obj.links = IncludedVariantsLinks.constructFromObject(data['links']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IncludedItems.TypeEnum = {
  /**
   * value: "catalog-item"
   * @const
   */
  catalogItem: "catalog-item"
};
/**
 * @member {module:model/IncludedItems.TypeEnum} type
 */
IncludedItems.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedItems.prototype.id = undefined;

/**
 * @member {module:model/IncludedItemsAttributes} attributes
 */
IncludedItems.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedItems.prototype.links = undefined;

