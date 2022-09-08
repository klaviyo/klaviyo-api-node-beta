"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes = void 0;

var _ApiClient = require("../ApiClient.js");

var _CatalogCategoryUpdateQueryAsSubResource = require("./CatalogCategoryUpdateQueryAsSubResource.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes
 * @version 2022-09-07.pre
 */
var CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param categories {Array.<module:model/CatalogCategoryUpdateQueryAsSubResource>} 
   */
  function CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes(categories) {
    _classCallCheck(this, CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes);

    this.categories = categories;
  }
  /**
   * Constructs a <code>CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes</code> instance.
   */


  _createClass(CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('categories')) obj.categories = _ApiClient.ApiClient.convertToType(data['categories'], [_CatalogCategoryUpdateQueryAsSubResource.CatalogCategoryUpdateQueryAsSubResource]);
      }

      return obj;
    }
  }]);

  return CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {Array.<module:model/CatalogCategoryUpdateQueryAsSubResource>} categories
 */


exports.CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes = CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes;
CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes.prototype.categories = undefined;