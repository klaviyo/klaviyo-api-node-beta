/*
 * Klaviyo API (Beta)
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-09-07.pre
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
import {ProfileLocation} from './ProfileLocation.js';

/**
 * The IncludedProfilesAttributes model module.
 * @module model/IncludedProfilesAttributes
 * @version 2022-09-07.pre
 */
export class IncludedProfilesAttributes {
  /**
   * Constructs a new <code>IncludedProfilesAttributes</code>.
   * @alias module:model/IncludedProfilesAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IncludedProfilesAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedProfilesAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedProfilesAttributes} The populated <code>IncludedProfilesAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedProfilesAttributes();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone_number'))
        obj.phoneNumber = ApiClient.convertToType(data['phone_number'], 'String');
      if (data.hasOwnProperty('external_id'))
        obj.externalId = ApiClient.convertToType(data['external_id'], 'String');
      if (data.hasOwnProperty('anonymous_id'))
        obj.anonymousId = ApiClient.convertToType(data['anonymous_id'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('organization'))
        obj.organization = ApiClient.convertToType(data['organization'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
      if (data.hasOwnProperty('last_event_date'))
        obj.lastEventDate = ApiClient.convertToType(data['last_event_date'], 'Date');
      if (data.hasOwnProperty('location'))
        obj.location = ProfileLocation.constructFromObject(data['location']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
IncludedProfilesAttributes.prototype.email = undefined;

/**
 * @member {String} phoneNumber
 */
IncludedProfilesAttributes.prototype.phoneNumber = undefined;

/**
 * @member {String} externalId
 */
IncludedProfilesAttributes.prototype.externalId = undefined;

/**
 * @member {String} anonymousId
 */
IncludedProfilesAttributes.prototype.anonymousId = undefined;

/**
 * @member {String} firstName
 */
IncludedProfilesAttributes.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
IncludedProfilesAttributes.prototype.lastName = undefined;

/**
 * @member {String} organization
 */
IncludedProfilesAttributes.prototype.organization = undefined;

/**
 * @member {String} title
 */
IncludedProfilesAttributes.prototype.title = undefined;

/**
 * @member {String} image
 */
IncludedProfilesAttributes.prototype.image = undefined;

/**
 * @member {Date} created
 */
IncludedProfilesAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedProfilesAttributes.prototype.updated = undefined;

/**
 * @member {Date} lastEventDate
 */
IncludedProfilesAttributes.prototype.lastEventDate = undefined;

/**
 * @member {module:model/ProfileLocation} location
 */
IncludedProfilesAttributes.prototype.location = undefined;

/**
 * @member {Object} properties
 */
IncludedProfilesAttributes.prototype.properties = undefined;

