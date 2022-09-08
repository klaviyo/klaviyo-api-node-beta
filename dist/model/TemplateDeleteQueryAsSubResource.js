"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateDeleteQueryAsSubResource = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TemplateDeleteQueryAsSubResource model module.
 * @module model/TemplateDeleteQueryAsSubResource
 * @version 2022-09-07.pre
 */
var TemplateDeleteQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDeleteQueryAsSubResource</code>.
   * @alias module:model/TemplateDeleteQueryAsSubResource
   * @class
   * @param type {module:model/TemplateDeleteQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   */
  function TemplateDeleteQueryAsSubResource(type, id) {
    _classCallCheck(this, TemplateDeleteQueryAsSubResource);

    this.type = type;
    this.id = id;
  }
  /**
   * Constructs a <code>TemplateDeleteQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateDeleteQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TemplateDeleteQueryAsSubResource} The populated <code>TemplateDeleteQueryAsSubResource</code> instance.
   */


  _createClass(TemplateDeleteQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDeleteQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
      }

      return obj;
    }
  }]);

  return TemplateDeleteQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */


exports.TemplateDeleteQueryAsSubResource = TemplateDeleteQueryAsSubResource;
TemplateDeleteQueryAsSubResource.TypeEnum = {
  /**
   * value: "template"
   * @const
   */
  template: "template"
};
/**
 * @member {module:model/TemplateDeleteQueryAsSubResource.TypeEnum} type
 */

TemplateDeleteQueryAsSubResource.prototype.type = undefined;
/**
 * @member {String} id
 */

TemplateDeleteQueryAsSubResource.prototype.id = undefined;