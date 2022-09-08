"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedVariantsLinks = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The IncludedVariantsLinks model module.
 * @module model/IncludedVariantsLinks
 * @version 2022-09-07.pre
 */
var IncludedVariantsLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedVariantsLinks</code>.
   * @alias module:model/IncludedVariantsLinks
   * @class
   * @param self {String} 
   */
  function IncludedVariantsLinks(self) {
    _classCallCheck(this, IncludedVariantsLinks);

    this.self = self;
  }
  /**
   * Constructs a <code>IncludedVariantsLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedVariantsLinks} obj Optional instance to populate.
   * @return {module:model/IncludedVariantsLinks} The populated <code>IncludedVariantsLinks</code> instance.
   */


  _createClass(IncludedVariantsLinks, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedVariantsLinks();
        if (data.hasOwnProperty('self')) obj.self = _ApiClient.ApiClient.convertToType(data['self'], 'String');
      }

      return obj;
    }
  }]);

  return IncludedVariantsLinks;
}();
/**
 * @member {String} self
 */


exports.IncludedVariantsLinks = IncludedVariantsLinks;
IncludedVariantsLinks.prototype.self = undefined;