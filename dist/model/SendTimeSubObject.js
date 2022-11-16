"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendTimeSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SendTimeSubObject model module.
 * @module model/SendTimeSubObject
 * @version 2022-11-14.pre
 */
var SendTimeSubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendTimeSubObject</code>.
   * @alias module:model/SendTimeSubObject
   * @class
   * @param datetime {Date} 
   * @param isLocal {Boolean} 
   */
  function SendTimeSubObject(datetime, isLocal) {
    _classCallCheck(this, SendTimeSubObject);
    this.datetime = datetime;
    this.isLocal = isLocal;
  }

  /**
   * Constructs a <code>SendTimeSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendTimeSubObject} obj Optional instance to populate.
   * @return {module:model/SendTimeSubObject} The populated <code>SendTimeSubObject</code> instance.
   */
  _createClass(SendTimeSubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendTimeSubObject();
        if (data.hasOwnProperty('datetime')) obj.datetime = _ApiClient.ApiClient.convertToType(data['datetime'], 'Date');
        if (data.hasOwnProperty('is_local')) obj.isLocal = _ApiClient.ApiClient.convertToType(data['is_local'], 'Boolean');
      }
      return obj;
    }
  }]);
  return SendTimeSubObject;
}();
/**
 * @member {Date} datetime
 */
exports.SendTimeSubObject = SendTimeSubObject;
SendTimeSubObject.prototype.datetime = undefined;

/**
 * @member {Boolean} isLocal
 */
SendTimeSubObject.prototype.isLocal = undefined;