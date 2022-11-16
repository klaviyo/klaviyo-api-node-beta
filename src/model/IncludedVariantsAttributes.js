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

/**
 * The IncludedVariantsAttributes model module.
 * @module model/IncludedVariantsAttributes
 * @version 2022-11-14.pre
 */
export class IncludedVariantsAttributes {
  /**
   * Constructs a new <code>IncludedVariantsAttributes</code>.
   * @alias module:model/IncludedVariantsAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IncludedVariantsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedVariantsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedVariantsAttributes} The populated <code>IncludedVariantsAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedVariantsAttributes();
      if (data.hasOwnProperty('external_id'))
        obj.externalId = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('inventory_policy'))
        obj.inventoryPolicy = ApiClient.convertToType(data['inventory_policy'], 'Number');
      if (data.hasOwnProperty('inventory_quantity'))
        obj.inventoryQuantity = ApiClient.convertToType(data['inventory_quantity'], 'Number');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('image_full_url'))
        obj.imageFullUrl = ApiClient.convertToType(data['image_full_url'], 'String');
      if (data.hasOwnProperty('image_thumbnail_url'))
        obj.imageThumbnailUrl = ApiClient.convertToType(data['image_thumbnail_url'], 'String');
      if (data.hasOwnProperty('images'))
        obj.images = ApiClient.convertToType(data['images'], ['String']);
      if (data.hasOwnProperty('custom_metadata'))
        obj.customMetadata = ApiClient.convertToType(data['custom_metadata'], Object);
      if (data.hasOwnProperty('published'))
        obj.published = ApiClient.convertToType(data['published'], 'Boolean');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} externalId
 */
IncludedVariantsAttributes.prototype.externalId = undefined;

/**
 * @member {String} title
 */
IncludedVariantsAttributes.prototype.title = undefined;

/**
 * @member {String} description
 */
IncludedVariantsAttributes.prototype.description = undefined;

/**
 * @member {String} sku
 */
IncludedVariantsAttributes.prototype.sku = undefined;

/**
 * Allowed values for the <code>inventoryPolicy</code> property.
 * @enum {Number}
 * @readonly
 */
IncludedVariantsAttributes.InventoryPolicyEnum = {
  /**
   * value: 0
   * @const
   */
  _0: 0,

  /**
   * value: 1
   * @const
   */
  _1: 1,

  /**
   * value: 2
   * @const
   */
  _2: 2
};
/**
 * A field that controls product visibility in product feeds/blocks. This field has two options:     DENY (1): a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock.     CONTINUE (2): a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.     UNKNOWN (0): the behavior will be the same as if it were set to 2 [Default]
 * @member {module:model/IncludedVariantsAttributes.InventoryPolicyEnum} inventoryPolicy
 */
IncludedVariantsAttributes.prototype.inventoryPolicy = undefined;

/**
 * @member {Number} inventoryQuantity
 */
IncludedVariantsAttributes.prototype.inventoryQuantity = undefined;

/**
 * @member {Number} price
 */
IncludedVariantsAttributes.prototype.price = undefined;

/**
 * @member {String} url
 */
IncludedVariantsAttributes.prototype.url = undefined;

/**
 * @member {String} imageFullUrl
 */
IncludedVariantsAttributes.prototype.imageFullUrl = undefined;

/**
 * @member {String} imageThumbnailUrl
 */
IncludedVariantsAttributes.prototype.imageThumbnailUrl = undefined;

/**
 * @member {Array.<String>} images
 */
IncludedVariantsAttributes.prototype.images = undefined;

/**
 * @member {Object} customMetadata
 */
IncludedVariantsAttributes.prototype.customMetadata = undefined;

/**
 * @member {Boolean} published
 */
IncludedVariantsAttributes.prototype.published = undefined;

/**
 * @member {Date} created
 */
IncludedVariantsAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedVariantsAttributes.prototype.updated = undefined;

