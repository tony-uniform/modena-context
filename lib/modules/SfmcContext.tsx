import React from "react";
import { resolveSubscriberInfo, SubscriberInfo } from "./sfmcHelpers";

export interface SfmcContextValue {
  subscriberInfo?: SubscriberInfo;
}

export const SfmcContext = React.createContext<SfmcContextValue>(undefined);

// note: the purpose of the SFMC context provider is to help ensure that subscriber info is resolved
// on every route render. The SFMC context provider is intended to wrap the app component.
// alternatively, if you don't wish to use the context provider, just ensure that `resolveSubscriberInfo`
// is placed where it will be called on every page load / route change.
export const SfmcContextProvider: React.FC = (props) => {
  const subscriberInfo = resolveSubscriberInfo();

  return (
    <SfmcContext.Provider value={{ subscriberInfo }}>
      {props.children}
    </SfmcContext.Provider>
  );
};
