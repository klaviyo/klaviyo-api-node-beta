"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateUpdateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TemplateUpdateQueryAsSubResourceAttributes model module.
 * @module model/TemplateUpdateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
var TemplateUpdateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/TemplateUpdateQueryAsSubResourceAttributes
   * @class
   */
  function TemplateUpdateQueryAsSubResourceAttributes() {
    _classCallCheck(this, TemplateUpdateQueryAsSubResourceAttributes);
  }

  /**
   * Constructs a <code>TemplateUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQueryAsSubResourceAttributes} The populated <code>TemplateUpdateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(TemplateUpdateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateUpdateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('html')) obj.html = _ApiClient.ApiClient.convertToType(data['html'], 'String');
        if (data.hasOwnProperty('text')) obj.text = _ApiClient.ApiClient.convertToType(data['text'], 'String');
        if (data.hasOwnProperty('return_fields')) obj.returnFields = _ApiClient.ApiClient.convertToType(data['return_fields'], ['String']);
      }
      return obj;
    }
  }]);
  return TemplateUpdateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} name
 */
exports.TemplateUpdateQueryAsSubResourceAttributes = TemplateUpdateQueryAsSubResourceAttributes;
TemplateUpdateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * @member {String} html
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.html = undefined;

/**
 * @member {String} text
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.text = undefined;

/**
 * @member {Array.<String>} returnFields
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.returnFields = undefined;