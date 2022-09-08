"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemDeleteJobCreateQueryAsSubResource = void 0;

var _ApiClient = require("../ApiClient.js");

var _CatalogItemDeleteJobCreateQueryAsSubResourceAttributes = require("./CatalogItemDeleteJobCreateQueryAsSubResourceAttributes.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CatalogItemDeleteJobCreateQueryAsSubResource model module.
 * @module model/CatalogItemDeleteJobCreateQueryAsSubResource
 * @version 2022-09-07.pre
 */
var CatalogItemDeleteJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemDeleteJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogItemDeleteJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemDeleteJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogItemDeleteJobCreateQueryAsSubResourceAttributes} 
   */
  function CatalogItemDeleteJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CatalogItemDeleteJobCreateQueryAsSubResource);

    this.type = type;
    this.attributes = attributes;
  }
  /**
   * Constructs a <code>CatalogItemDeleteJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemDeleteJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemDeleteJobCreateQueryAsSubResource} The populated <code>CatalogItemDeleteJobCreateQueryAsSubResource</code> instance.
   */


  _createClass(CatalogItemDeleteJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemDeleteJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogItemDeleteJobCreateQueryAsSubResourceAttributes.CatalogItemDeleteJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }

      return obj;
    }
  }]);

  return CatalogItemDeleteJobCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */


exports.CatalogItemDeleteJobCreateQueryAsSubResource = CatalogItemDeleteJobCreateQueryAsSubResource;
CatalogItemDeleteJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item-bulk-delete-job"
   * @const
   */
  catalogItemBulkDeleteJob: "catalog-item-bulk-delete-job"
};
/**
 * @member {module:model/CatalogItemDeleteJobCreateQueryAsSubResource.TypeEnum} type
 */

CatalogItemDeleteJobCreateQueryAsSubResource.prototype.type = undefined;
/**
 * @member {module:model/CatalogItemDeleteJobCreateQueryAsSubResourceAttributes} attributes
 */

CatalogItemDeleteJobCreateQueryAsSubResource.prototype.attributes = undefined;