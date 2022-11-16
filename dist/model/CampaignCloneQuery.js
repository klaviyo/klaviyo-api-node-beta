"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignCloneQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignCloneQueryAsSubResource = require("./CampaignCloneQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignCloneQuery model module.
 * @module model/CampaignCloneQuery
 * @version 2022-11-14.pre
 */
var CampaignCloneQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignCloneQuery</code>.
   * @alias module:model/CampaignCloneQuery
   * @class
   * @param data {module:model/CampaignCloneQueryAsSubResource} 
   */
  function CampaignCloneQuery(data) {
    _classCallCheck(this, CampaignCloneQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignCloneQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCloneQuery} obj Optional instance to populate.
   * @return {module:model/CampaignCloneQuery} The populated <code>CampaignCloneQuery</code> instance.
   */
  _createClass(CampaignCloneQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignCloneQuery();
        if (data.hasOwnProperty('data')) obj.data = _CampaignCloneQueryAsSubResource.CampaignCloneQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CampaignCloneQuery;
}();
/**
 * @member {module:model/CampaignCloneQueryAsSubResource} data
 */
exports.CampaignCloneQuery = CampaignCloneQuery;
CampaignCloneQuery.prototype.data = undefined;