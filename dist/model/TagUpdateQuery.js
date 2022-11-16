"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _TagUpdateQueryAsSubResource = require("./TagUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TagUpdateQuery model module.
 * @module model/TagUpdateQuery
 * @version 2022-11-14.pre
 */
var TagUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagUpdateQuery</code>.
   * @alias module:model/TagUpdateQuery
   * @class
   * @param data {module:model/TagUpdateQueryAsSubResource} 
   */
  function TagUpdateQuery(data) {
    _classCallCheck(this, TagUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>TagUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagUpdateQuery} obj Optional instance to populate.
   * @return {module:model/TagUpdateQuery} The populated <code>TagUpdateQuery</code> instance.
   */
  _createClass(TagUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _TagUpdateQueryAsSubResource.TagUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return TagUpdateQuery;
}();
/**
 * @member {module:model/TagUpdateQueryAsSubResource} data
 */
exports.TagUpdateQuery = TagUpdateQuery;
TagUpdateQuery.prototype.data = undefined;