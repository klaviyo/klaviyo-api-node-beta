"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _ListCreateQueryAsSubResourceAttributes = require("./ListCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TagUpdateQueryAsSubResource model module.
 * @module model/TagUpdateQueryAsSubResource
 * @version 2022-11-14.pre
 */
var TagUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagUpdateQueryAsSubResource</code>.
   * @alias module:model/TagUpdateQueryAsSubResource
   * @class
   * @param type {module:model/TagUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/ListCreateQueryAsSubResourceAttributes} 
   */
  function TagUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, TagUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TagUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TagUpdateQueryAsSubResource} The populated <code>TagUpdateQueryAsSubResource</code> instance.
   */
  _createClass(TagUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _ListCreateQueryAsSubResourceAttributes.ListCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return TagUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.TagUpdateQueryAsSubResource = TagUpdateQueryAsSubResource;
TagUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "tag"
   * @const
   */
  tag: "tag"
};
/**
 * @member {module:model/TagUpdateQueryAsSubResource.TypeEnum} type
 */
TagUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
TagUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/ListCreateQueryAsSubResourceAttributes} attributes
 */
TagUpdateQueryAsSubResource.prototype.attributes = undefined;