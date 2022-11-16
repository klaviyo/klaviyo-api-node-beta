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

/**
 * The TagGroupCreateQueryAsSubResourceAttributes model module.
 * @module model/TagGroupCreateQueryAsSubResourceAttributes
 * @version 2022-11-14.pre
 */
export class TagGroupCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>TagGroupCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/TagGroupCreateQueryAsSubResourceAttributes
   * @class
   * @param name {String} 
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>TagGroupCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/TagGroupCreateQueryAsSubResourceAttributes} The populated <code>TagGroupCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagGroupCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('exclusive'))
        obj.exclusive = ApiClient.convertToType(data['exclusive'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
TagGroupCreateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * @member {Boolean} exclusive
 */
TagGroupCreateQueryAsSubResourceAttributes.prototype.exclusive = undefined;

