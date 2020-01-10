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
import RestFrontBinaryRequest from '../model/RestFrontBinaryRequest';
import RestFrontBinaryResponse from '../model/RestFrontBinaryResponse';
import RestFrontBootConfResponse from '../model/RestFrontBootConfResponse';
import RestFrontEnrollAuthRequest from '../model/RestFrontEnrollAuthRequest';
import RestFrontEnrollAuthResponse from '../model/RestFrontEnrollAuthResponse';
import RestFrontMessagesResponse from '../model/RestFrontMessagesResponse';
import RestFrontPluginsResponse from '../model/RestFrontPluginsResponse';
import RestFrontSessionDelResponse from '../model/RestFrontSessionDelResponse';
import RestFrontSessionGetResponse from '../model/RestFrontSessionGetResponse';
import RestFrontSessionRequest from '../model/RestFrontSessionRequest';
import RestFrontSessionResponse from '../model/RestFrontSessionResponse';
import RestFrontStateResponse from '../model/RestFrontStateResponse';
import RestSettingsMenuResponse from '../model/RestSettingsMenuResponse';

/**
* FrontendService service.
* @module api/FrontendServiceApi
* @version 1.0
*/
export default class FrontendServiceApi {

    /**
    * Constructs a new FrontendServiceApi. 
    * @alias module:api/FrontendServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Remove Session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontSessionDelResponse} and HTTP response
     */
    fronSessionDelWithHttpInfo() {
      let postBody = null;


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
      let returnType = RestFrontSessionDelResponse;

      return this.apiClient.callApi(
        '/frontend/session', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove Session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontSessionDelResponse}
     */
    fronSessionDel() {
      return this.fronSessionDelWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add some data to the initial set of parameters loaded by the frontend
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontBootConfResponse} and HTTP response
     */
    frontBootConfWithHttpInfo() {
      let postBody = null;


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
      let returnType = RestFrontBootConfResponse;

      return this.apiClient.callApi(
        '/frontend/bootconf', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add some data to the initial set of parameters loaded by the frontend
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontBootConfResponse}
     */
    frontBootConf() {
      return this.frontBootConfWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generic endpoint that can be implemented by 2FA systems for enrollment
     * @param {module:model/RestFrontEnrollAuthRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontEnrollAuthResponse} and HTTP response
     */
    frontEnrollAuthWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling frontEnrollAuth");
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
      let returnType = RestFrontEnrollAuthResponse;

      return this.apiClient.callApi(
        '/frontend/enroll', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Generic endpoint that can be implemented by 2FA systems for enrollment
     * @param {module:model/RestFrontEnrollAuthRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontEnrollAuthResponse}
     */
    frontEnrollAuth(body) {
      return this.frontEnrollAuthWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Serve list of I18n messages
     * @param {String} lang 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontMessagesResponse} and HTTP response
     */
    frontMessagesWithHttpInfo(lang) {
      let postBody = null;

      // verify the required parameter 'lang' is set
      if (lang === undefined || lang === null) {
        throw new Error("Missing the required parameter 'lang' when calling frontMessages");
      }


      let pathParams = {
        'Lang': lang
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
      let returnType = RestFrontMessagesResponse;

      return this.apiClient.callApi(
        '/frontend/messages/{Lang}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Serve list of I18n messages
     * @param {String} lang 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontMessagesResponse}
     */
    frontMessages(lang) {
      return this.frontMessagesWithHttpInfo(lang)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Serve list of I18n messages
     * @param {String} lang 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontPluginsResponse} and HTTP response
     */
    frontPluginsWithHttpInfo(lang) {
      let postBody = null;

      // verify the required parameter 'lang' is set
      if (lang === undefined || lang === null) {
        throw new Error("Missing the required parameter 'lang' when calling frontPlugins");
      }


      let pathParams = {
        'Lang': lang
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
      let returnType = RestFrontPluginsResponse;

      return this.apiClient.callApi(
        '/frontend/plugins/{Lang}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Serve list of I18n messages
     * @param {String} lang 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontPluginsResponse}
     */
    frontPlugins(lang) {
      return this.frontPluginsWithHttpInfo(lang)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload frontend binaries (avatars / logos / bg images)
     * @param {String} binaryType 
     * @param {String} uuid 
     * @param {module:model/RestFrontBinaryRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontBinaryResponse} and HTTP response
     */
    frontPutBinaryWithHttpInfo(binaryType, uuid, body) {
      let postBody = body;

      // verify the required parameter 'binaryType' is set
      if (binaryType === undefined || binaryType === null) {
        throw new Error("Missing the required parameter 'binaryType' when calling frontPutBinary");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling frontPutBinary");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling frontPutBinary");
      }


      let pathParams = {
        'BinaryType': binaryType,
        'Uuid': uuid
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
      let returnType = RestFrontBinaryResponse;

      return this.apiClient.callApi(
        '/frontend/binaries/{BinaryType}/{Uuid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload frontend binaries (avatars / logos / bg images)
     * @param {String} binaryType 
     * @param {String} uuid 
     * @param {module:model/RestFrontBinaryRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontBinaryResponse}
     */
    frontPutBinary(binaryType, uuid, body) {
      return this.frontPutBinaryWithHttpInfo(binaryType, uuid, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Serve frontend binaries directly (avatars / logos / bg images)
     * @param {String} binaryType 
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontBinaryResponse} and HTTP response
     */
    frontServeBinaryWithHttpInfo(binaryType, uuid) {
      let postBody = null;

      // verify the required parameter 'binaryType' is set
      if (binaryType === undefined || binaryType === null) {
        throw new Error("Missing the required parameter 'binaryType' when calling frontServeBinary");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling frontServeBinary");
      }


      let pathParams = {
        'BinaryType': binaryType,
        'Uuid': uuid
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
      let returnType = RestFrontBinaryResponse;

      return this.apiClient.callApi(
        '/frontend/binaries/{BinaryType}/{Uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Serve frontend binaries directly (avatars / logos / bg images)
     * @param {String} binaryType 
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontBinaryResponse}
     */
    frontServeBinary(binaryType, uuid) {
      return this.frontServeBinaryWithHttpInfo(binaryType, uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Handle Session POST
     * @param {module:model/RestFrontSessionRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontSessionResponse} and HTTP response
     */
    frontSessionWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling frontSession");
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
      let returnType = RestFrontSessionResponse;

      return this.apiClient.callApi(
        '/frontend/session', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Handle Session POST
     * @param {module:model/RestFrontSessionRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontSessionResponse}
     */
    frontSession(body) {
      return this.frontSessionWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve session info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontSessionGetResponse} and HTTP response
     */
    frontSessionGetWithHttpInfo() {
      let postBody = null;


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
      let returnType = RestFrontSessionGetResponse;

      return this.apiClient.callApi(
        '/frontend/session', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve session info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontSessionGetResponse}
     */
    frontSessionGet() {
      return this.frontSessionGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send XML state registry
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontStateResponse} and HTTP response
     */
    frontStateWithHttpInfo() {
      let postBody = null;


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
      let returnType = RestFrontStateResponse;

      return this.apiClient.callApi(
        '/frontend/state', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send XML state registry
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontStateResponse}
     */
    frontState() {
      return this.frontStateWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sends a tree of nodes to be used a menu in the Settings panel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestSettingsMenuResponse} and HTTP response
     */
    settingsMenuWithHttpInfo() {
      let postBody = null;


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
      let returnType = RestSettingsMenuResponse;

      return this.apiClient.callApi(
        '/frontend/settings-menu', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Sends a tree of nodes to be used a menu in the Settings panel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestSettingsMenuResponse}
     */
    settingsMenu() {
      return this.settingsMenuWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
