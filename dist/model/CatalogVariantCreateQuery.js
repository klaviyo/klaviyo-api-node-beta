"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantCreateQueryAsSubResource = require("./CatalogVariantCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogVariantCreateQuery model module.
 * @module model/CatalogVariantCreateQuery
 * @version 2022-11-14.pre
 */
var CatalogVariantCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantCreateQuery</code>.
   * @alias module:model/CatalogVariantCreateQuery
   * @class
   * @param data {module:model/CatalogVariantCreateQueryAsSubResource} 
   */
  function CatalogVariantCreateQuery(data) {
    _classCallCheck(this, CatalogVariantCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQuery} The populated <code>CatalogVariantCreateQuery</code> instance.
   */
  _createClass(CatalogVariantCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogVariantCreateQueryAsSubResource.CatalogVariantCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogVariantCreateQuery;
}();
/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResource} data
 */
exports.CatalogVariantCreateQuery = CatalogVariantCreateQuery;
CatalogVariantCreateQuery.prototype.data = undefined;