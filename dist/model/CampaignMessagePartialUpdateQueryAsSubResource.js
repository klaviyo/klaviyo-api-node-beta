"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignMessagePartialUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignMessagePartialUpdateQueryAsSubResourceAttributes = require("./CampaignMessagePartialUpdateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CampaignMessagePartialUpdateQueryAsSubResource model module.
 * @module model/CampaignMessagePartialUpdateQueryAsSubResource
 * @version 2022-12-15.pre
 */
var CampaignMessagePartialUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignMessagePartialUpdateQueryAsSubResource</code>.
   * @alias module:model/CampaignMessagePartialUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CampaignMessagePartialUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} The message ID to be retrieved
   * @param attributes {module:model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes} 
   */
  function CampaignMessagePartialUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, CampaignMessagePartialUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignMessagePartialUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessagePartialUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CampaignMessagePartialUpdateQueryAsSubResource} The populated <code>CampaignMessagePartialUpdateQueryAsSubResource</code> instance.
   */
  _createClass(CampaignMessagePartialUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignMessagePartialUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CampaignMessagePartialUpdateQueryAsSubResourceAttributes.CampaignMessagePartialUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CampaignMessagePartialUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CampaignMessagePartialUpdateQueryAsSubResource = CampaignMessagePartialUpdateQueryAsSubResource;
CampaignMessagePartialUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "campaign-message"
   * @const
   */
  campaignMessage: "campaign-message"
};
/**
 * @member {module:model/CampaignMessagePartialUpdateQueryAsSubResource.TypeEnum} type
 */
CampaignMessagePartialUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * The message ID to be retrieved
 * @member {String} id
 */
CampaignMessagePartialUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes} attributes
 */
CampaignMessagePartialUpdateQueryAsSubResource.prototype.attributes = undefined;