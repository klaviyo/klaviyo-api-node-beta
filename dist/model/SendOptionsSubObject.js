"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendOptionsSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SendOptionsSubObject model module.
 * @module model/SendOptionsSubObject
 * @version 2022-12-15.pre
 */
var SendOptionsSubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendOptionsSubObject</code>.
   * @alias module:model/SendOptionsSubObject
   * @class
   */
  function SendOptionsSubObject() {
    _classCallCheck(this, SendOptionsSubObject);
  }

  /**
   * Constructs a <code>SendOptionsSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendOptionsSubObject} obj Optional instance to populate.
   * @return {module:model/SendOptionsSubObject} The populated <code>SendOptionsSubObject</code> instance.
   */
  _createClass(SendOptionsSubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendOptionsSubObject();
        if (data.hasOwnProperty('use_smart_sending')) obj.useSmartSending = _ApiClient.ApiClient.convertToType(data['use_smart_sending'], 'Boolean');
        if (data.hasOwnProperty('ignore_unsubscribes')) obj.ignoreUnsubscribes = _ApiClient.ApiClient.convertToType(data['ignore_unsubscribes'], 'Boolean');
      }
      return obj;
    }
  }]);
  return SendOptionsSubObject;
}();
/**
 * Use smart sending. Defaults to True
 * @member {Boolean} useSmartSending
 */
exports.SendOptionsSubObject = SendOptionsSubObject;
SendOptionsSubObject.prototype.useSmartSending = undefined;

/**
 * Ignore unsubscribes. Defaults to False
 * @member {Boolean} ignoreUnsubscribes
 */
SendOptionsSubObject.prototype.ignoreUnsubscribes = undefined;