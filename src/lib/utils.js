import { PUBLIC_HOST } from "$env/static/public"
export const getShortLink = (shortSlug) => `${PUBLIC_HOST}/${shortSlug}`
