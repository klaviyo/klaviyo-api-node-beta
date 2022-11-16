"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignCreateQueryAsSubResource = require("./CampaignCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CampaignCreateQuery model module.
 * @module model/CampaignCreateQuery
 * @version 2022-11-14.pre
 */
var CampaignCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignCreateQuery</code>.
   * @alias module:model/CampaignCreateQuery
   * @class
   * @param data {module:model/CampaignCreateQueryAsSubResource} 
   */
  function CampaignCreateQuery(data) {
    _classCallCheck(this, CampaignCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCreateQuery} obj Optional instance to populate.
   * @return {module:model/CampaignCreateQuery} The populated <code>CampaignCreateQuery</code> instance.
   */
  _createClass(CampaignCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CampaignCreateQueryAsSubResource.CampaignCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CampaignCreateQuery;
}();
/**
 * @member {module:model/CampaignCreateQueryAsSubResource} data
 */
exports.CampaignCreateQuery = CampaignCreateQuery;
CampaignCreateQuery.prototype.data = undefined;