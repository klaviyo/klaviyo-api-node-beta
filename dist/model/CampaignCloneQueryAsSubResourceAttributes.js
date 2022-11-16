"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignCloneQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignCloneQueryAsSubResourceAttributes model module.
 * @module model/CampaignCloneQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
var CampaignCloneQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignCloneQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignCloneQueryAsSubResourceAttributes
   * @class
   */
  function CampaignCloneQueryAsSubResourceAttributes() {
    _classCallCheck(this, CampaignCloneQueryAsSubResourceAttributes);
  }

  /**
   * Constructs a <code>CampaignCloneQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCloneQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignCloneQueryAsSubResourceAttributes} The populated <code>CampaignCloneQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CampaignCloneQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignCloneQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('new_name')) obj.newName = _ApiClient.ApiClient.convertToType(data['new_name'], 'String');
      }
      return obj;
    }
  }]);
  return CampaignCloneQueryAsSubResourceAttributes;
}();
/**
 * @member {String} newName
 */
exports.CampaignCloneQueryAsSubResourceAttributes = CampaignCloneQueryAsSubResourceAttributes;
CampaignCloneQueryAsSubResourceAttributes.prototype.newName = undefined;