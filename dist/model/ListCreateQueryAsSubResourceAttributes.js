"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCreateQueryAsSubResourceAttributes = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListCreateQueryAsSubResourceAttributes model module.
 * @module model/ListCreateQueryAsSubResourceAttributes
 * @version 2022-09-07.pre
 */
var ListCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/ListCreateQueryAsSubResourceAttributes
   * @class
   * @param name {String} 
   */
  function ListCreateQueryAsSubResourceAttributes(name) {
    _classCallCheck(this, ListCreateQueryAsSubResourceAttributes);

    this.name = name;
  }
  /**
   * Constructs a <code>ListCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/ListCreateQueryAsSubResourceAttributes} The populated <code>ListCreateQueryAsSubResourceAttributes</code> instance.
   */


  _createClass(ListCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
      }

      return obj;
    }
  }]);

  return ListCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} name
 */


exports.ListCreateQueryAsSubResourceAttributes = ListCreateQueryAsSubResourceAttributes;
ListCreateQueryAsSubResourceAttributes.prototype.name = undefined;