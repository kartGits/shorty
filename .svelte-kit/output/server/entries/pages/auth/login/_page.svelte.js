import { c as create_ssr_component, e as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1>Login</h1>
<form method="${"post"}" action="${"?/login"}"><input type="${"email"}" name="${"email"}" placeholder="${"Email"}" required>
  <input type="${"password"}" name="${"password"}" placeholder="${"Password"}" required>
  <small><a>Forgot Password?</a></small>
  ${form?.error ? `<center style="${"color: crimson; margin:1rem"}"><strong>${escape(form.error)}</strong></center>` : `${form?.success ? `<center style="${"color: limegreen; margin:1rem"}"><strong>${escape(form.success)}</strong></center>` : ``}`}

  <button type="${"submit"}">Login</button>
  <center><a href="${"register"}">Don&#39;t have an account? Register</a></center></form>

<dialog ${""}><article><h3>Request Password Reset</h3>
    <form action="${"?/resetPassword"}" method="${"post"}"><input type="${"email"}" name="${"email"}" placeholder="${"Email"}" required>
      <button type="${"submit"}">Send Reset Email</button>
      <button class="${"secondary"}">Cancel</button></form></article></dialog>`;
});
export {
  Page as default
};
