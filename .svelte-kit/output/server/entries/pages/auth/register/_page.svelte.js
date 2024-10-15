import { c as create_ssr_component, e as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h1>Register</h1>
<form method="${"post"}"><input type="${"text"}" name="${"name"}" placeholder="${"Name"}" required>
  <input type="${"email"}" name="${"email"}" placeholder="${"Email"}" required>
  <input type="${"password"}" name="${"password"}" placeholder="${"Password"}" required minlength="${"8"}">
  <input type="${"password"}" name="${"passwordConfirm"}" placeholder="${"Confirm Password"}" required minlength="${"8"}">

  ${form?.error ? `<center style="${"color: crimson; margin:1rem"}"><strong>${escape(form.error)}</strong></center>` : ``}

  <button type="${"submit"}">Register</button>
  <center><a href="${"login"}">Already have an account? Login</a></center></form>`;
});
export {
  Page as default
};
