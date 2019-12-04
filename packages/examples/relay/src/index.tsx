/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />
import React from "react";
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import "./index.css";
import RelayEnvironment from "./RelayEnvironment";
import routes from "./routes";
import {
  createRouter,
  RoutingProvider,
  RouterRenderer
} from "react-router-suspense";

// Uses the custom router setup to define a router instance that we can pass through context
const router = createRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <RoutingProvider router={router}>
      <RouterRenderer
        pending={<div>pending...</div>}
        fallback={<div>loading fallback...</div>}
      />
    </RoutingProvider>
  </RelayEnvironmentProvider>
);
