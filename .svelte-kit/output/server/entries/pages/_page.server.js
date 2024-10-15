import { r as redirect } from "../../chunks/index.js";
import { nanoid } from "nanoid/async";
import { g as getShortLink } from "../../chunks/utils.js";
const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(303, "/auth/login");
  }
  const top10Links = await locals.pb.collection("links").getFullList(10, {
    sort: "-clicks",
    filter: `createdBy="${locals.user?.id}"`
  });
  return {
    top10Links: structuredClone(top10Links)
  };
};
const actions = {
  createShortLink: async ({ locals, request }) => {
    const data = await request.formData();
    try {
      const url = data.get("url");
      const shortSlug = await nanoid(8);
      await locals.pb.collection("links").create({
        url,
        shortSlug,
        createdBy: locals.user?.id
      });
      return {
        shortLink: getShortLink(shortSlug),
        url
      };
    } catch (e) {
      console.log(e);
      return fail(e.status, { error: e.message });
    }
  }
};
export {
  actions,
  load
};
