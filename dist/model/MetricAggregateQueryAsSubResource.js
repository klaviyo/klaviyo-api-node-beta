"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricAggregateQueryAsSubResource = void 0;

var _ApiClient = require("../ApiClient.js");

var _MetricAggregateQueryAsSubResourceAttributes = require("./MetricAggregateQueryAsSubResourceAttributes.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricAggregateQueryAsSubResource model module.
 * @module model/MetricAggregateQueryAsSubResource
 * @version 2022-09-07.pre
 */
var MetricAggregateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricAggregateQueryAsSubResource</code>.
   * @alias module:model/MetricAggregateQueryAsSubResource
   * @class
   * @param id {String} 
   * @param type {module:model/MetricAggregateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/MetricAggregateQueryAsSubResourceAttributes} 
   */
  function MetricAggregateQueryAsSubResource(id, type, attributes) {
    _classCallCheck(this, MetricAggregateQueryAsSubResource);

    this.id = id;
    this.type = type;
    this.attributes = attributes;
  }
  /**
   * Constructs a <code>MetricAggregateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricAggregateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/MetricAggregateQueryAsSubResource} The populated <code>MetricAggregateQueryAsSubResource</code> instance.
   */


  _createClass(MetricAggregateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricAggregateQueryAsSubResource();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _MetricAggregateQueryAsSubResourceAttributes.MetricAggregateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }

      return obj;
    }
  }]);

  return MetricAggregateQueryAsSubResource;
}();
/**
 * @member {String} id
 */


exports.MetricAggregateQueryAsSubResource = MetricAggregateQueryAsSubResource;
MetricAggregateQueryAsSubResource.prototype.id = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

MetricAggregateQueryAsSubResource.TypeEnum = {
  /**
   * value: "metric-aggregate"
   * @const
   */
  metricAggregate: "metric-aggregate"
};
/**
 * @member {module:model/MetricAggregateQueryAsSubResource.TypeEnum} type
 */

MetricAggregateQueryAsSubResource.prototype.type = undefined;
/**
 * @member {module:model/MetricAggregateQueryAsSubResourceAttributes} attributes
 */

MetricAggregateQueryAsSubResource.prototype.attributes = undefined;