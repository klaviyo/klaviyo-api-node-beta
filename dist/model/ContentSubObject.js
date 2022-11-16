"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ContentSubObject model module.
 * @module model/ContentSubObject
 * @version 2022-11-14.pre
 */
var ContentSubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContentSubObject</code>.
   * @alias module:model/ContentSubObject
   * @class
   */
  function ContentSubObject() {
    _classCallCheck(this, ContentSubObject);
  }

  /**
   * Constructs a <code>ContentSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentSubObject} obj Optional instance to populate.
   * @return {module:model/ContentSubObject} The populated <code>ContentSubObject</code> instance.
   */
  _createClass(ContentSubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContentSubObject();
        if (data.hasOwnProperty('subject')) obj.subject = _ApiClient.ApiClient.convertToType(data['subject'], 'String');
        if (data.hasOwnProperty('preview_text')) obj.previewText = _ApiClient.ApiClient.convertToType(data['preview_text'], 'String');
        if (data.hasOwnProperty('from_email')) obj.fromEmail = _ApiClient.ApiClient.convertToType(data['from_email'], 'String');
        if (data.hasOwnProperty('from_label')) obj.fromLabel = _ApiClient.ApiClient.convertToType(data['from_label'], 'String');
        if (data.hasOwnProperty('template_id')) obj.templateId = _ApiClient.ApiClient.convertToType(data['template_id'], 'String');
      }
      return obj;
    }
  }]);
  return ContentSubObject;
}();
/**
 * @member {String} subject
 */
exports.ContentSubObject = ContentSubObject;
ContentSubObject.prototype.subject = undefined;

/**
 * @member {String} previewText
 */
ContentSubObject.prototype.previewText = undefined;

/**
 * @member {String} fromEmail
 */
ContentSubObject.prototype.fromEmail = undefined;

/**
 * @member {String} fromLabel
 */
ContentSubObject.prototype.fromLabel = undefined;

/**
 * @member {String} templateId
 */
ContentSubObject.prototype.templateId = undefined;