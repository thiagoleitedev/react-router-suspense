import React from 'react';
import { RoutingContext } from './RoutingContext';

type RoutingProviderType = {
  router: any;
  children: React.ReactNode;
};

export const RoutingProvider = (props: RoutingProviderType) => (
  <RoutingContext.Provider value={props.router.context}>{props.children}</RoutingContext.Provider>
);
