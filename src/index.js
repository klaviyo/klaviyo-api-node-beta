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
import {ApiClient} from './ApiClient.js';
import {AudiencesSubObject} from './model/AudiencesSubObject.js';
import {CampaignCloneQuery} from './model/CampaignCloneQuery.js';
import {CampaignCloneQueryAsSubResource} from './model/CampaignCloneQueryAsSubResource.js';
import {CampaignCloneQueryAsSubResourceAttributes} from './model/CampaignCloneQueryAsSubResourceAttributes.js';
import {CampaignCreateQuery} from './model/CampaignCreateQuery.js';
import {CampaignCreateQueryAsSubResource} from './model/CampaignCreateQueryAsSubResource.js';
import {CampaignCreateQueryAsSubResourceAttributes} from './model/CampaignCreateQueryAsSubResourceAttributes.js';
import {CampaignMessageAssignTemplateQuery} from './model/CampaignMessageAssignTemplateQuery.js';
import {CampaignMessageAssignTemplateQueryAsSubResource} from './model/CampaignMessageAssignTemplateQueryAsSubResource.js';
import {CampaignMessageAssignTemplateQueryAsSubResourceAttributes} from './model/CampaignMessageAssignTemplateQueryAsSubResourceAttributes.js';
import {CampaignMessagePartialUpdateQuery} from './model/CampaignMessagePartialUpdateQuery.js';
import {CampaignMessagePartialUpdateQueryAsSubResource} from './model/CampaignMessagePartialUpdateQueryAsSubResource.js';
import {CampaignMessagePartialUpdateQueryAsSubResourceAttributes} from './model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes.js';
import {CampaignPartialUpdateQuery} from './model/CampaignPartialUpdateQuery.js';
import {CampaignPartialUpdateQueryAsSubResource} from './model/CampaignPartialUpdateQueryAsSubResource.js';
import {CampaignPartialUpdateQueryAsSubResourceAttributes} from './model/CampaignPartialUpdateQueryAsSubResourceAttributes.js';
import {CampaignSendJobCreateQuery} from './model/CampaignSendJobCreateQuery.js';
import {CampaignSendJobCreateQueryAsSubResource} from './model/CampaignSendJobCreateQueryAsSubResource.js';
import {CampaignSendJobCreateQueryAsSubResourceAttributes} from './model/CampaignSendJobCreateQueryAsSubResourceAttributes.js';
import {CampaignSendJobPartialUpdateQuery} from './model/CampaignSendJobPartialUpdateQuery.js';
import {CampaignSendJobPartialUpdateQueryAsSubResource} from './model/CampaignSendJobPartialUpdateQueryAsSubResource.js';
import {CampaignSendJobPartialUpdateQueryAsSubResourceAttributes} from './model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes.js';
import {ContentSubObject} from './model/ContentSubObject.js';
import {DataPrivacyCreateDeletionJobQuery} from './model/DataPrivacyCreateDeletionJobQuery.js';
import {DataPrivacyCreateDeletionJobQueryAsSubResource} from './model/DataPrivacyCreateDeletionJobQueryAsSubResource.js';
import {DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes} from './model/DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes.js';
import {IncludedProfile} from './model/IncludedProfile.js';
import {IncludedProfileAttributes} from './model/IncludedProfileAttributes.js';
import {IncludedTags} from './model/IncludedTags.js';
import {IncludedTagsLinks} from './model/IncludedTagsLinks.js';
import {InlineResponse4XX} from './model/InlineResponse4XX.js';
import {InlineResponse4XXErrors} from './model/InlineResponse4XXErrors.js';
import {InlineResponse4XXSource} from './model/InlineResponse4XXSource.js';
import {OneOfProfileLocationLatitude} from './model/OneOfProfileLocationLatitude.js';
import {OneOfProfileLocationLongitude} from './model/OneOfProfileLocationLongitude.js';
import {ProfileLocation} from './model/ProfileLocation.js';
import {SendOptionsSubObject} from './model/SendOptionsSubObject.js';
import {SendStrategySubObject} from './model/SendStrategySubObject.js';
import {SendTimeSubObject} from './model/SendTimeSubObject.js';
import {StaticScheduleOptions} from './model/StaticScheduleOptions.js';
import {TagCreateQuery} from './model/TagCreateQuery.js';
import {TagCreateQueryAsSubResource} from './model/TagCreateQueryAsSubResource.js';
import {TagCreateQueryAsSubResourceAttributes} from './model/TagCreateQueryAsSubResourceAttributes.js';
import {TagGroupCreateQuery} from './model/TagGroupCreateQuery.js';
import {TagGroupCreateQueryAsSubResource} from './model/TagGroupCreateQueryAsSubResource.js';
import {TagGroupCreateQueryAsSubResourceAttributes} from './model/TagGroupCreateQueryAsSubResourceAttributes.js';
import {TagGroupUpdateQuery} from './model/TagGroupUpdateQuery.js';
import {TagGroupUpdateQueryAsSubResource} from './model/TagGroupUpdateQueryAsSubResource.js';
import {TagGroupUpdateQueryAsSubResourceAttributes} from './model/TagGroupUpdateQueryAsSubResourceAttributes.js';
import {TagSegmentOp} from './model/TagSegmentOp.js';
import {TagSegmentOpData} from './model/TagSegmentOpData.js';
import {TagUpdateQuery} from './model/TagUpdateQuery.js';
import {TagUpdateQueryAsSubResource} from './model/TagUpdateQueryAsSubResource.js';
import {TagUpdateQueryAsSubResourceAttributes} from './model/TagUpdateQueryAsSubResourceAttributes.js';
import {TemplateCloneQueryAsSubResource} from './model/TemplateCloneQueryAsSubResource.js';
import {ThrottledScheduleOptions} from './model/ThrottledScheduleOptions.js';
import {TrackingOptionsSubObject} from './model/TrackingOptionsSubObject.js';
import {UTMParamsSubObject} from './model/UTMParamsSubObject.js';
import {V2TemplateRenderQueryAsSubResource} from './model/V2TemplateRenderQueryAsSubResource.js';
import {CampaignsApi} from './api/CampaignsApi.js';
import {DataPrivacyApi} from './api/DataPrivacyApi.js';
import {FlowsApi} from './api/FlowsApi.js';
import {ListsApi} from './api/ListsApi.js';
import {SegmentsApi} from './api/SegmentsApi.js';
import {TagsApi} from './api/TagsApi.js';

