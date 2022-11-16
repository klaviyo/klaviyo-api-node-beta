"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignPartialUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignPartialUpdateQueryAsSubResourceAttributes = require("./CampaignPartialUpdateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignPartialUpdateQueryAsSubResource model module.
 * @module model/CampaignPartialUpdateQueryAsSubResource
 * @version 2022-11-14.pre
 */
var CampaignPartialUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignPartialUpdateQueryAsSubResource</code>.
   * @alias module:model/CampaignPartialUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CampaignPartialUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/CampaignPartialUpdateQueryAsSubResourceAttributes} 
   */
  function CampaignPartialUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, CampaignPartialUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignPartialUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignPartialUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CampaignPartialUpdateQueryAsSubResource} The populated <code>CampaignPartialUpdateQueryAsSubResource</code> instance.
   */
  _createClass(CampaignPartialUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignPartialUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CampaignPartialUpdateQueryAsSubResourceAttributes.CampaignPartialUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CampaignPartialUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CampaignPartialUpdateQueryAsSubResource = CampaignPartialUpdateQueryAsSubResource;
CampaignPartialUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "campaign"
   * @const
   */
  campaign: "campaign"
};
/**
 * @member {module:model/CampaignPartialUpdateQueryAsSubResource.TypeEnum} type
 */
CampaignPartialUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
CampaignPartialUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CampaignPartialUpdateQueryAsSubResourceAttributes} attributes
 */
CampaignPartialUpdateQueryAsSubResource.prototype.attributes = undefined;