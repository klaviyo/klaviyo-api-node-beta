"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignSendJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignSendJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CampaignSendJobCreateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
var CampaignSendJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSendJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignSendJobCreateQueryAsSubResourceAttributes
   * @class
   * @param id {String} 
   */
  function CampaignSendJobCreateQueryAsSubResourceAttributes(id) {
    _classCallCheck(this, CampaignSendJobCreateQueryAsSubResourceAttributes);
    this.id = id;
  }

  /**
   * Constructs a <code>CampaignSendJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSendJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignSendJobCreateQueryAsSubResourceAttributes} The populated <code>CampaignSendJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CampaignSendJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSendJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
      }
      return obj;
    }
  }]);
  return CampaignSendJobCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} id
 */
exports.CampaignSendJobCreateQueryAsSubResourceAttributes = CampaignSendJobCreateQueryAsSubResourceAttributes;
CampaignSendJobCreateQueryAsSubResourceAttributes.prototype.id = undefined;