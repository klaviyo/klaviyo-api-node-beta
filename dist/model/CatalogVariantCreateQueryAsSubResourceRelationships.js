"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantCreateQueryAsSubResourceRelationships = void 0;

var _ApiClient = require("../ApiClient.js");

var _CatalogVariantCreateQueryAsSubResourceRelationshipsItems = require("./CatalogVariantCreateQueryAsSubResourceRelationshipsItems.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CatalogVariantCreateQueryAsSubResourceRelationships model module.
 * @module model/CatalogVariantCreateQueryAsSubResourceRelationships
 * @version 2022-09-07.pre
 */
var CatalogVariantCreateQueryAsSubResourceRelationships = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantCreateQueryAsSubResourceRelationships</code>.
   * @alias module:model/CatalogVariantCreateQueryAsSubResourceRelationships
   * @class
   */
  function CatalogVariantCreateQueryAsSubResourceRelationships() {
    _classCallCheck(this, CatalogVariantCreateQueryAsSubResourceRelationships);
  }
  /**
   * Constructs a <code>CatalogVariantCreateQueryAsSubResourceRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQueryAsSubResourceRelationships} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQueryAsSubResourceRelationships} The populated <code>CatalogVariantCreateQueryAsSubResourceRelationships</code> instance.
   */


  _createClass(CatalogVariantCreateQueryAsSubResourceRelationships, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantCreateQueryAsSubResourceRelationships();
        if (data.hasOwnProperty('items')) obj.items = _CatalogVariantCreateQueryAsSubResourceRelationshipsItems.CatalogVariantCreateQueryAsSubResourceRelationshipsItems.constructFromObject(data['items']);
      }

      return obj;
    }
  }]);

  return CatalogVariantCreateQueryAsSubResourceRelationships;
}();
/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceRelationshipsItems} items
 */


exports.CatalogVariantCreateQueryAsSubResourceRelationships = CatalogVariantCreateQueryAsSubResourceRelationships;
CatalogVariantCreateQueryAsSubResourceRelationships.prototype.items = undefined;