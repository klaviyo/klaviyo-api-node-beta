"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _AudiencesSubObject = require("./AudiencesSubObject.js");
var _SendOptionsSubObject = require("./SendOptionsSubObject.js");
var _SendStrategySubObject = require("./SendStrategySubObject.js");
var _TrackingOptionsSubObject = require("./TrackingOptionsSubObject.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignCreateQueryAsSubResourceAttributes model module.
 * @module model/CampaignCreateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
var CampaignCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignCreateQueryAsSubResourceAttributes
   * @class
   * @param name {String} 
   * @param channel {String} 
   * @param audiences {module:model/AudiencesSubObject} 
   * @param sendOptions {module:model/SendOptionsSubObject} 
   */
  function CampaignCreateQueryAsSubResourceAttributes(name, channel, audiences, sendOptions) {
    _classCallCheck(this, CampaignCreateQueryAsSubResourceAttributes);
    this.name = name;
    this.channel = channel;
    this.audiences = audiences;
    this.sendOptions = sendOptions;
  }

  /**
   * Constructs a <code>CampaignCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignCreateQueryAsSubResourceAttributes} The populated <code>CampaignCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CampaignCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('channel')) obj.channel = _ApiClient.ApiClient.convertToType(data['channel'], 'String');
        if (data.hasOwnProperty('audiences')) obj.audiences = _AudiencesSubObject.AudiencesSubObject.constructFromObject(data['audiences']);
        if (data.hasOwnProperty('send_strategy')) obj.sendStrategy = _SendStrategySubObject.SendStrategySubObject.constructFromObject(data['send_strategy']);
        if (data.hasOwnProperty('send_options')) obj.sendOptions = _SendOptionsSubObject.SendOptionsSubObject.constructFromObject(data['send_options']);
        if (data.hasOwnProperty('tracking_options')) obj.trackingOptions = _TrackingOptionsSubObject.TrackingOptionsSubObject.constructFromObject(data['tracking_options']);
      }
      return obj;
    }
  }]);
  return CampaignCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} name
 */
exports.CampaignCreateQueryAsSubResourceAttributes = CampaignCreateQueryAsSubResourceAttributes;
CampaignCreateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * @member {String} channel
 */
CampaignCreateQueryAsSubResourceAttributes.prototype.channel = undefined;

/**
 * @member {module:model/AudiencesSubObject} audiences
 */
CampaignCreateQueryAsSubResourceAttributes.prototype.audiences = undefined;

/**
 * @member {module:model/SendStrategySubObject} sendStrategy
 */
CampaignCreateQueryAsSubResourceAttributes.prototype.sendStrategy = undefined;

/**
 * @member {module:model/SendOptionsSubObject} sendOptions
 */
CampaignCreateQueryAsSubResourceAttributes.prototype.sendOptions = undefined;

/**
 * @member {module:model/TrackingOptionsSubObject} trackingOptions
 */
CampaignCreateQueryAsSubResourceAttributes.prototype.trackingOptions = undefined;