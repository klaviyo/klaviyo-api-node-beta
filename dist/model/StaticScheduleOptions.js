"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticScheduleOptions = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The StaticScheduleOptions model module.
 * @module model/StaticScheduleOptions
 * @version 2022-11-14.pre
 */
var StaticScheduleOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StaticScheduleOptions</code>.
   * @alias module:model/StaticScheduleOptions
   * @class
   * @param datetime {Date} 
   * @param isLocal {Boolean} 
   */
  function StaticScheduleOptions(datetime, isLocal) {
    _classCallCheck(this, StaticScheduleOptions);
    this.datetime = datetime;
    this.isLocal = isLocal;
  }

  /**
   * Constructs a <code>StaticScheduleOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StaticScheduleOptions} obj Optional instance to populate.
   * @return {module:model/StaticScheduleOptions} The populated <code>StaticScheduleOptions</code> instance.
   */
  _createClass(StaticScheduleOptions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StaticScheduleOptions();
        if (data.hasOwnProperty('datetime')) obj.datetime = _ApiClient.ApiClient.convertToType(data['datetime'], 'Date');
        if (data.hasOwnProperty('is_local')) obj.isLocal = _ApiClient.ApiClient.convertToType(data['is_local'], 'Boolean');
        if (data.hasOwnProperty('send_past_recipients_immediately')) obj.sendPastRecipientsImmediately = _ApiClient.ApiClient.convertToType(data['send_past_recipients_immediately'], 'Boolean');
      }
      return obj;
    }
  }]);
  return StaticScheduleOptions;
}();
/**
 * @member {Date} datetime
 */
exports.StaticScheduleOptions = StaticScheduleOptions;
StaticScheduleOptions.prototype.datetime = undefined;

/**
 * @member {Boolean} isLocal
 */
StaticScheduleOptions.prototype.isLocal = undefined;

/**
 * @member {Boolean} sendPastRecipientsImmediately
 */
StaticScheduleOptions.prototype.sendPastRecipientsImmediately = undefined;

// Implement OneOfSendStrategySubObjectOptions interface: