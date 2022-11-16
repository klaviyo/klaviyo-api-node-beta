"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsuppressionCreateJobCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _SuppressionCreateJobCreateQueryAsSubResourceAttributes = require("./SuppressionCreateJobCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The UnsuppressionCreateJobCreateQueryAsSubResource model module.
 * @module model/UnsuppressionCreateJobCreateQueryAsSubResource
 * @version 2022-11-14.pre
 */
var UnsuppressionCreateJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnsuppressionCreateJobCreateQueryAsSubResource</code>.
   * @alias module:model/UnsuppressionCreateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/UnsuppressionCreateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} 
   */
  function UnsuppressionCreateJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, UnsuppressionCreateJobCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>UnsuppressionCreateJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsuppressionCreateJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/UnsuppressionCreateJobCreateQueryAsSubResource} The populated <code>UnsuppressionCreateJobCreateQueryAsSubResource</code> instance.
   */
  _createClass(UnsuppressionCreateJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnsuppressionCreateJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _SuppressionCreateJobCreateQueryAsSubResourceAttributes.SuppressionCreateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return UnsuppressionCreateJobCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.UnsuppressionCreateJobCreateQueryAsSubResource = UnsuppressionCreateJobCreateQueryAsSubResource;
UnsuppressionCreateJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile-unsuppression-bulk-create-job"
   * @const
   */
  profileUnsuppressionBulkCreateJob: "profile-unsuppression-bulk-create-job"
};
/**
 * @member {module:model/UnsuppressionCreateJobCreateQueryAsSubResource.TypeEnum} type
 */
UnsuppressionCreateJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} attributes
 */
UnsuppressionCreateJobCreateQueryAsSubResource.prototype.attributes = undefined;