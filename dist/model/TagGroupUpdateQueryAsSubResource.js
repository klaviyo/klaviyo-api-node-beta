"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagGroupUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _TagGroupUpdateQueryAsSubResourceAttributes = require("./TagGroupUpdateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TagGroupUpdateQueryAsSubResource model module.
 * @module model/TagGroupUpdateQueryAsSubResource
 * @version 2022-11-14.pre
 */
var TagGroupUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagGroupUpdateQueryAsSubResource</code>.
   * @alias module:model/TagGroupUpdateQueryAsSubResource
   * @class
   * @param type {module:model/TagGroupUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/TagGroupUpdateQueryAsSubResourceAttributes} 
   */
  function TagGroupUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, TagGroupUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TagGroupUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TagGroupUpdateQueryAsSubResource} The populated <code>TagGroupUpdateQueryAsSubResource</code> instance.
   */
  _createClass(TagGroupUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagGroupUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _TagGroupUpdateQueryAsSubResourceAttributes.TagGroupUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return TagGroupUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.TagGroupUpdateQueryAsSubResource = TagGroupUpdateQueryAsSubResource;
TagGroupUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "tag-group"
   * @const
   */
  tagGroup: "tag-group"
};
/**
 * @member {module:model/TagGroupUpdateQueryAsSubResource.TypeEnum} type
 */
TagGroupUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
TagGroupUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/TagGroupUpdateQueryAsSubResourceAttributes} attributes
 */
TagGroupUpdateQueryAsSubResource.prototype.attributes = undefined;