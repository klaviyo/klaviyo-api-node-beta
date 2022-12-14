/*
 * Klaviyo API (Beta)
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-12-15.pre
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

/**
 * The DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes model module.
 * @module model/DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes
 * @version 2022-12-15.pre
 */
export class DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes</code>.
   * @alias module:model/DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes} The populated <code>DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('profile_id'))
        obj.profileId = ApiClient.convertToType(data['profile_id'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone_number'))
        obj.phoneNumber = ApiClient.convertToType(data['phone_number'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} profileId
 */
DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes.prototype.profileId = undefined;

/**
 * @member {String} email
 */
DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes.prototype.email = undefined;

/**
 * @member {String} phoneNumber
 */
DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes.prototype.phoneNumber = undefined;

