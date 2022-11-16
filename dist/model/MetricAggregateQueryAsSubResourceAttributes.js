"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricAggregateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The MetricAggregateQueryAsSubResourceAttributes model module.
 * @module model/MetricAggregateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
var MetricAggregateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricAggregateQueryAsSubResourceAttributes</code>.
   * @alias module:model/MetricAggregateQueryAsSubResourceAttributes
   * @class
   * @param metricId {String} 
   * @param measurements {Array.<module:model/MetricAggregateQueryAsSubResourceAttributes.MeasurementsEnum>} 
   * @param interval {module:model/MetricAggregateQueryAsSubResourceAttributes.IntervalEnum} Supported intervals for bucketing query results by time
   * @param filter {Array.<String>} 
   * @param timezone {String} 
   */
  function MetricAggregateQueryAsSubResourceAttributes(metricId, measurements, interval, filter, timezone) {
    _classCallCheck(this, MetricAggregateQueryAsSubResourceAttributes);
    this.metricId = metricId;
    this.measurements = measurements;
    this.interval = interval;
    this.filter = filter;
    this.timezone = timezone;
  }

  /**
   * Constructs a <code>MetricAggregateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricAggregateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/MetricAggregateQueryAsSubResourceAttributes} The populated <code>MetricAggregateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(MetricAggregateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricAggregateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('metric_id')) obj.metricId = _ApiClient.ApiClient.convertToType(data['metric_id'], 'String');
        if (data.hasOwnProperty('measurements')) obj.measurements = _ApiClient.ApiClient.convertToType(data['measurements'], ['String']);
        if (data.hasOwnProperty('interval')) obj.interval = _ApiClient.ApiClient.convertToType(data['interval'], 'String');
        if (data.hasOwnProperty('page_size')) obj.pageSize = _ApiClient.ApiClient.convertToType(data['page_size'], 'Number');
        if (data.hasOwnProperty('by')) obj.by = _ApiClient.ApiClient.convertToType(data['by'], ['String']);
        if (data.hasOwnProperty('return_fields')) obj.returnFields = _ApiClient.ApiClient.convertToType(data['return_fields'], ['String']);
        if (data.hasOwnProperty('filter')) obj.filter = _ApiClient.ApiClient.convertToType(data['filter'], ['String']);
        if (data.hasOwnProperty('timezone')) obj.timezone = _ApiClient.ApiClient.convertToType(data['timezone'], 'String');
      }
      return obj;
    }
  }]);
  return MetricAggregateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} metricId
 */
exports.MetricAggregateQueryAsSubResourceAttributes = MetricAggregateQueryAsSubResourceAttributes;
MetricAggregateQueryAsSubResourceAttributes.prototype.metricId = undefined;

/**
 * Allowed values for the <code>measurements</code> property.
 * @enum {String}
 * @readonly
 */
MetricAggregateQueryAsSubResourceAttributes.MeasurementsEnum = {
  /**
   * value: "count"
   * @const
   */
  count: "count",
  /**
   * value: "sum_value"
   * @const
   */
  sumValue: "sum_value",
  /**
   * value: "unique"
   * @const
   */
  unique: "unique"
};
/**
 * @member {Array.<module:model/MetricAggregateQueryAsSubResourceAttributes.MeasurementsEnum>} measurements
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.measurements = undefined;

/**
 * Allowed values for the <code>interval</code> property.
 * @enum {String}
 * @readonly
 */
MetricAggregateQueryAsSubResourceAttributes.IntervalEnum = {
  /**
   * value: "day"
   * @const
   */
  day: "day",
  /**
   * value: "hour"
   * @const
   */
  hour: "hour",
  /**
   * value: "month"
   * @const
   */
  month: "month",
  /**
   * value: "week"
   * @const
   */
  week: "week"
};
/**
 * Supported intervals for bucketing query results by time
 * @member {module:model/MetricAggregateQueryAsSubResourceAttributes.IntervalEnum} interval
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.interval = undefined;

/**
 * @member {Number} pageSize
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.pageSize = undefined;

/**
 * Allowed values for the <code>by</code> property.
 * @enum {String}
 * @readonly
 */
MetricAggregateQueryAsSubResourceAttributes.ByEnum = {
  /**
   * value: "$attributed_channel"
   * @const
   */
  attributedChannel: "$attributed_channel",
  /**
   * value: "$attributed_flow"
   * @const
   */
  attributedFlow: "$attributed_flow",
  /**
   * value: "$attributed_message"
   * @const
   */
  attributedMessage: "$attributed_message",
  /**
   * value: "$attributed_variation"
   * @const
   */
  attributedVariation: "$attributed_variation",
  /**
   * value: "$campaign_channel"
   * @const
   */
  campaignChannel: "$campaign_channel",
  /**
   * value: "$flow"
   * @const
   */
  flow: "$flow",
  /**
   * value: "$flow_channel"
   * @const
   */
  flowChannel: "$flow_channel",
  /**
   * value: "$message"
   * @const
   */
  message: "$message",
  /**
   * value: "$message_send_cohort"
   * @const
   */
  messageSendCohort: "$message_send_cohort",
  /**
   * value: "$variation"
   * @const
   */
  variation: "$variation",
  /**
   * value: "$variation_send_cohort"
   * @const
   */
  variationSendCohort: "$variation_send_cohort",
  /**
   * value: "Bounce Type"
   * @const
   */
  bounceType: "Bounce Type",
  /**
   * value: "Campaign Name"
   * @const
   */
  campaignName: "Campaign Name",
  /**
   * value: "Client Canonical"
   * @const
   */
  clientCanonical: "Client Canonical",
  /**
   * value: "Client Name"
   * @const
   */
  clientName: "Client Name",
  /**
   * value: "Client Type"
   * @const
   */
  clientType: "Client Type",
  /**
   * value: "Email Domain"
   * @const
   */
  emailDomain: "Email Domain",
  /**
   * value: "Failure Source"
   * @const
   */
  failureSource: "Failure Source",
  /**
   * value: "Failure Type"
   * @const
   */
  failureType: "Failure Type",
  /**
   * value: "From Number"
   * @const
   */
  fromNumber: "From Number",
  /**
   * value: "From Phone Region"
   * @const
   */
  fromPhoneRegion: "From Phone Region",
  /**
   * value: "List"
   * @const
   */
  list: "List",
  /**
   * value: "Message Name"
   * @const
   */
  messageName: "Message Name",
  /**
   * value: "Message Type"
   * @const
   */
  messageType: "Message Type",
  /**
   * value: "Method"
   * @const
   */
  method: "Method",
  /**
   * value: "Subject"
   * @const
   */
  subject: "Subject",
  /**
   * value: "To Number"
   * @const
   */
  toNumber: "To Number",
  /**
   * value: "To Phone Region"
   * @const
   */
  toPhoneRegion: "To Phone Region",
  /**
   * value: "URL"
   * @const
   */
  URL: "URL",
  /**
   * value: "form_id"
   * @const
   */
  formId: "form_id"
};
/**
 * @member {Array.<module:model/MetricAggregateQueryAsSubResourceAttributes.ByEnum>} by
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.by = undefined;

/**
 * @member {Array.<String>} returnFields
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.returnFields = undefined;

/**
 * @member {Array.<String>} filter
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.filter = undefined;

/**
 * @member {String} timezone
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.timezone = undefined;