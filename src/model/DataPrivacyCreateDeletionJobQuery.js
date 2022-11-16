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
import {DataPrivacyCreateDeletionJobQueryAsSubResource} from './DataPrivacyCreateDeletionJobQueryAsSubResource.js';

/**
 * The DataPrivacyCreateDeletionJobQuery model module.
 * @module model/DataPrivacyCreateDeletionJobQuery
 * @version 2022-11-14.pre
 */
export class DataPrivacyCreateDeletionJobQuery {
  /**
   * Constructs a new <code>DataPrivacyCreateDeletionJobQuery</code>.
   * @alias module:model/DataPrivacyCreateDeletionJobQuery
   * @class
   * @param data {module:model/DataPrivacyCreateDeletionJobQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>DataPrivacyCreateDeletionJobQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataPrivacyCreateDeletionJobQuery} obj Optional instance to populate.
   * @return {module:model/DataPrivacyCreateDeletionJobQuery} The populated <code>DataPrivacyCreateDeletionJobQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DataPrivacyCreateDeletionJobQuery();
      if (data.hasOwnProperty('data'))
        obj.data = DataPrivacyCreateDeletionJobQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DataPrivacyCreateDeletionJobQueryAsSubResource} data
 */
DataPrivacyCreateDeletionJobQuery.prototype.data = undefined;
