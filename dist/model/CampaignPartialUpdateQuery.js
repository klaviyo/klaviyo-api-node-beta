"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignPartialUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignPartialUpdateQueryAsSubResource = require("./CampaignPartialUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignPartialUpdateQuery model module.
 * @module model/CampaignPartialUpdateQuery
 * @version 2022-11-14.pre
 */
var CampaignPartialUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignPartialUpdateQuery</code>.
   * @alias module:model/CampaignPartialUpdateQuery
   * @class
   * @param data {module:model/CampaignPartialUpdateQueryAsSubResource} 
   */
  function CampaignPartialUpdateQuery(data) {
    _classCallCheck(this, CampaignPartialUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignPartialUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignPartialUpdateQuery} obj Optional instance to populate.
   * @return {module:model/CampaignPartialUpdateQuery} The populated <code>CampaignPartialUpdateQuery</code> instance.
   */
  _createClass(CampaignPartialUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignPartialUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CampaignPartialUpdateQueryAsSubResource.CampaignPartialUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CampaignPartialUpdateQuery;
}();
/**
 * @member {module:model/CampaignPartialUpdateQueryAsSubResource} data
 */
exports.CampaignPartialUpdateQuery = CampaignPartialUpdateQuery;
CampaignPartialUpdateQuery.prototype.data = undefined;