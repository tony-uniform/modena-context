// note: `cookie` is a transient dependency via `nookies`
import { parse } from "cookie";

export interface SubscriberInfo {
  subscriberId?: string | null;
  subscriberKey?: string | null;
}

export const resolveSubscriberInfo = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const subscriberInfo: SubscriberInfo = {
    subscriberId: null,
    subscriberKey: null,
  };

  const parsedCookies = parse(document.cookie);
  const parsedUrl = new URL(window.location.href);
  if (parsedUrl.searchParams.has("sfmc_subscriberid")) {
    subscriberInfo.subscriberId =
      parsedUrl.searchParams.get("sfmc_subscriberid");
    document.cookie = `sfmc_subscriberid=${encodeURIComponent(
      subscriberInfo.subscriberId
    )}`;
  } else if (parsedCookies["sfmc_subscriberid"]) {
    subscriberInfo.subscriberId = parsedCookies["sfmc_subscriberid"];
  }

  if (parsedUrl.searchParams.has("sfmc_subscriberkey")) {
    subscriberInfo.subscriberKey =
      parsedUrl.searchParams.get("sfmc_subscriberkey");
    document.cookie = `sfmc_subscriberkey=${encodeURIComponent(
      subscriberInfo.subscriberKey
    )}`;
  } else if (parsedCookies["sfmc_subscriberkey"]) {
    subscriberInfo.subscriberKey = parsedCookies["sfmc_subscriberkey"];
  }

  return subscriberInfo;
};

export const sfmcOptimizeTrackerPlugin = ({
  apiHost,
  apiKey,
}: {
  apiHost: string;
  apiKey: string;
}) => {
  return {
    name: "optimize-sfmc-plugin",
    track: async ({ payload }) => {
      console.log("sfmc track called", payload);
      // sfmc tracking only available in the browser
      if (typeof window === "undefined") {
        return;
      }

      const subscriberInfo = resolveSubscriberInfo();
      if (!subscriberInfo.subscriberId || !subscriberInfo.subscriberKey) {
        console.log("no sfmc subscriberid and subscriberkey could be resolved");
        return;
      }

      try {
        const res = await fetch(`${apiHost}/api/v1/ingest-user-intent-scores`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
          },
          body: JSON.stringify({
            trackerData: payload,
            subscriberInfo,
            integrationType: "sfmc",
          }),
        });
        if (res.ok) {
          const json = await res.json();
          console.log("json", json);
        }
      } catch (err) {
        console.error(err);
      }
    },
  };
};
