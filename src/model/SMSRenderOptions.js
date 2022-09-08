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

/**
 * The SMSRenderOptions model module.
 * @module model/SMSRenderOptions
 * @version 2022-09-07.pre
 */
export class SMSRenderOptions {
  /**
   * Constructs a new <code>SMSRenderOptions</code>.
   * @alias module:model/SMSRenderOptions
   * @class
   * @param shortenLinks {Boolean} 
   * @param addOrgPrefix {Boolean} 
   * @param addInfoLink {Boolean} 
   * @param addOptOutLanguage {Boolean} 
   */
  constructor(shortenLinks, addOrgPrefix, addInfoLink, addOptOutLanguage) {
    this.shortenLinks = shortenLinks;
    this.addOrgPrefix = addOrgPrefix;
    this.addInfoLink = addInfoLink;
    this.addOptOutLanguage = addOptOutLanguage;
  }

  /**
   * Constructs a <code>SMSRenderOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMSRenderOptions} obj Optional instance to populate.
   * @return {module:model/SMSRenderOptions} The populated <code>SMSRenderOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SMSRenderOptions();
      if (data.hasOwnProperty('shorten_links'))
        obj.shortenLinks = ApiClient.convertToType(data['shorten_links'], 'Boolean');
      if (data.hasOwnProperty('add_org_prefix'))
        obj.addOrgPrefix = ApiClient.convertToType(data['add_org_prefix'], 'Boolean');
      if (data.hasOwnProperty('add_info_link'))
        obj.addInfoLink = ApiClient.convertToType(data['add_info_link'], 'Boolean');
      if (data.hasOwnProperty('add_opt_out_language'))
        obj.addOptOutLanguage = ApiClient.convertToType(data['add_opt_out_language'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Boolean} shortenLinks
 */
SMSRenderOptions.prototype.shortenLinks = undefined;

/**
 * @member {Boolean} addOrgPrefix
 */
SMSRenderOptions.prototype.addOrgPrefix = undefined;

/**
 * @member {Boolean} addInfoLink
 */
SMSRenderOptions.prototype.addInfoLink = undefined;

/**
 * @member {Boolean} addOptOutLanguage
 */
SMSRenderOptions.prototype.addOptOutLanguage = undefined;

