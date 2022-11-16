"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagGroupUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _TagGroupUpdateQueryAsSubResource = require("./TagGroupUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TagGroupUpdateQuery model module.
 * @module model/TagGroupUpdateQuery
 * @version 2022-11-14.pre
 */
var TagGroupUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagGroupUpdateQuery</code>.
   * @alias module:model/TagGroupUpdateQuery
   * @class
   * @param data {module:model/TagGroupUpdateQueryAsSubResource} 
   */
  function TagGroupUpdateQuery(data) {
    _classCallCheck(this, TagGroupUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>TagGroupUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupUpdateQuery} obj Optional instance to populate.
   * @return {module:model/TagGroupUpdateQuery} The populated <code>TagGroupUpdateQuery</code> instance.
   */
  _createClass(TagGroupUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagGroupUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _TagGroupUpdateQueryAsSubResource.TagGroupUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return TagGroupUpdateQuery;
}();
/**
 * @member {module:model/TagGroupUpdateQueryAsSubResource} data
 */
exports.TagGroupUpdateQuery = TagGroupUpdateQuery;
TagGroupUpdateQuery.prototype.data = undefined;