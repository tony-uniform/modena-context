import getConfig from "next/config";
import { createContentfulEnhancer } from "@uniformdev/canvas-contentful";
import { createClient } from "contentful";
import previewEnabled from "lib/preview/previewEnabled";

const { serverRuntimeConfig } = getConfig();
const { contentfulSpaceId, contentfulDeliveryToken, contentfulPreviewToken } =
  serverRuntimeConfig;
const contentfulEnvironment = process.env.CONTENTFUL_ENVIRONMENT ?? "master";

export const contentfulEnhancer = () => {
  if (!contentfulSpaceId) {
    throw new Error("CONTENTFUL_SPACE_ID env not set.");
  }

  if (!contentfulDeliveryToken) {
    throw new Error("CONTENTFUL_CDA_ACCESS_TOKEN env not set.");
  }

  if (!contentfulPreviewToken) {
    throw new Error("CONTENTFUL_CDA_ACCESS_TOKEN env not set.");
  }

  const client = createClient({
    space: contentfulSpaceId,
    environment: contentfulEnvironment,
    accessToken: contentfulDeliveryToken,
  });

  const previewClient = createClient({
    space: contentfulSpaceId,
    environment: contentfulEnvironment,
    accessToken: contentfulPreviewToken,
    host: "preview.contentful.com",
  });

  // IMPORTANT: making sure that batching is only enabled when UNIFORM_PREVIEW_ENABLED is set to true
  // using the approach with env vars and not next.js context.preview since it is not available in this scope
  // see: https://github.com/uniformdev/optimize/issues/3200
  const useBatching = !previewEnabled();
  console.log(" ⚠️ useBatching: " + useBatching);
  return createContentfulEnhancer({
    client,
    previewClient,
    useBatching,
    createQuery: ({ defaultQuery }) => {
      return {
        ...defaultQuery,
        select: "fields",
        include: 2,
      };
    },
  });
};
