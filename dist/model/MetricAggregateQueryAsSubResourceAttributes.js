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
 * @version 2022-09-07.pre
 */
var MetricAggregateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricAggregateQueryAsSubResourceAttributes</code>.
   * @alias module:model/MetricAggregateQueryAsSubResourceAttributes
   * @class
   * @param metricId {String} 
   * @param measurements {Array.<module:model/MetricAggregateQueryAsSubResourceAttributes.MeasurementsEnum>} 
   * @param interval {module:model/MetricAggregateQueryAsSubResourceAttributes.IntervalEnum} 
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
        if (data.hasOwnProperty('sort')) obj.sort = _ApiClient.ApiClient.convertToType(data['sort'], 'String');
        if (data.hasOwnProperty('page_cursor')) obj.pageCursor = _ApiClient.ApiClient.convertToType(data['page_cursor'], 'String');
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
   * value: "Campaign Name"
   * @const
   */
  campaignName: "Campaign Name",

  /**
   * value: "Email Domain"
   * @const
   */
  emailDomain: "Email Domain",

  /**
   * value: "List"
   * @const
   */
  list: "List",

  /**
   * value: "Subject"
   * @const
   */
  subject: "Subject",

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
/**
 * Allowed values for the <code>sort</code> property.
 * @enum {String}
 * @readonly
 */

MetricAggregateQueryAsSubResourceAttributes.SortEnum = {
  /**
   * value: "$campaign_channel"
   * @const
   */
  campaignChannel: "$campaign_channel",

  /**
   * value: "-$campaign_channel"
   * @const
   */
  campaignChannel_1: "-$campaign_channel",

  /**
   * value: "$flow"
   * @const
   */
  flow: "$flow",

  /**
   * value: "-$flow"
   * @const
   */
  flow_3: "-$flow",

  /**
   * value: "$flow_channel"
   * @const
   */
  flowChannel: "$flow_channel",

  /**
   * value: "-$flow_channel"
   * @const
   */
  flowChannel_5: "-$flow_channel",

  /**
   * value: "$message"
   * @const
   */
  message: "$message",

  /**
   * value: "-$message"
   * @const
   */
  message_7: "-$message",

  /**
   * value: "$message_send_cohort"
   * @const
   */
  messageSendCohort: "$message_send_cohort",

  /**
   * value: "-$message_send_cohort"
   * @const
   */
  messageSendCohort_9: "-$message_send_cohort",

  /**
   * value: "$variation"
   * @const
   */
  variation: "$variation",

  /**
   * value: "-$variation"
   * @const
   */
  variation_11: "-$variation",

  /**
   * value: "$variation_send_cohort"
   * @const
   */
  variationSendCohort: "$variation_send_cohort",

  /**
   * value: "-$variation_send_cohort"
   * @const
   */
  variationSendCohort_13: "-$variation_send_cohort",

  /**
   * value: "Campaign Name"
   * @const
   */
  campaignName: "Campaign Name",

  /**
   * value: "-Campaign Name"
   * @const
   */
  campaignName_15: "-Campaign Name",

  /**
   * value: "Email Domain"
   * @const
   */
  emailDomain: "Email Domain",

  /**
   * value: "-Email Domain"
   * @const
   */
  emailDomain_17: "-Email Domain",

  /**
   * value: "List"
   * @const
   */
  list: "List",

  /**
   * value: "-List"
   * @const
   */
  list_19: "-List",

  /**
   * value: "Subject"
   * @const
   */
  subject: "Subject",

  /**
   * value: "-Subject"
   * @const
   */
  subject_21: "-Subject",

  /**
   * value: "URL"
   * @const
   */
  URL: "URL",

  /**
   * value: "-URL"
   * @const
   */
  _URL: "-URL",

  /**
   * value: "count"
   * @const
   */
  count: "count",

  /**
   * value: "-count"
   * @const
   */
  count_25: "-count",

  /**
   * value: "form_id"
   * @const
   */
  formId: "form_id",

  /**
   * value: "-form_id"
   * @const
   */
  formId_27: "-form_id",

  /**
   * value: "sum_value"
   * @const
   */
  sumValue: "sum_value",

  /**
   * value: "-sum_value"
   * @const
   */
  sumValue_29: "-sum_value",

  /**
   * value: "unique"
   * @const
   */
  unique: "unique",

  /**
   * value: "-unique"
   * @const
   */
  unique_31: "-unique"
};
/**
 * @member {module:model/MetricAggregateQueryAsSubResourceAttributes.SortEnum} sort
 */

MetricAggregateQueryAsSubResourceAttributes.prototype.sort = undefined;
/**
 * @member {String} pageCursor
 */

MetricAggregateQueryAsSubResourceAttributes.prototype.pageCursor = undefined;