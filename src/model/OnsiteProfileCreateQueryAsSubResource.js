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
import {OnsiteProfileMeta} from './OnsiteProfileMeta.js';
import {ProfileCreateQueryAsSubResourceAttributes} from './ProfileCreateQueryAsSubResourceAttributes.js';

/**
 * The OnsiteProfileCreateQueryAsSubResource model module.
 * @module model/OnsiteProfileCreateQueryAsSubResource
 * @version 2022-09-07.pre
 */
export class OnsiteProfileCreateQueryAsSubResource {
  /**
   * Constructs a new <code>OnsiteProfileCreateQueryAsSubResource</code>.
   * @alias module:model/OnsiteProfileCreateQueryAsSubResource
   * @class
   * @param type {module:model/OnsiteProfileCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/ProfileCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>OnsiteProfileCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteProfileCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/OnsiteProfileCreateQueryAsSubResource} The populated <code>OnsiteProfileCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnsiteProfileCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ProfileCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('meta'))
        obj.meta = OnsiteProfileMeta.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
OnsiteProfileCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile"
   * @const
   */
  profile: "profile"
};
/**
 * @member {module:model/OnsiteProfileCreateQueryAsSubResource.TypeEnum} type
 */
OnsiteProfileCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/ProfileCreateQueryAsSubResourceAttributes} attributes
 */
OnsiteProfileCreateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/OnsiteProfileMeta} meta
 */
OnsiteProfileCreateQueryAsSubResource.prototype.meta = undefined;

