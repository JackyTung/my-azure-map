// Ref: https://docs.microsoft.com/en-us/javascript/api/azure-maps-rest/atlas.service.searchurl?view=azure-maps-typescript-latest#methods

import * as atlasService from "azure-maps-rest";
import { MAP_KEY } from "@/utils/app.config";

// Use SubscriptionKeyCredential with a subscription key.
const subscriptionKeyCredential = new atlasService.SubscriptionKeyCredential(
  MAP_KEY
);

// Use subscriptionKeyCredential to create a pipeline.
const pipeline = atlasService.MapsURL.newPipeline(subscriptionKeyCredential, {
  retryOptions: { maxTries: 4 }, // Retry options
});

// Create an instance of the SearchURL client.
export const searchURL = new atlasService.SearchURL(pipeline);

export const searchAddress = ({ query = "1 microsoft way, redmond, wa" }) => {
  return searchURL.searchAddress(atlasService.Aborter.timeout(10000), query, {
    view: "Auto",
  });
};

// Ref: https://docs.microsoft.com/en-us/rest/api/maps/search/get-search-poi
export const searchPOI = ({ query = "gasoline-station", payload }) => {
  const { limit, lat, lon, radius, maxFuzzyLevel } = payload;
  return searchURL.searchPOI(atlasService.Aborter.timeout(10000), query, {
    limit,
    lat,
    lon,
    radius,
    maxFuzzyLevel,
    view: "Auto",
  });
};

/*
// position = [longitude, latitude]
export const searchReverseAddress = ({ position = [0, 0], payload = {} }) => {
  return searchURL.searchReverseAddress(atlasService.Aborter.timeout(10000), position, payload);
};


export const searchReverseCrossStreet = ({ position = [0, 0], payload = {} }) => {
  return searchURL.searchReverseCrossStreet(atlasService.Aborter.timeout(10000), position, payload);
};

// query: string | [longitude, latitude]
export const searchFuzzy = ({ query, payload = {} }) => {
  return searchURL.searchFuzzy(atlasService.Aborter.timeout(10000), query, option);
};

*/
