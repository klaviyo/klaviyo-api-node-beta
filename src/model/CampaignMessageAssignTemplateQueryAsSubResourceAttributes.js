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
 * The CampaignMessageAssignTemplateQueryAsSubResourceAttributes model module.
 * @module model/CampaignMessageAssignTemplateQueryAsSubResourceAttributes
 * @version 2022-12-15.pre
 */
export class CampaignMessageAssignTemplateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CampaignMessageAssignTemplateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignMessageAssignTemplateQueryAsSubResourceAttributes
   * @class
   * @param id {String} The message ID to be assigned to
   * @param templateId {String} The template ID to assign
   */
  constructor(id, templateId) {
    this.id = id;
    this.templateId = templateId;
  }

  /**
   * Constructs a <code>CampaignMessageAssignTemplateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessageAssignTemplateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignMessageAssignTemplateQueryAsSubResourceAttributes} The populated <code>CampaignMessageAssignTemplateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignMessageAssignTemplateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('template_id'))
        obj.templateId = ApiClient.convertToType(data['template_id'], 'String');
    }
    return obj;
  }
}

/**
 * The message ID to be assigned to
 * @member {String} id
 */
CampaignMessageAssignTemplateQueryAsSubResourceAttributes.prototype.id = undefined;

/**
 * The template ID to assign
 * @member {String} templateId
 */
CampaignMessageAssignTemplateQueryAsSubResourceAttributes.prototype.templateId = undefined;

