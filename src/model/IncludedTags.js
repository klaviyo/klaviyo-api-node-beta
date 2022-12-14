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
import {IncludedTagsLinks} from './IncludedTagsLinks.js';
import {TagUpdateQueryAsSubResourceAttributes} from './TagUpdateQueryAsSubResourceAttributes.js';

/**
 * The IncludedTags model module.
 * @module model/IncludedTags
 * @version 2022-12-15.pre
 */
export class IncludedTags {
  /**
   * Constructs a new <code>IncludedTags</code>.
   * @alias module:model/IncludedTags
   * @class
   * @param type {module:model/IncludedTags.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/TagUpdateQueryAsSubResourceAttributes} 
   * @param links {module:model/IncludedTagsLinks} 
   */
  constructor(type, id, attributes, links) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedTags</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedTags} obj Optional instance to populate.
   * @return {module:model/IncludedTags} The populated <code>IncludedTags</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedTags();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = TagUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('links'))
        obj.links = IncludedTagsLinks.constructFromObject(data['links']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IncludedTags.TypeEnum = {
  /**
   * value: "tag"
   * @const
   */
  tag: "tag"
};
/**
 * @member {module:model/IncludedTags.TypeEnum} type
 */
IncludedTags.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedTags.prototype.id = undefined;

/**
 * @member {module:model/TagUpdateQueryAsSubResourceAttributes} attributes
 */
IncludedTags.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedTagsLinks} links
 */
IncludedTags.prototype.links = undefined;

