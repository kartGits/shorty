import { r as redirect } from "../../../chunks/index.js";
const load = ({ locals }) => {
  if (locals.user) {
    throw redirect(303, "/");
  }
};
export {
  load
};
