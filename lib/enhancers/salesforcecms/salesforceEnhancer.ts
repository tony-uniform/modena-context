import getConfig from "next/config";
import {
  createSalesforceCMSEnhancer,
  ClientConfiguration,
  createSalesforceCMSClient,
} from "@uniformdev/canvas-salesforcecms";

const { serverRuntimeConfig } = getConfig();
const {
  salesforceCmsChannelId,
  salesforceCmsOrganizationId,
  salesforceCmsInstanceUrl,
} = serverRuntimeConfig;

export const salesforceEnhancer = () => {
  if (!salesforceCmsChannelId) {
    throw new Error("SALESFORCE_CMS_CHANNEL_ID env not set.");
  }

  if (!salesforceCmsOrganizationId) {
    throw new Error("SALESFORCE_CMS_ORGANIZATION_ID env not set.");
  }

  if (!salesforceCmsInstanceUrl) {
    throw new Error("SALESFORCE_CMS_INSTANCE_URL env not set.");
  }

  const config: ClientConfiguration = {
    channelId: salesforceCmsChannelId,
    organizationId: salesforceCmsOrganizationId,
    instanceUrl: salesforceCmsInstanceUrl,
  };

  const client = createSalesforceCMSClient(config);
  const previewClient = client;

  return createSalesforceCMSEnhancer({
    client,
    previewClient,
    createQuerystringParams: ({ defaultQuerystringParams }) => {
      return defaultQuerystringParams;
    },
  });
};
