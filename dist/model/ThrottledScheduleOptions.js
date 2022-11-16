"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThrottledScheduleOptions = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ThrottledScheduleOptions model module.
 * @module model/ThrottledScheduleOptions
 * @version 2022-11-14.pre
 */
var ThrottledScheduleOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThrottledScheduleOptions</code>.
   * @alias module:model/ThrottledScheduleOptions
   * @class
   * @param datetime {Date} 
   * @param throttlePercentage {Number} 
   */
  function ThrottledScheduleOptions(datetime, throttlePercentage) {
    _classCallCheck(this, ThrottledScheduleOptions);
    this.datetime = datetime;
    this.throttlePercentage = throttlePercentage;
  }

  /**
   * Constructs a <code>ThrottledScheduleOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThrottledScheduleOptions} obj Optional instance to populate.
   * @return {module:model/ThrottledScheduleOptions} The populated <code>ThrottledScheduleOptions</code> instance.
   */
  _createClass(ThrottledScheduleOptions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThrottledScheduleOptions();
        if (data.hasOwnProperty('datetime')) obj.datetime = _ApiClient.ApiClient.convertToType(data['datetime'], 'Date');
        if (data.hasOwnProperty('throttle_percentage')) obj.throttlePercentage = _ApiClient.ApiClient.convertToType(data['throttle_percentage'], 'Number');
      }
      return obj;
    }
  }]);
  return ThrottledScheduleOptions;
}();
/**
 * @member {Date} datetime
 */
exports.ThrottledScheduleOptions = ThrottledScheduleOptions;
ThrottledScheduleOptions.prototype.datetime = undefined;

/**
 * @member {Number} throttlePercentage
 */
ThrottledScheduleOptions.prototype.throttlePercentage = undefined;

// Implement OneOfSendStrategySubObjectOptions interface: