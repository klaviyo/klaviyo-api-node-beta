"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V2TemplateRenderQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _V2TemplateRenderQueryAsSubResource = require("./V2TemplateRenderQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The V2TemplateRenderQuery model module.
 * @module model/V2TemplateRenderQuery
 * @version 2022-11-14.pre
 */
var V2TemplateRenderQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V2TemplateRenderQuery</code>.
   * @alias module:model/V2TemplateRenderQuery
   * @class
   * @param data {module:model/V2TemplateRenderQueryAsSubResource} 
   */
  function V2TemplateRenderQuery(data) {
    _classCallCheck(this, V2TemplateRenderQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>V2TemplateRenderQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TemplateRenderQuery} obj Optional instance to populate.
   * @return {module:model/V2TemplateRenderQuery} The populated <code>V2TemplateRenderQuery</code> instance.
   */
  _createClass(V2TemplateRenderQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new V2TemplateRenderQuery();
        if (data.hasOwnProperty('data')) obj.data = _V2TemplateRenderQueryAsSubResource.V2TemplateRenderQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return V2TemplateRenderQuery;
}();
/**
 * @member {module:model/V2TemplateRenderQueryAsSubResource} data
 */
exports.V2TemplateRenderQuery = V2TemplateRenderQuery;
V2TemplateRenderQuery.prototype.data = undefined;