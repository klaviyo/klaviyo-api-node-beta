"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendStrategySubObject = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SendStrategySubObject model module.
 * @module model/SendStrategySubObject
 * @version 2022-11-14.pre
 */
var SendStrategySubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendStrategySubObject</code>.
   * @alias module:model/SendStrategySubObject
   * @class
   * @param method {String} 
   */
  function SendStrategySubObject(method) {
    _classCallCheck(this, SendStrategySubObject);
    this.method = method;
  }

  /**
   * Constructs a <code>SendStrategySubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendStrategySubObject} obj Optional instance to populate.
   * @return {module:model/SendStrategySubObject} The populated <code>SendStrategySubObject</code> instance.
   */
  _createClass(SendStrategySubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendStrategySubObject();
        if (data.hasOwnProperty('method')) obj.method = _ApiClient.ApiClient.convertToType(data['method'], 'String');
        if (data.hasOwnProperty('options')) obj.options = _ApiClient.ApiClient.convertToType(data['options'], Object);
      }
      return obj;
    }
  }]);
  return SendStrategySubObject;
}();
/**
 * @member {String} method
 */
exports.SendStrategySubObject = SendStrategySubObject;
SendStrategySubObject.prototype.method = undefined;

/**
 * @member {Object} options
 */
SendStrategySubObject.prototype.options = undefined;