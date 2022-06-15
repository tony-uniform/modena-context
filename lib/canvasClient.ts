import { CanvasClient } from "@uniformdev/canvas";
import getConfig from "next/config";

const {
  serverRuntimeConfig: {
    uniformApiKey,
    presentationApiHost,
    presentationProjectId,
  },
} = getConfig();

export const enableEnhancers = presentationApiHost.includes("uniform.app");

export const canvasClient = new CanvasClient({
  apiKey: uniformApiKey,
  apiHost: presentationApiHost,
  projectId: presentationProjectId,
});
