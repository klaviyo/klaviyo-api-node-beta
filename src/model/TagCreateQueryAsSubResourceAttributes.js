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
 * The TagCreateQueryAsSubResourceAttributes model module.
 * @module model/TagCreateQueryAsSubResourceAttributes
 * @version 2022-12-15.pre
 */
export class TagCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>TagCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/TagCreateQueryAsSubResourceAttributes
   * @class
   * @param name {String} 
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>TagCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/TagCreateQueryAsSubResourceAttributes} The populated <code>TagCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('tag_group_id'))
        obj.tagGroupId = ApiClient.convertToType(data['tag_group_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
TagCreateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * @member {String} tagGroupId
 */
TagCreateQueryAsSubResourceAttributes.prototype.tagGroupId = undefined;

