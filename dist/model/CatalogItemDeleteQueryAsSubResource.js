"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemDeleteQueryAsSubResource = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CatalogItemDeleteQueryAsSubResource model module.
 * @module model/CatalogItemDeleteQueryAsSubResource
 * @version 2022-09-07.pre
 */
var CatalogItemDeleteQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemDeleteQueryAsSubResource</code>.
   * @alias module:model/CatalogItemDeleteQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemDeleteQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   */
  function CatalogItemDeleteQueryAsSubResource(type, id) {
    _classCallCheck(this, CatalogItemDeleteQueryAsSubResource);

    this.type = type;
    this.id = id;
  }
  /**
   * Constructs a <code>CatalogItemDeleteQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemDeleteQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemDeleteQueryAsSubResource} The populated <code>CatalogItemDeleteQueryAsSubResource</code> instance.
   */


  _createClass(CatalogItemDeleteQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemDeleteQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
      }

      return obj;
    }
  }]);

  return CatalogItemDeleteQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */


exports.CatalogItemDeleteQueryAsSubResource = CatalogItemDeleteQueryAsSubResource;
CatalogItemDeleteQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item"
   * @const
   */
  catalogItem: "catalog-item"
};
/**
 * @member {module:model/CatalogItemDeleteQueryAsSubResource.TypeEnum} type
 */

CatalogItemDeleteQueryAsSubResource.prototype.type = undefined;
/**
 * @member {String} id
 */

CatalogItemDeleteQueryAsSubResource.prototype.id = undefined;