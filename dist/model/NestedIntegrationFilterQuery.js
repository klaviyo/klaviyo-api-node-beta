"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NestedIntegrationFilterQuery = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NestedIntegrationFilterQuery model module.
 * @module model/NestedIntegrationFilterQuery
 * @version 2022-09-07.pre
 */
var NestedIntegrationFilterQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NestedIntegrationFilterQuery</code>.
   * @alias module:model/NestedIntegrationFilterQuery
   * @class
   */
  function NestedIntegrationFilterQuery() {
    _classCallCheck(this, NestedIntegrationFilterQuery);
  }
  /**
   * Constructs a <code>NestedIntegrationFilterQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NestedIntegrationFilterQuery} obj Optional instance to populate.
   * @return {module:model/NestedIntegrationFilterQuery} The populated <code>NestedIntegrationFilterQuery</code> instance.
   */


  _createClass(NestedIntegrationFilterQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NestedIntegrationFilterQuery();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('category')) obj.category = _ApiClient.ApiClient.convertToType(data['category'], 'String');
      }

      return obj;
    }
  }]);

  return NestedIntegrationFilterQuery;
}();
/**
 * @member {String} name
 */


exports.NestedIntegrationFilterQuery = NestedIntegrationFilterQuery;
NestedIntegrationFilterQuery.prototype.name = undefined;
/**
 * @member {String} category
 */

NestedIntegrationFilterQuery.prototype.category = undefined;