"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignSendJobPartialUpdateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignSendJobPartialUpdateQueryAsSubResourceAttributes model module.
 * @module model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
var CampaignSendJobPartialUpdateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSendJobPartialUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes
   * @class
   * @param action {String} 
   */
  function CampaignSendJobPartialUpdateQueryAsSubResourceAttributes(action) {
    _classCallCheck(this, CampaignSendJobPartialUpdateQueryAsSubResourceAttributes);
    this.action = action;
  }

  /**
   * Constructs a <code>CampaignSendJobPartialUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes} The populated <code>CampaignSendJobPartialUpdateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CampaignSendJobPartialUpdateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSendJobPartialUpdateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('action')) obj.action = _ApiClient.ApiClient.convertToType(data['action'], 'String');
      }
      return obj;
    }
  }]);
  return CampaignSendJobPartialUpdateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} action
 */
exports.CampaignSendJobPartialUpdateQueryAsSubResourceAttributes = CampaignSendJobPartialUpdateQueryAsSubResourceAttributes;
CampaignSendJobPartialUpdateQueryAsSubResourceAttributes.prototype.action = undefined;