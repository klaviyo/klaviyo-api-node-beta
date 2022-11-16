"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _TagCreateQueryAsSubResourceAttributes = require("./TagCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TagCreateQueryAsSubResource model module.
 * @module model/TagCreateQueryAsSubResource
 * @version 2022-11-14.pre
 */
var TagCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagCreateQueryAsSubResource</code>.
   * @alias module:model/TagCreateQueryAsSubResource
   * @class
   * @param type {module:model/TagCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/TagCreateQueryAsSubResourceAttributes} 
   */
  function TagCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, TagCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TagCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TagCreateQueryAsSubResource} The populated <code>TagCreateQueryAsSubResource</code> instance.
   */
  _createClass(TagCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _TagCreateQueryAsSubResourceAttributes.TagCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return TagCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.TagCreateQueryAsSubResource = TagCreateQueryAsSubResource;
TagCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "tag"
   * @const
   */
  tag: "tag"
};
/**
 * @member {module:model/TagCreateQueryAsSubResource.TypeEnum} type
 */
TagCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/TagCreateQueryAsSubResourceAttributes} attributes
 */
TagCreateQueryAsSubResource.prototype.attributes = undefined;