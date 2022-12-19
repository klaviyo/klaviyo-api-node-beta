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
import {ApiClient} from "../ApiClient.js";

/**
* Lists service.
* @module api/ListsApi
* @version 2022-12-15.pre
*/
export class ListsApi {
    apiClient

    /**
    * Constructs a new ListsApi. 
    * @alias module:api/ListsApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Get List Tags
     * Return all tags associated with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;List Read&#x60; &#x60;Tags Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsTag For more information please visit https://developers.klaviyo.com/en/v/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getListTags = async (listId, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getListTags");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
        'fields[tag]': this.apiClient.buildCollectionParam(opts['fieldsTag'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/lists/{list_id}/tags/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

}