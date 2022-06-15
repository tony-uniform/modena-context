import React from "react";
import { UniformContext } from "@uniformdev/context-react";
import { UniformAppProps } from "@uniformdev/context-next";
import createUniformContext from "../lib/context/uniformContext";
import { BasketSummary } from "@/components/commerce/cart";
import { FullWidth } from "@/components/layouts/fullWidth";
import { BasketContextProvider } from "@/components/commerce/cart/providers/basketProvider";
import getConfig from "next/config";

import "../styles/globals.scss";

const {
  publicRuntimeConfig: { edgeEnabled },
} = getConfig();

const clientContext = createUniformContext();

export default function MyApp({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  return (
    <UniformContext
      context={serverUniformContext ?? clientContext}
      outputType={edgeEnabled === "true" ? "edge" : "standard"}
    >
      <BasketContextProvider>
        <FullWidth>
          <Component {...pageProps} />
          <BasketSummary id="basket-summary" />
        </FullWidth>
      </BasketContextProvider>
    </UniformContext>
  );
}
