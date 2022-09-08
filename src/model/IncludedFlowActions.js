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
import {IncludedFlowActionsAttributes} from './IncludedFlowActionsAttributes.js';
import {IncludedVariantsLinks} from './IncludedVariantsLinks.js';

/**
 * The IncludedFlowActions model module.
 * @module model/IncludedFlowActions
 * @version 2022-09-07.pre
 */
export class IncludedFlowActions {
  /**
   * Constructs a new <code>IncludedFlowActions</code>.
   * @alias module:model/IncludedFlowActions
   * @class
   * @param type {module:model/IncludedFlowActions.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedFlowActionsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  constructor(type, id, attributes, links) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedFlowActions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlowActions} obj Optional instance to populate.
   * @return {module:model/IncludedFlowActions} The populated <code>IncludedFlowActions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedFlowActions();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = IncludedFlowActionsAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('links'))
        obj.links = IncludedVariantsLinks.constructFromObject(data['links']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IncludedFlowActions.TypeEnum = {
  /**
   * value: "flow-action"
   * @const
   */
  flowAction: "flow-action"
};
/**
 * @member {module:model/IncludedFlowActions.TypeEnum} type
 */
IncludedFlowActions.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedFlowActions.prototype.id = undefined;

/**
 * @member {module:model/IncludedFlowActionsAttributes} attributes
 */
IncludedFlowActions.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedFlowActions.prototype.links = undefined;

