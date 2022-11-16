"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagGroupCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _TagGroupCreateQueryAsSubResource = require("./TagGroupCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TagGroupCreateQuery model module.
 * @module model/TagGroupCreateQuery
 * @version 2022-11-14.pre
 */
var TagGroupCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagGroupCreateQuery</code>.
   * @alias module:model/TagGroupCreateQuery
   * @class
   * @param data {module:model/TagGroupCreateQueryAsSubResource} 
   */
  function TagGroupCreateQuery(data) {
    _classCallCheck(this, TagGroupCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>TagGroupCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupCreateQuery} obj Optional instance to populate.
   * @return {module:model/TagGroupCreateQuery} The populated <code>TagGroupCreateQuery</code> instance.
   */
  _createClass(TagGroupCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagGroupCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _TagGroupCreateQueryAsSubResource.TagGroupCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return TagGroupCreateQuery;
}();
/**
 * @member {module:model/TagGroupCreateQueryAsSubResource} data
 */
exports.TagGroupCreateQuery = TagGroupCreateQuery;
TagGroupCreateQuery.prototype.data = undefined;