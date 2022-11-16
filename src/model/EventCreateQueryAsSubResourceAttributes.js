/*
 * Klaviyo API (Beta)
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-11-14.pre
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {MetricCreateQuery} from './MetricCreateQuery.js';

/**
 * The EventCreateQueryAsSubResourceAttributes model module.
 * @module model/EventCreateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
export class EventCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>EventCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/EventCreateQueryAsSubResourceAttributes
   * @class
   * @param profile {Object} 
   * @param metric {module:model/MetricCreateQuery} 
   * @param properties {Object} 
   */
  constructor(profile, metric, properties) {
    this.profile = profile;
    this.metric = metric;
    this.properties = properties;
  }

  /**
   * Constructs a <code>EventCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/EventCreateQueryAsSubResourceAttributes} The populated <code>EventCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('profile'))
        obj.profile = ApiClient.convertToType(data['profile'], Object);
      if (data.hasOwnProperty('metric'))
        obj.metric = MetricCreateQuery.constructFromObject(data['metric']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], Object);
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('unique_id'))
        obj.uniqueId = ApiClient.convertToType(data['unique_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Object} profile
 */
EventCreateQueryAsSubResourceAttributes.prototype.profile = undefined;

/**
 * @member {module:model/MetricCreateQuery} metric
 */
EventCreateQueryAsSubResourceAttributes.prototype.metric = undefined;

/**
 * @member {Object} properties
 */
EventCreateQueryAsSubResourceAttributes.prototype.properties = undefined;

/**
 * @member {Date} time
 */
EventCreateQueryAsSubResourceAttributes.prototype.time = undefined;

/**
 * @member {Number} value
 */
EventCreateQueryAsSubResourceAttributes.prototype.value = undefined;

/**
 * @member {String} uniqueId
 */
EventCreateQueryAsSubResourceAttributes.prototype.uniqueId = undefined;

