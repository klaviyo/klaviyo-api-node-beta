"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantCreateQueryAsSubResourceAttributes = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CatalogVariantCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogVariantCreateQueryAsSubResourceAttributes
 * @version 2022-09-07.pre
 */
var CatalogVariantCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogVariantCreateQueryAsSubResourceAttributes
   * @class
   * @param externalId {String} 
   * @param title {String} 
   * @param description {String} 
   * @param sku {String} 
   * @param inventoryPolicy {module:model/CatalogVariantCreateQueryAsSubResourceAttributes.InventoryPolicyEnum} 0 = UNKNOWN, 1 = DENY, 2 = CONTINUE
   * @param inventoryQuantity {Number} 
   * @param price {Number} 
   * @param url {String} 
   */
  function CatalogVariantCreateQueryAsSubResourceAttributes(externalId, title, description, sku, inventoryPolicy, inventoryQuantity, price, url) {
    _classCallCheck(this, CatalogVariantCreateQueryAsSubResourceAttributes);

    this.externalId = externalId;
    this.title = title;
    this.description = description;
    this.sku = sku;
    this.inventoryPolicy = inventoryPolicy;
    this.inventoryQuantity = inventoryQuantity;
    this.price = price;
    this.url = url;
  }
  /**
   * Constructs a <code>CatalogVariantCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQueryAsSubResourceAttributes} The populated <code>CatalogVariantCreateQueryAsSubResourceAttributes</code> instance.
   */


  _createClass(CatalogVariantCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('catalog_type')) obj.catalogType = _ApiClient.ApiClient.convertToType(data['catalog_type'], 'String');
        if (data.hasOwnProperty('integration_type')) obj.integrationType = _ApiClient.ApiClient.convertToType(data['integration_type'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('sku')) obj.sku = _ApiClient.ApiClient.convertToType(data['sku'], 'String');
        if (data.hasOwnProperty('inventory_policy')) obj.inventoryPolicy = _ApiClient.ApiClient.convertToType(data['inventory_policy'], 'Number');
        if (data.hasOwnProperty('inventory_quantity')) obj.inventoryQuantity = _ApiClient.ApiClient.convertToType(data['inventory_quantity'], 'Number');
        if (data.hasOwnProperty('price')) obj.price = _ApiClient.ApiClient.convertToType(data['price'], 'Number');
        if (data.hasOwnProperty('url')) obj.url = _ApiClient.ApiClient.convertToType(data['url'], 'String');
        if (data.hasOwnProperty('image_full_url')) obj.imageFullUrl = _ApiClient.ApiClient.convertToType(data['image_full_url'], 'String');
        if (data.hasOwnProperty('image_thumbnail_url')) obj.imageThumbnailUrl = _ApiClient.ApiClient.convertToType(data['image_thumbnail_url'], 'String');
        if (data.hasOwnProperty('images')) obj.images = _ApiClient.ApiClient.convertToType(data['images'], ['String']);
        if (data.hasOwnProperty('custom_metadata')) obj.customMetadata = _ApiClient.ApiClient.convertToType(data['custom_metadata'], Object);
        if (data.hasOwnProperty('published')) obj.published = _ApiClient.ApiClient.convertToType(data['published'], 'Boolean');
      }

      return obj;
    }
  }]);

  return CatalogVariantCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} externalId
 */


exports.CatalogVariantCreateQueryAsSubResourceAttributes = CatalogVariantCreateQueryAsSubResourceAttributes;
CatalogVariantCreateQueryAsSubResourceAttributes.prototype.externalId = undefined;
/**
 * @member {String} catalogType
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.catalogType = undefined;
/**
 * Allowed values for the <code>integrationType</code> property.
 * @enum {String}
 * @readonly
 */

CatalogVariantCreateQueryAsSubResourceAttributes.IntegrationTypeEnum = {
  /**
   * value: "$custom"
   * @const
   */
  custom: "$custom"
};
/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceAttributes.IntegrationTypeEnum} integrationType
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.integrationType = undefined;
/**
 * @member {String} title
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.title = undefined;
/**
 * @member {String} description
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.description = undefined;
/**
 * @member {String} sku
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.sku = undefined;
/**
 * Allowed values for the <code>inventoryPolicy</code> property.
 * @enum {Number}
 * @readonly
 */

CatalogVariantCreateQueryAsSubResourceAttributes.InventoryPolicyEnum = {
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
 * 0 = UNKNOWN, 1 = DENY, 2 = CONTINUE
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceAttributes.InventoryPolicyEnum} inventoryPolicy
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.inventoryPolicy = undefined;
/**
 * @member {Number} inventoryQuantity
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.inventoryQuantity = undefined;
/**
 * @member {Number} price
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.price = undefined;
/**
 * @member {String} url
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.url = undefined;
/**
 * @member {String} imageFullUrl
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.imageFullUrl = undefined;
/**
 * @member {String} imageThumbnailUrl
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.imageThumbnailUrl = undefined;
/**
 * @member {Array.<String>} images
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.images = undefined;
/**
 * @member {Object} customMetadata
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.customMetadata = undefined;
/**
 * @member {Boolean} published
 */

CatalogVariantCreateQueryAsSubResourceAttributes.prototype.published = undefined;