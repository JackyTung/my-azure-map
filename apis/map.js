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
