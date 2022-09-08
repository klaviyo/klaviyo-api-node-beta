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
import {CatalogVariantUpdateQueryAsSubResource} from './CatalogVariantUpdateQueryAsSubResource.js';

/**
 * The CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes
 * @version 2022-09-07.pre
 */
export class CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param variants {Array.<module:model/CatalogVariantUpdateQueryAsSubResource>} 
   */
  constructor(variants) {
    this.variants = variants;
  }

  /**
   * Constructs a <code>CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('variants'))
        obj.variants = ApiClient.convertToType(data['variants'], [CatalogVariantUpdateQueryAsSubResource]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CatalogVariantUpdateQueryAsSubResource>} variants
 */
CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes.prototype.variants = undefined;

