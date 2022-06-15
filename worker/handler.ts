import intentManifest from "../lib/intentManifest.json";
import { createEdgeHandler } from "@uniformdev/optimize-edge";
import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export async function handleRequest(event: FetchEvent): Promise<Response> {
  const { request } = event;
  const handler = createEdgeHandler();
  const originResponse = await getAssetFromKV(event);
  const { response } = await handler({
    intentManifest,
    context: {
      cookies: request.headers.get("cookie") || "",
      url: request.url,
      userAgent: request.headers.get("user-agent") || "",
    },
    response: originResponse,
  });
  return response;
}