import { r as redirect } from "../../../../chunks/index.js";
const POST = ({ locals }) => {
  locals.pb.authStore.clear();
  locals.user = null;
  throw redirect(303, "/auth/login");
};
export {
  POST
};
