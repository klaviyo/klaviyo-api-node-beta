"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedCategories = void 0;

var _ApiClient = require("../ApiClient.js");

var _IncludedCategoriesAttributes = require("./IncludedCategoriesAttributes.js");

var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The IncludedCategories model module.
 * @module model/IncludedCategories
 * @version 2022-09-07.pre
 */
var IncludedCategories = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedCategories</code>.
   * @alias module:model/IncludedCategories
   * @class
   * @param type {module:model/IncludedCategories.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedCategoriesAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedCategories(type, id, attributes, links) {
    _classCallCheck(this, IncludedCategories);

    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }
  /**
   * Constructs a <code>IncludedCategories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedCategories} obj Optional instance to populate.
   * @return {module:model/IncludedCategories} The populated <code>IncludedCategories</code> instance.
   */


  _createClass(IncludedCategories, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedCategories();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedCategoriesAttributes.IncludedCategoriesAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }

      return obj;
    }
  }]);

  return IncludedCategories;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */


exports.IncludedCategories = IncludedCategories;
IncludedCategories.TypeEnum = {
  /**
   * value: "catalog-category"
   * @const
   */
  catalogCategory: "catalog-category"
};
/**
 * @member {module:model/IncludedCategories.TypeEnum} type
 */

IncludedCategories.prototype.type = undefined;
/**
 * @member {String} id
 */

IncludedCategories.prototype.id = undefined;
/**
 * @member {module:model/IncludedCategoriesAttributes} attributes
 */

IncludedCategories.prototype.attributes = undefined;
/**
 * @member {module:model/IncludedVariantsLinks} links
 */

IncludedCategories.prototype.links = undefined;