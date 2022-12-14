"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackingOptionsSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _UTMParamsSubObject = require("./UTMParamsSubObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TrackingOptionsSubObject model module.
 * @module model/TrackingOptionsSubObject
 * @version 2022-12-15.pre
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
 * Whether the campaign is tracking open events.
 * @member {Boolean} isTrackingOpens
 */
exports.TrackingOptionsSubObject = TrackingOptionsSubObject;
TrackingOptionsSubObject.prototype.isTrackingOpens = undefined;

/**
 * Whether the campaign is tracking click events.
 * @member {Boolean} isTrackingClicks
 */
TrackingOptionsSubObject.prototype.isTrackingClicks = undefined;

/**
 * Whether the campaign needs UTM parameters. If set to False, UTM params will not be used.
 * @member {Boolean} isAddUtm
 */
TrackingOptionsSubObject.prototype.isAddUtm = undefined;

/**
 * A list of UTM parameters. If an empty list is given and is_add_utm is True, company defaults will be used.
 * @member {Array.<module:model/UTMParamsSubObject>} utmParams
 */
TrackingOptionsSubObject.prototype.utmParams = undefined;