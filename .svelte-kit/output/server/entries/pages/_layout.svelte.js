import { c as create_ssr_component, e as escape } from "../../chunks/index2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><nav style="${"padding: 0 1rem;"}"><ul><li><strong><a href="${"/"}">Shorty</a></strong></li></ul>
    <ul>${!data.user ? `<li><a href="${"/auth/login"}"><button class="${"outline"}">Login</button></a></li>
        <li><a href="${"/auth/register"}"><button>Register</button></a></li>` : `<li role="${"list"}" dir="${"rtl"}"><a href="${"#"}" aria-haspopup="${"listbox"}"><img src="${"https://api.dicebear.com/5.x/thumbs/svg?radius=50&seed=" + escape(data.user.name, true)}" alt="${"User Avatar"}" width="${"56"}"></a>
          <ul role="${"listbox"}"><li><span>Logged in as <strong>${escape(data.user.name)}</strong></span>
              <br>
              <small>${escape(data.user.email)}</small></li>
            <li><form action="${"/auth/logout"}" method="${"post"}" style="${"margin: 0;"}"><button type="${"submit"}" class="${"secondary"}">Logout</button></form></li></ul></li>`}</ul></nav>
  <main class="${"container"}">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
