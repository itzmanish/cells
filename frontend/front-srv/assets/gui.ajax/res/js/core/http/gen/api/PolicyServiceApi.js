/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import IdmListPolicyGroupsRequest from '../model/IdmListPolicyGroupsRequest';
import IdmListPolicyGroupsResponse from '../model/IdmListPolicyGroupsResponse';

/**
* PolicyService service.
* @module api/PolicyServiceApi
* @version 1.0
*/
export default class PolicyServiceApi {

    /**
    * Constructs a new PolicyServiceApi. 
    * @alias module:api/PolicyServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List all defined security policies
     * @param {module:model/IdmListPolicyGroupsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmListPolicyGroupsResponse} and HTTP response
     */
    listPoliciesWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listPolicies");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IdmListPolicyGroupsResponse;

      return this.apiClient.callApi(
        '/policy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all defined security policies
     * @param {module:model/IdmListPolicyGroupsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmListPolicyGroupsResponse}
     */
    listPolicies(body) {
      return this.listPoliciesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