import {
        Campaigns,
        DataPrivacy,
        Flows,
        Lists,
        Segments,
        Tags,
    ConfigWrapper,
} from "./clientWrapper.js";

/**
* The_Klaviyo_REST_API__Please_visit_httpsdevelopers_klaviyo_com_for_more_details_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var KlaviyoApiBeta = require('index'); // See note below*.
* var xxxSvc = new KlaviyoApiBeta.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new KlaviyoApiBeta.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new KlaviyoApiBeta.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new KlaviyoApiBeta.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2022-12-15.pre
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AudiencesSubObject model constructor.
     * @property {module:model/AudiencesSubObject}
     */
    AudiencesSubObject,

    /**
     * The CampaignCloneQuery model constructor.
     * @property {module:model/CampaignCloneQuery}
     */
    CampaignCloneQuery,

    /**
     * The CampaignCloneQueryAsSubResource model constructor.
     * @property {module:model/CampaignCloneQueryAsSubResource}
     */
    CampaignCloneQueryAsSubResource,

    /**
     * The CampaignCloneQueryAsSubResourceAttributes model constructor.
     * @property {module:model/CampaignCloneQueryAsSubResourceAttributes}
     */
    CampaignCloneQueryAsSubResourceAttributes,

    /**
     * The CampaignCreateQuery model constructor.
     * @property {module:model/CampaignCreateQuery}
     */
    CampaignCreateQuery,

    /**
     * The CampaignCreateQueryAsSubResource model constructor.
     * @property {module:model/CampaignCreateQueryAsSubResource}
     */
    CampaignCreateQueryAsSubResource,

    /**
     * The CampaignCreateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/CampaignCreateQueryAsSubResourceAttributes}
     */
    CampaignCreateQueryAsSubResourceAttributes,

    /**
     * The CampaignMessageAssignTemplateQuery model constructor.
     * @property {module:model/CampaignMessageAssignTemplateQuery}
     */
    CampaignMessageAssignTemplateQuery,

    /**
     * The CampaignMessageAssignTemplateQueryAsSubResource model constructor.
     * @property {module:model/CampaignMessageAssignTemplateQueryAsSubResource}
     */
    CampaignMessageAssignTemplateQueryAsSubResource,

    /**
     * The CampaignMessageAssignTemplateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/CampaignMessageAssignTemplateQueryAsSubResourceAttributes}
     */
    CampaignMessageAssignTemplateQueryAsSubResourceAttributes,

    /**
     * The CampaignMessagePartialUpdateQuery model constructor.
     * @property {module:model/CampaignMessagePartialUpdateQuery}
     */
    CampaignMessagePartialUpdateQuery,

    /**
     * The CampaignMessagePartialUpdateQueryAsSubResource model constructor.
     * @property {module:model/CampaignMessagePartialUpdateQueryAsSubResource}
     */
    CampaignMessagePartialUpdateQueryAsSubResource,

    /**
     * The CampaignMessagePartialUpdateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/CampaignMessagePartialUpdateQueryAsSubResourceAttributes}
     */
    CampaignMessagePartialUpdateQueryAsSubResourceAttributes,

    /**
     * The CampaignPartialUpdateQuery model constructor.
     * @property {module:model/CampaignPartialUpdateQuery}
     */
    CampaignPartialUpdateQuery,

    /**
     * The CampaignPartialUpdateQueryAsSubResource model constructor.
     * @property {module:model/CampaignPartialUpdateQueryAsSubResource}
     */
    CampaignPartialUpdateQueryAsSubResource,

    /**
     * The CampaignPartialUpdateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/CampaignPartialUpdateQueryAsSubResourceAttributes}
     */
    CampaignPartialUpdateQueryAsSubResourceAttributes,

    /**
     * The CampaignSendJobCreateQuery model constructor.
     * @property {module:model/CampaignSendJobCreateQuery}
     */
    CampaignSendJobCreateQuery,

    /**
     * The CampaignSendJobCreateQueryAsSubResource model constructor.
     * @property {module:model/CampaignSendJobCreateQueryAsSubResource}
     */
    CampaignSendJobCreateQueryAsSubResource,

    /**
     * The CampaignSendJobCreateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/CampaignSendJobCreateQueryAsSubResourceAttributes}
     */
    CampaignSendJobCreateQueryAsSubResourceAttributes,

    /**
     * The CampaignSendJobPartialUpdateQuery model constructor.
     * @property {module:model/CampaignSendJobPartialUpdateQuery}
     */
    CampaignSendJobPartialUpdateQuery,

    /**
     * The CampaignSendJobPartialUpdateQueryAsSubResource model constructor.
     * @property {module:model/CampaignSendJobPartialUpdateQueryAsSubResource}
     */
    CampaignSendJobPartialUpdateQueryAsSubResource,

    /**
     * The CampaignSendJobPartialUpdateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes}
     */
    CampaignSendJobPartialUpdateQueryAsSubResourceAttributes,

    /**
     * The ContentSubObject model constructor.
     * @property {module:model/ContentSubObject}
     */
    ContentSubObject,

    /**
     * The DataPrivacyCreateDeletionJobQuery model constructor.
     * @property {module:model/DataPrivacyCreateDeletionJobQuery}
     */
    DataPrivacyCreateDeletionJobQuery,

    /**
     * The DataPrivacyCreateDeletionJobQueryAsSubResource model constructor.
     * @property {module:model/DataPrivacyCreateDeletionJobQueryAsSubResource}
     */
    DataPrivacyCreateDeletionJobQueryAsSubResource,

    /**
     * The DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes model constructor.
     * @property {module:model/DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes}
     */
    DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes,

    /**
     * The IncludedProfile model constructor.
     * @property {module:model/IncludedProfile}
     */
    IncludedProfile,

    /**
     * The IncludedProfileAttributes model constructor.
     * @property {module:model/IncludedProfileAttributes}
     */
    IncludedProfileAttributes,

    /**
     * The IncludedTags model constructor.
     * @property {module:model/IncludedTags}
     */
    IncludedTags,

    /**
     * The IncludedTagsLinks model constructor.
     * @property {module:model/IncludedTagsLinks}
     */
    IncludedTagsLinks,

    /**
     * The InlineResponse4XX model constructor.
     * @property {module:model/InlineResponse4XX}
     */
    InlineResponse4XX,

    /**
     * The InlineResponse4XXErrors model constructor.
     * @property {module:model/InlineResponse4XXErrors}
     */
    InlineResponse4XXErrors,

    /**
     * The InlineResponse4XXSource model constructor.
     * @property {module:model/InlineResponse4XXSource}
     */
    InlineResponse4XXSource,

    /**
     * The OneOfProfileLocationLatitude model constructor.
     * @property {module:model/OneOfProfileLocationLatitude}
     */
    OneOfProfileLocationLatitude,

    /**
     * The OneOfProfileLocationLongitude model constructor.
     * @property {module:model/OneOfProfileLocationLongitude}
     */
    OneOfProfileLocationLongitude,

    /**
     * The ProfileLocation model constructor.
     * @property {module:model/ProfileLocation}
     */
    ProfileLocation,

    /**
     * The SendOptionsSubObject model constructor.
     * @property {module:model/SendOptionsSubObject}
     */
    SendOptionsSubObject,

    /**
     * The SendStrategySubObject model constructor.
     * @property {module:model/SendStrategySubObject}
     */
    SendStrategySubObject,

    /**
     * The SendTimeSubObject model constructor.
     * @property {module:model/SendTimeSubObject}
     */
    SendTimeSubObject,

    /**
     * The StaticScheduleOptions model constructor.
     * @property {module:model/StaticScheduleOptions}
     */
    StaticScheduleOptions,

    /**
     * The TagCreateQuery model constructor.
     * @property {module:model/TagCreateQuery}
     */
    TagCreateQuery,

    /**
     * The TagCreateQueryAsSubResource model constructor.
     * @property {module:model/TagCreateQueryAsSubResource}
     */
    TagCreateQueryAsSubResource,

    /**
     * The TagCreateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/TagCreateQueryAsSubResourceAttributes}
     */
    TagCreateQueryAsSubResourceAttributes,

    /**
     * The TagGroupCreateQuery model constructor.
     * @property {module:model/TagGroupCreateQuery}
     */
    TagGroupCreateQuery,

    /**
     * The TagGroupCreateQueryAsSubResource model constructor.
     * @property {module:model/TagGroupCreateQueryAsSubResource}
     */
    TagGroupCreateQueryAsSubResource,

    /**
     * The TagGroupCreateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/TagGroupCreateQueryAsSubResourceAttributes}
     */
    TagGroupCreateQueryAsSubResourceAttributes,

    /**
     * The TagGroupUpdateQuery model constructor.
     * @property {module:model/TagGroupUpdateQuery}
     */
    TagGroupUpdateQuery,

    /**
     * The TagGroupUpdateQueryAsSubResource model constructor.
     * @property {module:model/TagGroupUpdateQueryAsSubResource}
     */
    TagGroupUpdateQueryAsSubResource,

    /**
     * The TagGroupUpdateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/TagGroupUpdateQueryAsSubResourceAttributes}
     */
    TagGroupUpdateQueryAsSubResourceAttributes,

    /**
     * The TagSegmentOp model constructor.
     * @property {module:model/TagSegmentOp}
     */
    TagSegmentOp,

    /**
     * The TagSegmentOpData model constructor.
     * @property {module:model/TagSegmentOpData}
     */
    TagSegmentOpData,

    /**
     * The TagUpdateQuery model constructor.
     * @property {module:model/TagUpdateQuery}
     */
    TagUpdateQuery,

    /**
     * The TagUpdateQueryAsSubResource model constructor.
     * @property {module:model/TagUpdateQueryAsSubResource}
     */
    TagUpdateQueryAsSubResource,

    /**
     * The TagUpdateQueryAsSubResourceAttributes model constructor.
     * @property {module:model/TagUpdateQueryAsSubResourceAttributes}
     */
    TagUpdateQueryAsSubResourceAttributes,

    /**
     * The TemplateCloneQueryAsSubResource model constructor.
     * @property {module:model/TemplateCloneQueryAsSubResource}
     */
    TemplateCloneQueryAsSubResource,

    /**
     * The ThrottledScheduleOptions model constructor.
     * @property {module:model/ThrottledScheduleOptions}
     */
    ThrottledScheduleOptions,

    /**
     * The TrackingOptionsSubObject model constructor.
     * @property {module:model/TrackingOptionsSubObject}
     */
    TrackingOptionsSubObject,

    /**
     * The UTMParamsSubObject model constructor.
     * @property {module:model/UTMParamsSubObject}
     */
    UTMParamsSubObject,

    /**
     * The V2TemplateRenderQueryAsSubResource model constructor.
     * @property {module:model/V2TemplateRenderQueryAsSubResource}
     */
    V2TemplateRenderQueryAsSubResource,


    /**
    * The CampaignsApi service constructor.
    * @property {module:api/CampaignsApi}
    */
    CampaignsApi,

    /**
     * The CampaignsApi object instance.
     * @property {module:api/CampaignsApi}
     */
    Campaigns,

    /**
    * The DataPrivacyApi service constructor.
    * @property {module:api/DataPrivacyApi}
    */
    DataPrivacyApi,

    /**
     * The DataPrivacyApi object instance.
     * @property {module:api/DataPrivacyApi}
     */
    DataPrivacy,

    /**
    * The FlowsApi service constructor.
    * @property {module:api/FlowsApi}
    */
    FlowsApi,

    /**
     * The FlowsApi object instance.
     * @property {module:api/FlowsApi}
     */
    Flows,

    /**
    * The ListsApi service constructor.
    * @property {module:api/ListsApi}
    */
    ListsApi,

    /**
     * The ListsApi object instance.
     * @property {module:api/ListsApi}
     */
    Lists,

    /**
    * The SegmentsApi service constructor.
    * @property {module:api/SegmentsApi}
    */
    SegmentsApi,

    /**
     * The SegmentsApi object instance.
     * @property {module:api/SegmentsApi}
     */
    Segments,

    /**
    * The TagsApi service constructor.
    * @property {module:api/TagsApi}
    */
    TagsApi,

    /**
     * The TagsApi object instance.
     * @property {module:api/TagsApi}
     */
    Tags,

    /**
     * The SegmentsApi object instance.
     * @return {ApiClient#instance} a instance of {@link  module:ApiClient#instance}
     * */
    ConfigWrapper,
};
