import { compose, EnhancerBuilder } from "@uniformdev/canvas";
import getConfig from "next/config";

import { CANVAS_CONTENTFUL_PARAMETER_TYPES } from "@uniformdev/canvas-contentful";
import { contentfulEnhancer } from "./contentful/contentfulEnhancer";
import { contentfulModelConverter } from "./contentful/contentfulModelConverter";

import { bigCommerceEnhancer } from "./bigcommerce/bigCommerceEnhancer";
import { CANVAS_BIGCOMMERCE_PARAMETER_TYPES } from "@uniformdev/canvas-bigcommerce";
import { bigCommerceModelConverter } from "./bigcommerce/bigCommerceModelConverter";

import { CANVAS_CONTENTSTACK_PARAMETER_TYPES } from "@uniformdev/canvas-contentstack";
import { contentstackEnhancer } from "./contentstack/contentstackEnhancer";
import { contentstackModelConverter } from "./contentstack/contentstackModelConverter";

import { sanityEnhancer } from "./sanity/sanityEnhancer";
import { CANVAS_SANITY_PARAMETER_TYPES } from "@uniformdev/canvas-sanity";
import { sanityModelConverter } from "./sanity/sanityModelConverter";

import { salesforceEnhancer } from "./salesforcecms/salesforceEnhancer";
import { CANVAS_SFCMS_PARAMETER_TYPES } from "@uniformdev/canvas-salesforcecms";
import { salesforceModelConverter } from "./salesforcecms/salesforceModelConverter";

import { commercetoolsEnhancer } from "./commercetools/commerceToolsEnhancer";
import { CANVAS_COMMERCETOOLS_PARAMETER_TYPES } from "@uniformdev/canvas-commercetools";
import { commercetoolsModelConverter } from "./commercetools/commercetoolsModelConverter";

import { enableEnhancers } from "lib/canvasClient";

const { serverRuntimeConfig } = getConfig();
const {
  commercetoolsAuthUrl,
  commercetoolsProjectKey,
  commercetoolsClientId,
  commercetoolsClientSecret,
  commercetoolsApiUrl,
  sanityProjectId,
  sanityToken,
  bigCommerceStoreHash,
  bigCommerceToken,
  contentfulSpaceId,
  contentfulDeliveryToken,
  contentstackApiKey,
  contentstackDeliveryToken,
  contentstackEnvironment,
  sitecoreUniformApiUrl,
  sitecoreApiKey,
  sitecoreUniformApiSitename,
  salesforceCmsChannelId,
  salesforceCmsOrganizationId,
  salesforceCmsInstanceUrl,
} = serverRuntimeConfig;

const commerceToolsConfigured: boolean =
  commercetoolsAuthUrl !== undefined &&
  commercetoolsProjectKey !== undefined &&
  commercetoolsClientId !== undefined &&
  commercetoolsClientSecret !== undefined &&
  commercetoolsApiUrl !== undefined;

const contentfulConfigured: boolean =
  contentfulSpaceId !== undefined && contentfulDeliveryToken !== undefined;

const contentstackConfigured: boolean =
  contentstackApiKey !== undefined &&
  contentstackDeliveryToken !== undefined &&
  contentstackEnvironment !== undefined;

const sanityConfigured: boolean =
  sanityProjectId !== undefined && sanityToken !== undefined;

const bigCommerceConfigured: boolean =
  bigCommerceStoreHash !== undefined && bigCommerceToken !== undefined;

const sitecoreConfigured: boolean =
  sitecoreApiKey !== undefined &&
  sitecoreUniformApiSitename !== undefined &&
  sitecoreUniformApiUrl !== undefined;

const salesforceConfigured: boolean =
  salesforceCmsChannelId !== undefined &&
  salesforceCmsOrganizationId !== undefined &&
  salesforceCmsInstanceUrl !== undefined;

if (enableEnhancers) {
  console.warn(
    contentfulConfigured
      ? "✅  Contentful enhancer is configured and enabled."
      : "⚠️   Contentful enhancer is not configured and therefore disabled. If that's unexpected, please check your env vars."
  );
  console.warn(
    contentstackConfigured
      ? "✅  Contentstack enhancer is configured and enabled."
      : "⚠️   Contentstack enhancer is not configured and therefore disabled. If that's unexpected, please check your env vars."
  );

  console.warn(
    bigCommerceConfigured
      ? "✅  BigCommerce enhancer is configured and enabled."
      : "⚠️   BigCommerce enhancer is not configured and therefore disabled. If that's unexpected, please check your env vars."
  );

  console.warn(
    commerceToolsConfigured
      ? "✅  Commercetools enhancer is configured and enabled."
      : "⚠️   Commercetools enhancer is not configured and therefore disabled. If that's unexpected, please check your env vars."
  );

  console.warn(
    sanityConfigured
      ? "✅  Sanity enhancer is configured and enabled."
      : "⚠️  Sanity enhancer is not configured and therefore disabled. If that's unexpected, please check your env vars."
  );

  console.warn(
    sitecoreConfigured
      ? "✅  Sitecore enhancer is configured and enabled."
      : "⚠️  Sitecore enhancer is not configured and therefore disabled. If that's unexpected, please check your env vars."
  );

  console.warn(
    salesforceConfigured
      ? "✅  Salesforce CMS enhancer is configured and enabled."
      : "⚠️  Salesforce CMS enhancer is not configured and therefore disabled. If that's unexpected, please check your env vars."
  );
} else {
  console.warn(
    "⚠️ Enhancer proxy is enabled. All local enhancers are disabled"
  );
}

const localEnhancers = new EnhancerBuilder()
  .parameterType(
    CANVAS_SANITY_PARAMETER_TYPES,
    sanityConfigured
      ? compose(sanityEnhancer(), sanityModelConverter)
      : undefined
  )
  .parameterType(
    CANVAS_CONTENTFUL_PARAMETER_TYPES,
    contentfulConfigured
      ? compose(contentfulEnhancer(), contentfulModelConverter)
      : undefined
  )
  .parameterType(
    CANVAS_CONTENTSTACK_PARAMETER_TYPES,
    contentstackConfigured
      ? compose(contentstackEnhancer(), contentstackModelConverter)
      : undefined
  )
  .parameterType(
    CANVAS_BIGCOMMERCE_PARAMETER_TYPES,
    bigCommerceConfigured
      ? compose(bigCommerceEnhancer(), bigCommerceModelConverter)
      : undefined
  )
  .parameterType(
    CANVAS_COMMERCETOOLS_PARAMETER_TYPES,
    commerceToolsConfigured
      ? compose(commercetoolsEnhancer(), commercetoolsModelConverter)
      : undefined
  )
  .parameterType(
    CANVAS_SFCMS_PARAMETER_TYPES,
    salesforceConfigured
      ? compose(salesforceEnhancer(), salesforceModelConverter)
      : undefined
  );

export const enhancers = enableEnhancers
  ? localEnhancers
  : new EnhancerBuilder();
