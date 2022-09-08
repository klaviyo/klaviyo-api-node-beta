"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedFlowAttributes = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The IncludedFlowAttributes model module.
 * @module model/IncludedFlowAttributes
 * @version 2022-09-07.pre
 */
var IncludedFlowAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedFlowAttributes</code>.
   * @alias module:model/IncludedFlowAttributes
   * @class
   */
  function IncludedFlowAttributes() {
    _classCallCheck(this, IncludedFlowAttributes);
  }
  /**
   * Constructs a <code>IncludedFlowAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlowAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedFlowAttributes} The populated <code>IncludedFlowAttributes</code> instance.
   */


  _createClass(IncludedFlowAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedFlowAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
        if (data.hasOwnProperty('archived')) obj.archived = _ApiClient.ApiClient.convertToType(data['archived'], 'Boolean');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'Date');
        if (data.hasOwnProperty('trigger_type')) obj.triggerType = _ApiClient.ApiClient.convertToType(data['trigger_type'], 'String');
      }

      return obj;
    }
  }]);

  return IncludedFlowAttributes;
}();
/**
 * @member {String} name
 */


exports.IncludedFlowAttributes = IncludedFlowAttributes;
IncludedFlowAttributes.prototype.name = undefined;
/**
 * @member {String} status
 */

IncludedFlowAttributes.prototype.status = undefined;
/**
 * @member {Boolean} archived
 */

IncludedFlowAttributes.prototype.archived = undefined;
/**
 * @member {Date} created
 */

IncludedFlowAttributes.prototype.created = undefined;
/**
 * @member {Date} updated
 */

IncludedFlowAttributes.prototype.updated = undefined;
/**
 * @member {String} triggerType
 */

IncludedFlowAttributes.prototype.triggerType = undefined;