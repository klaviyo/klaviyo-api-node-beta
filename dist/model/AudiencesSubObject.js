"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudiencesSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The AudiencesSubObject model module.
 * @module model/AudiencesSubObject
 * @version 2022-11-14.pre
 */
var AudiencesSubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AudiencesSubObject</code>.
   * @alias module:model/AudiencesSubObject
   * @class
   */
  function AudiencesSubObject() {
    _classCallCheck(this, AudiencesSubObject);
  }

  /**
   * Constructs a <code>AudiencesSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudiencesSubObject} obj Optional instance to populate.
   * @return {module:model/AudiencesSubObject} The populated <code>AudiencesSubObject</code> instance.
   */
  _createClass(AudiencesSubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AudiencesSubObject();
        if (data.hasOwnProperty('included')) obj.included = _ApiClient.ApiClient.convertToType(data['included'], ['String']);
        if (data.hasOwnProperty('excluded')) obj.excluded = _ApiClient.ApiClient.convertToType(data['excluded'], ['String']);
      }
      return obj;
    }
  }]);
  return AudiencesSubObject;
}();
/**
 * @member {Array.<String>} included
 */
exports.AudiencesSubObject = AudiencesSubObject;
AudiencesSubObject.prototype.included = undefined;

/**
 * @member {Array.<String>} excluded
 */
AudiencesSubObject.prototype.excluded = undefined;