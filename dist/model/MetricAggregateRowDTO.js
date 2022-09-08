"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricAggregateRowDTO = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricAggregateRowDTO model module.
 * @module model/MetricAggregateRowDTO
 * @version 2022-09-07.pre
 */
var MetricAggregateRowDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricAggregateRowDTO</code>.
   * @alias module:model/MetricAggregateRowDTO
   * @class
   * @param dimensions {Array.<String>} 
   * @param measurements {Object} 
   */
  function MetricAggregateRowDTO(dimensions, measurements) {
    _classCallCheck(this, MetricAggregateRowDTO);

    this.dimensions = dimensions;
    this.measurements = measurements;
  }
  /**
   * Constructs a <code>MetricAggregateRowDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricAggregateRowDTO} obj Optional instance to populate.
   * @return {module:model/MetricAggregateRowDTO} The populated <code>MetricAggregateRowDTO</code> instance.
   */


  _createClass(MetricAggregateRowDTO, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricAggregateRowDTO();
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _ApiClient.ApiClient.convertToType(data['dimensions'], ['String']);
        if (data.hasOwnProperty('measurements')) obj.measurements = _ApiClient.ApiClient.convertToType(data['measurements'], Object);
      }

      return obj;
    }
  }]);

  return MetricAggregateRowDTO;
}();
/**
 * @member {Array.<String>} dimensions
 */


exports.MetricAggregateRowDTO = MetricAggregateRowDTO;
MetricAggregateRowDTO.prototype.dimensions = undefined;
/**
 * @member {Object} measurements
 */

MetricAggregateRowDTO.prototype.measurements = undefined;