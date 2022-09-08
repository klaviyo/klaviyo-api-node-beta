"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateRenderQueryAsSubResource = void 0;

var _ApiClient = require("../ApiClient.js");

var _TemplateRenderQueryAsSubResourceAttributes = require("./TemplateRenderQueryAsSubResourceAttributes.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TemplateRenderQueryAsSubResource model module.
 * @module model/TemplateRenderQueryAsSubResource
 * @version 2022-09-07.pre
 */
var TemplateRenderQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateRenderQueryAsSubResource</code>.
   * @alias module:model/TemplateRenderQueryAsSubResource
   * @class
   * @param type {module:model/TemplateRenderQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/TemplateRenderQueryAsSubResourceAttributes} 
   */
  function TemplateRenderQueryAsSubResource(type, attributes) {
    _classCallCheck(this, TemplateRenderQueryAsSubResource);

    this.type = type;
    this.attributes = attributes;
  }
  /**
   * Constructs a <code>TemplateRenderQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateRenderQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TemplateRenderQueryAsSubResource} The populated <code>TemplateRenderQueryAsSubResource</code> instance.
   */


  _createClass(TemplateRenderQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateRenderQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _TemplateRenderQueryAsSubResourceAttributes.TemplateRenderQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }

      return obj;
    }
  }]);

  return TemplateRenderQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */


exports.TemplateRenderQueryAsSubResource = TemplateRenderQueryAsSubResource;
TemplateRenderQueryAsSubResource.TypeEnum = {
  /**
   * value: "template"
   * @const
   */
  template: "template"
};
/**
 * @member {module:model/TemplateRenderQueryAsSubResource.TypeEnum} type
 */

TemplateRenderQueryAsSubResource.prototype.type = undefined;
/**
 * @member {module:model/TemplateRenderQueryAsSubResourceAttributes} attributes
 */

TemplateRenderQueryAsSubResource.prototype.attributes = undefined;