"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignMessagePartialUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignMessagePartialUpdateQueryAsSubResource = require("./CampaignMessagePartialUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignMessagePartialUpdateQuery model module.
 * @module model/CampaignMessagePartialUpdateQuery
 * @version 2022-11-14.pre
 */
var CampaignMessagePartialUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignMessagePartialUpdateQuery</code>.
   * @alias module:model/CampaignMessagePartialUpdateQuery
   * @class
   * @param data {module:model/CampaignMessagePartialUpdateQueryAsSubResource} 
   */
  function CampaignMessagePartialUpdateQuery(data) {
    _classCallCheck(this, CampaignMessagePartialUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignMessagePartialUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessagePartialUpdateQuery} obj Optional instance to populate.
   * @return {module:model/CampaignMessagePartialUpdateQuery} The populated <code>CampaignMessagePartialUpdateQuery</code> instance.
   */
  _createClass(CampaignMessagePartialUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignMessagePartialUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CampaignMessagePartialUpdateQueryAsSubResource.CampaignMessagePartialUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CampaignMessagePartialUpdateQuery;
}();
/**
 * @member {module:model/CampaignMessagePartialUpdateQueryAsSubResource} data
 */
exports.CampaignMessagePartialUpdateQuery = CampaignMessagePartialUpdateQuery;
CampaignMessagePartialUpdateQuery.prototype.data = undefined;