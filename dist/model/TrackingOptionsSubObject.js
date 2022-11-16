"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackingOptionsSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _UTMParamsSubObject = require("./UTMParamsSubObject.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TrackingOptionsSubObject model module.
 * @module model/TrackingOptionsSubObject
 * @version 2022-11-14.pre
 */
var TrackingOptionsSubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackingOptionsSubObject</code>.
   * @alias module:model/TrackingOptionsSubObject
   * @class
   */
  function TrackingOptionsSubObject() {
    _classCallCheck(this, TrackingOptionsSubObject);
  }

  /**
   * Constructs a <code>TrackingOptionsSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackingOptionsSubObject} obj Optional instance to populate.
   * @return {module:model/TrackingOptionsSubObject} The populated <code>TrackingOptionsSubObject</code> instance.
   */
  _createClass(TrackingOptionsSubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackingOptionsSubObject();
        if (data.hasOwnProperty('is_tracking_opens')) obj.isTrackingOpens = _ApiClient.ApiClient.convertToType(data['is_tracking_opens'], 'Boolean');
        if (data.hasOwnProperty('is_tracking_clicks')) obj.isTrackingClicks = _ApiClient.ApiClient.convertToType(data['is_tracking_clicks'], 'Boolean');
        if (data.hasOwnProperty('is_add_utm')) obj.isAddUtm = _ApiClient.ApiClient.convertToType(data['is_add_utm'], 'Boolean');
        if (data.hasOwnProperty('utm_params')) obj.utmParams = _ApiClient.ApiClient.convertToType(data['utm_params'], [_UTMParamsSubObject.UTMParamsSubObject]);
      }
      return obj;
    }
  }]);
  return TrackingOptionsSubObject;
}();
/**
 * @member {Boolean} isTrackingOpens
 */
exports.TrackingOptionsSubObject = TrackingOptionsSubObject;
TrackingOptionsSubObject.prototype.isTrackingOpens = undefined;

/**
 * @member {Boolean} isTrackingClicks
 */
TrackingOptionsSubObject.prototype.isTrackingClicks = undefined;

/**
 * @member {Boolean} isAddUtm
 */
TrackingOptionsSubObject.prototype.isAddUtm = undefined;

/**
 * @member {Array.<module:model/UTMParamsSubObject>} utmParams
 */
TrackingOptionsSubObject.prototype.utmParams = undefined;