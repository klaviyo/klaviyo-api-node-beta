# Klaviyo JavaScript Beta SDK

- SDK version: 2.0.0

- Revision: 2022-12-15.pre

## Helpful Resources

- [API Reference](https://developers.klaviyo.com/en/reference/beta-api-overview/)
- [API Guides](https://developers.klaviyo.com/en/docs/whats-new-with-beta-apis)
- [Postman Workspace](https://www.postman.com/klaviyo/workspace/klaviyo-developers)

## Design & Approach

This SDK is a thin wrapper around our API. See our API Reference for full documentation on API behavior.

This SDK exactly mirrors the organization and naming convention of the above language-agnostic resources, with a few namespace changes to make it Pythonic (details in Appendix).

## Organization

This SDK is organized into the following resources:

 - Campaigns
 - DataPrivacy
 - Flows
 - Lists
 - Segments
 - Tags

# Installation

## NPM

You can install this library using `npm`.

`npm install klaviyo-api-beta`

## source code

*Alternatively*, you can also run this using this repo as source code, by running *one* of the following shell commands within the cloned repo:

`npm install`

and then running JavaScript from the cloned repo.

# Usage Example

### To instantiate the ConfigWrapper

```JavaScript
import {ConfigWrapper} from 'klaviyo-api-beta'

ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE")
```
Or if ES6 isn't your thing
```JavaScript
var KaviyoSdk = require('klaviyo-api-beta');

KaviyoSdk.ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE")
```

To edit the exponential backoff built into the ConfigWrapper you can pass optional parameters

```JavaScript
import {ConfigWrapper} from 'klaviyo-api-beta'

ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE", {
    numOfAttempts: 5, // max number of rety attempts. Default is 3
    timeMultiple: 10, // how exponental the timing is. Default is 5
    startingDelay: 1000, // How long before first retry. Default is 500
})
```

NOTE:
* The SDK retries on resolvable errors, namely: rate limits (common) and server errors on klaviyo (rare).

### To call the `getCampaign` operation:

```JavaScript
import {Campaigns} from 'klaviyo-api-beta';

const campaignId = "CAMPAIGN_ID";
const opts = {};

Campaigns.getCampaign(campaignId, opts)
    .then(data => 'Do Something Here')
    .catch(error => 'An error was thrown check the HTTP code with error.status');
```
or if you want to use async await
```JavaScript
import {Campaigns} from 'klaviyo-api-beta';

const campaignId = "CAMPAIGN_ID";
const opts = {};

// Just make sure you are calling with the async tag ie. async () => {}
try {
    response = await Campaigns.getCampaign(campaignId, opts)
    console.log(response);
} catch (e) {
    console.log(error);
}
```

once again if you're not using ES6

```Javascript
var KaviyoSdk = require('klaviyo-api-beta');

var campaignId = "CAMPAIGN_ID";
var opts = {};

KaviyoSdk.Campaigns.getCampaign(campaignId, opts)
    .then(data => 'Do Something Here')
    .catch(error => 'An error was thrown check the HTTP code with error.status');
```

if you need to use multiple api keys, you can forgo the wrapped api classes and make you own

```JavaScript
import {ConfigWrapper, CatalogsApi} from 'klaviyo-api-beta'

const catalogApi = new CatalogsApi(ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE"))
const r = await catalogApi.createCatalogCategory(body)
```

### Optional Parameters

Different endpoint include specific optional parameters. Here is a few examples how to use these and what they look like

more often than not the info that can go into the `opts` param are the optional headers.
These are formatted in js a bit different from the docs, headers names have variables that make bad names like
page[cursor] are transformed to `pageCursor`. (Remove the weird characters and append words with camelCase)

```javascript
const opts = {
    pageCursor: "page_cursor", // page[cursor]
    fieldsList: ["list", "of", "wanted", "attributes"] // fields[list]
    include: ["resource_to_include"] // include
}
```

#### Cursor based Pagination

Obtain the cursor value from the call you want to get the next page for, then pass it under the `pageCursor` optional parameter

```javascript
const nextPageCursor = 'WzE2NDA5OTUyMDAsICIzYzRjeXdGTndadyIsIHRydWVd'

await Campaigns.getCampaigns({pageCursor: nextPageCursor})
```

#### Filtering

Filter by passing the filter as a string as under the optional parameter `filter`

Read more about formatting your filter strings in our developer documentation

```javascript
const filter = 'equals(archived,false)'

const response1 = await Campaigns.getCampaigns({filter}); // the same as {filter: filter}
```

#### Sparse Fields

The SDK expands the optional sparse fields into their own option, where you can pass a list of the desired items to include

```javascript
const fieldsCampaign = ["name"]
const fieldsTag = ["name"]

await Campaigns.getCampaign(CAMPAIGN_ID, {
    fieldsCampaign,
    fieldsTag
});
```

### Includes

Includes you can pass a similar way, just add the values you want to include as a list

```javascript
const include = ["tags"]

await Campaigns.getCampaign(CAMPAIGN_ID, {
    include,
});
```


# Comprehensive list of Operations & Parameters

_**NOTE:**_
- Organization: Resource groups and operation_ids are listed in alphabetical order, first by Resource name, then by **OpenAPI Summary**. Operation summaries are those listed in the right side bar of the [API Reference](https://developers.klaviyo.com/en/reference/track-post).
- For example values / data types, as well as whether parameters are required/optional, please reference the corresponding API Reference link.
- Some keyword args are required for the API call to succeed, the API docs above are the source of truth regarding which keyword params are required.



## CampaignsApi


#### [Assign Campaign Message Template](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/assign_campaign_message_template)

```JavaScript
const Campaigns.assignCampaignMessageTemplate(body)
```




#### [Create Campaign](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/create_campaign)

```JavaScript
const Campaigns.createCampaign(body)
```




#### [Create Campaign Clone](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/create_campaign_clone)

```JavaScript
const Campaigns.createCampaignClone(body)
```




#### [Create Campaign Send Job](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/create_campaign_send_job)

```JavaScript
const Campaigns.createCampaignSendJob(body)
```




#### [Delete Campaign](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/delete_campaign)

```JavaScript
const Campaigns.deleteCampaign(id)
```




#### [Get Campaign](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_campaign)

```JavaScript
const Campaigns.getCampaign(id, opts)
```




#### [Get Campaign Message](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_campaign_message)

```JavaScript
const Campaigns.getCampaignMessage(id, opts)
```




#### [Get Campaign Relationships](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_campaign_relationships)

```JavaScript
const Campaigns.getCampaignRelationships(id, relatedResource)
```




#### [Get Campaign Send Job](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_campaign_send_job)

```JavaScript
const Campaigns.getCampaignSendJob(id, opts)
```




#### [Get Campaign Tags](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_campaign_tags)

```JavaScript
const Campaigns.getCampaignTags(campaignId, opts)
```




#### [Get Campaigns](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_campaigns)

```JavaScript
const Campaigns.getCampaigns(opts)
```




#### [Update Campaign](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/update_campaign)

```JavaScript
const Campaigns.updateCampaign(body, id)
```




#### [Update Campaign Message](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/update_campaign_message)

```JavaScript
const Campaigns.updateCampaignMessage(body, id)
```




#### [Update Campaign Send Job](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/update_campaign_send_job)

```JavaScript
const Campaigns.updateCampaignSendJob(body, id)
```



## DataPrivacyApi


#### [Request Profile Deletion](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/request_profile_deletion)

```JavaScript
const DataPrivacy.requestProfileDeletion(body)
```



## FlowsApi


#### [Get Flow Tags](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_flow_tags)

```JavaScript
const Flows.getFlowTags(flowId, opts)
```



## ListsApi


#### [Get List Tags](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_list_tags)

```JavaScript
const Lists.getListTags(listId, opts)
```



## SegmentsApi


#### [Get Segment Tags](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_segment_tags)

```JavaScript
const Segments.getSegmentTags(segmentId, opts)
```



## TagsApi


#### [Create Tag](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/create_tag)

```JavaScript
const Tags.createTag(body)
```




#### [Create Tag Group](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/create_tag_group)

```JavaScript
const Tags.createTagGroup(body)
```




#### [Create Tag Relationships](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/create_tag_relationships)

```JavaScript
const Tags.createTagRelationships(body, id, relatedResource)
```




#### [Delete Tag](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/delete_tag)

```JavaScript
const Tags.deleteTag(id)
```




#### [Delete Tag Group](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/delete_tag_group)

```JavaScript
const Tags.deleteTagGroup(id)
```




#### [Delete Tag Relationships](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/delete_tag_relationships)

```JavaScript
const Tags.deleteTagRelationships(body, id, relatedResource)
```




#### [Get Tag](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_tag)

```JavaScript
const Tags.getTag(id, opts)
```




#### [Get Tag Group](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_tag_group)

```JavaScript
const Tags.getTagGroup(id, opts)
```




#### [Get Tag Group Relationships](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_tag_group_relationships)

```JavaScript
const Tags.getTagGroupRelationships(id, relatedResource)
```




#### [Get Tag Groups](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_tag_groups)

```JavaScript
const Tags.getTagGroups(opts)
```




#### [Get Tag Relationships](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_tag_relationships)

```JavaScript
const Tags.getTagRelationships(id, relatedResource)
```




#### [Get Tags](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/get_tags)

```JavaScript
const Tags.getTags(opts)
```




#### [Update Tag](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/update_tag)

```JavaScript
const Tags.updateTag(body, id)
```




#### [Update Tag Group](https://developers.klaviyo.com/en/v2022-12-15.pre/reference/update_tag_group)

```JavaScript
const Tags.updateTagGroup(body, id)
```



# Appendix

## Limitations

- The `api_key` is set at the global level: this means that if you manage multiple stores, you will need to run the code for each store in a different environment

## Refresher on catching exceptions:

```JavaScript

try {
    await YOUR_CALL
} catch e {
    print(e.status, e.reason, e.body, e.headers)
}
```

## Namespace

In the interest of making the SDK follow conventions, we made the following namespace changes *relative* to the language agnostic resources up top.

1. dashes `-` are removed in favor of camelCase
2. all other non-alphanumeric symbols, including spaces, are removed.

For example:
* `get-campaigns` becomes `getCampaigns`
* `Track & Identify` becomes `TrackIdentify`

## Parameters & Arguments

The parameters follow the same naming conventions as the resource groups and operations.

We stick to the following convention for parameters/arguments

1. All parameters are passed as function args.
2. All optional params, as well as all Body and Form Data params (including required ones), are passed in a single object param.
3. All query and path params that are tagged as `required` in the docs are passed as positional args.
4. There is no need to pass in your private `api_key` for any operations, as it is defined upon ConfigWrapper instantiation; public key is still required where its used.