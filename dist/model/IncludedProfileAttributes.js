"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedProfileAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _ProfileLocation = require("./ProfileLocation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The IncludedProfileAttributes model module.
 * @module model/IncludedProfileAttributes
 * @version 2022-12-15.pre
 */
var IncludedProfileAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedProfileAttributes</code>.
   * @alias module:model/IncludedProfileAttributes
   * @class
   */
  function IncludedProfileAttributes() {
    _classCallCheck(this, IncludedProfileAttributes);
  }

  /**
   * Constructs a <code>IncludedProfileAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedProfileAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedProfileAttributes} The populated <code>IncludedProfileAttributes</code> instance.
   */
  _createClass(IncludedProfileAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedProfileAttributes();
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('anonymous_id')) obj.anonymousId = _ApiClient.ApiClient.convertToType(data['anonymous_id'], 'String');
        if (data.hasOwnProperty('first_name')) obj.firstName = _ApiClient.ApiClient.convertToType(data['first_name'], 'String');
        if (data.hasOwnProperty('last_name')) obj.lastName = _ApiClient.ApiClient.convertToType(data['last_name'], 'String');
        if (data.hasOwnProperty('organization')) obj.organization = _ApiClient.ApiClient.convertToType(data['organization'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('image')) obj.image = _ApiClient.ApiClient.convertToType(data['image'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'Date');
        if (data.hasOwnProperty('last_event_date')) obj.lastEventDate = _ApiClient.ApiClient.convertToType(data['last_event_date'], 'Date');
        if (data.hasOwnProperty('location')) obj.location = _ProfileLocation.ProfileLocation.constructFromObject(data['location']);
        if (data.hasOwnProperty('properties')) obj.properties = _ApiClient.ApiClient.convertToType(data['properties'], Object);
      }
      return obj;
    }
  }]);
  return IncludedProfileAttributes;
}();
/**
 * @member {String} email
 */
exports.IncludedProfileAttributes = IncludedProfileAttributes;
IncludedProfileAttributes.prototype.email = undefined;

/**
 * @member {String} phoneNumber
 */
IncludedProfileAttributes.prototype.phoneNumber = undefined;

/**
 * @member {String} externalId
 */
IncludedProfileAttributes.prototype.externalId = undefined;

/**
 * @member {String} anonymousId
 */
IncludedProfileAttributes.prototype.anonymousId = undefined;

/**
 * @member {String} firstName
 */
IncludedProfileAttributes.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
IncludedProfileAttributes.prototype.lastName = undefined;

/**
 * @member {String} organization
 */
IncludedProfileAttributes.prototype.organization = undefined;

/**
 * @member {String} title
 */
IncludedProfileAttributes.prototype.title = undefined;

/**
 * @member {String} image
 */
IncludedProfileAttributes.prototype.image = undefined;

/**
 * @member {Date} created
 */
IncludedProfileAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedProfileAttributes.prototype.updated = undefined;

/**
 * @member {Date} lastEventDate
 */
IncludedProfileAttributes.prototype.lastEventDate = undefined;

/**
 * @member {module:model/ProfileLocation} location
 */
IncludedProfileAttributes.prototype.location = undefined;

/**
 * @member {Object} properties
 */
IncludedProfileAttributes.prototype.properties = undefined;