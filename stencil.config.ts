import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "Statismic",
  outputTargets: [
    { type: "dist" },
    { type: "docs" },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  bundles: [{ components: ["stat-plot"] }]
};
