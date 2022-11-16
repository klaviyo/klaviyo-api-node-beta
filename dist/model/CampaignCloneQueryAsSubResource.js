"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignCloneQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignCloneQueryAsSubResourceAttributes = require("./CampaignCloneQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignCloneQueryAsSubResource model module.
 * @module model/CampaignCloneQueryAsSubResource
 * @version 2022-11-14.pre
 */
var CampaignCloneQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignCloneQueryAsSubResource</code>.
   * @alias module:model/CampaignCloneQueryAsSubResource
   * @class
   * @param type {module:model/CampaignCloneQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CampaignCloneQueryAsSubResourceAttributes} 
   */
  function CampaignCloneQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CampaignCloneQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignCloneQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCloneQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CampaignCloneQueryAsSubResource} The populated <code>CampaignCloneQueryAsSubResource</code> instance.
   */
  _createClass(CampaignCloneQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignCloneQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CampaignCloneQueryAsSubResourceAttributes.CampaignCloneQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CampaignCloneQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CampaignCloneQueryAsSubResource = CampaignCloneQueryAsSubResource;
CampaignCloneQueryAsSubResource.TypeEnum = {
  /**
   * value: "campaign"
   * @const
   */
  campaign: "campaign"
};
/**
 * @member {module:model/CampaignCloneQueryAsSubResource.TypeEnum} type
 */
CampaignCloneQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CampaignCloneQueryAsSubResourceAttributes} attributes
 */
CampaignCloneQueryAsSubResource.prototype.attributes = undefined;