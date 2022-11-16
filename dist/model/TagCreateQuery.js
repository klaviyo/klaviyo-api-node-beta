"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _TagCreateQueryAsSubResource = require("./TagCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TagCreateQuery model module.
 * @module model/TagCreateQuery
 * @version 2022-11-14.pre
 */
var TagCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagCreateQuery</code>.
   * @alias module:model/TagCreateQuery
   * @class
   * @param data {module:model/TagCreateQueryAsSubResource} 
   */
  function TagCreateQuery(data) {
    _classCallCheck(this, TagCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>TagCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagCreateQuery} obj Optional instance to populate.
   * @return {module:model/TagCreateQuery} The populated <code>TagCreateQuery</code> instance.
   */
  _createClass(TagCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _TagCreateQueryAsSubResource.TagCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return TagCreateQuery;
}();
/**
 * @member {module:model/TagCreateQueryAsSubResource} data
 */
exports.TagCreateQuery = TagCreateQuery;
TagCreateQuery.prototype.data = undefined;