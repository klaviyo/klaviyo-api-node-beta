"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignCreateQueryAsSubResourceAttributes = require("./CampaignCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignCreateQueryAsSubResource model module.
 * @module model/CampaignCreateQueryAsSubResource
 * @version 2022-11-14.pre
 */
var CampaignCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignCreateQueryAsSubResource</code>.
   * @alias module:model/CampaignCreateQueryAsSubResource
   * @class
   * @param type {module:model/CampaignCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CampaignCreateQueryAsSubResourceAttributes} 
   */
  function CampaignCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CampaignCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CampaignCreateQueryAsSubResource} The populated <code>CampaignCreateQueryAsSubResource</code> instance.
   */
  _createClass(CampaignCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CampaignCreateQueryAsSubResourceAttributes.CampaignCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CampaignCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CampaignCreateQueryAsSubResource = CampaignCreateQueryAsSubResource;
CampaignCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "campaign"
   * @const
   */
  campaign: "campaign"
};
/**
 * @member {module:model/CampaignCreateQueryAsSubResource.TypeEnum} type
 */
CampaignCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CampaignCreateQueryAsSubResourceAttributes} attributes
 */
CampaignCreateQueryAsSubResource.prototype.attributes = undefined;