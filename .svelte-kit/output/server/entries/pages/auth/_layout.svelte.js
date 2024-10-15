import { c as create_ssr_component } from "../../../chunks/index2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article>${slots.default ? slots.default({}) : ``}</article>`;
});
export {
  Layout as default
};
