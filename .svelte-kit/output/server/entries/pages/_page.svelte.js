import { c as create_ssr_component, d as add_attribute, e as escape, f as each } from "../../chunks/index2.js";
import { g as getShortLink } from "../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data, form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<article><h1>Shorten Your Link</h1>
  <form action="${"?/createShortLink"}" method="${"post"}"><label for="${"url"}">Link
      <input type="${"url"}" name="${"url"}" id="${"url"}"${add_attribute("value", form?.url || "", 0)} placeholder="${"http://.."}" spellcheck="${"false"}" required></label>

    ${form?.shortLink ? `<button class="${"contrast"}" type="${"button"}">${`<span>${escape(form.shortLink)}</span>`}</button>` : ``}

    <button type="${"submit"}">✂️ Shorten</button></form></article>

<article><h1>Your Top 10 Links</h1>
  <table><thead><tr><th>#</th>
        <th>Link</th>
        <th>Short Link</th>
        <th>Clicks</th></tr></thead>
    <tbody>${each(data.top10Links, (link, i) => {
    return `<tr><td>${escape(i + 1)}</td>
          <td>${escape(link.url)}</td>
          <td><a${add_attribute("href", getShortLink(link.shortSlug), 0)}>${escape(link.shortSlug)}</a></td>
          <td>${escape(link.clicks)}</td>
        </tr>`;
  })}</tbody></table></article>`;
});
export {
  Page as default
};
