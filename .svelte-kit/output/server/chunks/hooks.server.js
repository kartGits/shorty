import { a as PUBLIC_POCKETBASE_URL } from "./public.js";
import Pocketbase from "pocketbase";
const pb = new Pocketbase(PUBLIC_POCKETBASE_URL);
const handle = async ({ event, resolve }) => {
  pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  if (pb.authStore.isValid) {
    try {
      await pb.collection("users").authRefresh();
    } catch (_) {
      await pb.authStore.clear();
    }
  }
  event.locals.pb = pb;
  event.locals.user = structuredClone(pb.authStore.model);
  const response = await resolve(event);
  response.headers.set(
    "set-cookie",
    pb.authStore.exportToCookie({ httpOnly: false })
  );
  return response;
};
export {
  handle
};
