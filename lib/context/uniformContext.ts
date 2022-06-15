import {
  Context,
  enableContextDevTools,
  ManifestV2,
} from "@uniformdev/context";
import { NextCookieTransitionDataStore } from "@uniformdev/context-next";
import { NextPageContext } from "next";
import manifest from "./manifest.json";

export default function createUniformContext(
  serverContext?: NextPageContext
): Context {
  const context = serverContext
    ? new Context({
        defaultConsent: true,
        manifest: manifest as ManifestV2,
        transitionStore: new NextCookieTransitionDataStore({
          serverContext,
        }),
        plugins: [enableContextDevTools()],
      })
    : new Context({
        defaultConsent: true,
        manifest: manifest as ManifestV2,
        plugins: [enableContextDevTools()],
      });

  return context;
}
