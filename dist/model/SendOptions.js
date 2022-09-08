"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendOptions = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendOptions model module.
 * @module model/SendOptions
 * @version 2022-09-07.pre
 */
var SendOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendOptions</code>.
   * @alias module:model/SendOptions
   * @class
   * @param useSmartSending {Boolean} 
   * @param isTransactional {Boolean} 
   */
  function SendOptions(useSmartSending, isTransactional) {
    _classCallCheck(this, SendOptions);

    this.useSmartSending = useSmartSending;
    this.isTransactional = isTransactional;
  }
  /**
   * Constructs a <code>SendOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendOptions} obj Optional instance to populate.
   * @return {module:model/SendOptions} The populated <code>SendOptions</code> instance.
   */


  _createClass(SendOptions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendOptions();
        if (data.hasOwnProperty('use_smart_sending')) obj.useSmartSending = _ApiClient.ApiClient.convertToType(data['use_smart_sending'], 'Boolean');
        if (data.hasOwnProperty('is_transactional')) obj.isTransactional = _ApiClient.ApiClient.convertToType(data['is_transactional'], 'Boolean');
      }

      return obj;
    }
  }]);

  return SendOptions;
}();
/**
 * @member {Boolean} useSmartSending
 */


exports.SendOptions = SendOptions;
SendOptions.prototype.useSmartSending = undefined;
/**
 * @member {Boolean} isTransactional
 */

SendOptions.prototype.isTransactional = undefined;