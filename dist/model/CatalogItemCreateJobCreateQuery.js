"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemCreateJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemCreateJobCreateQueryAsSubResource = require("./CatalogItemCreateJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemCreateJobCreateQuery model module.
 * @module model/CatalogItemCreateJobCreateQuery
 * @version 2022-11-14.pre
 */
var CatalogItemCreateJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemCreateJobCreateQuery</code>.
   * @alias module:model/CatalogItemCreateJobCreateQuery
   * @class
   * @param data {module:model/CatalogItemCreateJobCreateQueryAsSubResource} 
   */
  function CatalogItemCreateJobCreateQuery(data) {
    _classCallCheck(this, CatalogItemCreateJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateJobCreateQuery} The populated <code>CatalogItemCreateJobCreateQuery</code> instance.
   */
  _createClass(CatalogItemCreateJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemCreateJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogItemCreateJobCreateQueryAsSubResource.CatalogItemCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogItemCreateJobCreateQuery;
}();
/**
 * @member {module:model/CatalogItemCreateJobCreateQueryAsSubResource} data
 */
exports.CatalogItemCreateJobCreateQuery = CatalogItemCreateJobCreateQuery;
CatalogItemCreateJobCreateQuery.prototype.data = undefined;