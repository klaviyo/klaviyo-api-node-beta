"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UTMParamsSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The UTMParamsSubObject model module.
 * @module model/UTMParamsSubObject
 * @version 2022-11-14.pre
 */
var UTMParamsSubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UTMParamsSubObject</code>.
   * @alias module:model/UTMParamsSubObject
   * @class
   * @param name {String} 
   * @param value {String} 
   */
  function UTMParamsSubObject(name, value) {
    _classCallCheck(this, UTMParamsSubObject);
    this.name = name;
    this.value = value;
  }

  /**
   * Constructs a <code>UTMParamsSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UTMParamsSubObject} obj Optional instance to populate.
   * @return {module:model/UTMParamsSubObject} The populated <code>UTMParamsSubObject</code> instance.
   */
  _createClass(UTMParamsSubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UTMParamsSubObject();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'String');
      }
      return obj;
    }
  }]);
  return UTMParamsSubObject;
}();
/**
 * @member {String} name
 */
exports.UTMParamsSubObject = UTMParamsSubObject;
UTMParamsSubObject.prototype.name = undefined;

/**
 * @member {String} value
 */
UTMParamsSubObject.prototype.value = undefined;