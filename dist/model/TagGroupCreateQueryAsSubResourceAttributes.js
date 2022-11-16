"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagGroupCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TagGroupCreateQueryAsSubResourceAttributes model module.
 * @module model/TagGroupCreateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
var TagGroupCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagGroupCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/TagGroupCreateQueryAsSubResourceAttributes
   * @class
   * @param name {String} 
   */
  function TagGroupCreateQueryAsSubResourceAttributes(name) {
    _classCallCheck(this, TagGroupCreateQueryAsSubResourceAttributes);
    this.name = name;
  }

  /**
   * Constructs a <code>TagGroupCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/TagGroupCreateQueryAsSubResourceAttributes} The populated <code>TagGroupCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(TagGroupCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagGroupCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('exclusive')) obj.exclusive = _ApiClient.ApiClient.convertToType(data['exclusive'], 'Boolean');
      }
      return obj;
    }
  }]);
  return TagGroupCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} name
 */
exports.TagGroupCreateQueryAsSubResourceAttributes = TagGroupCreateQueryAsSubResourceAttributes;
TagGroupCreateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * @member {Boolean} exclusive
 */
TagGroupCreateQueryAsSubResourceAttributes.prototype.exclusive = undefined;