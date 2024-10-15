import { P as PUBLIC_HOST } from "./public.js";
const getShortLink = (shortSlug) => `${PUBLIC_HOST}/${shortSlug}`;
export {
  getShortLink as g
};
