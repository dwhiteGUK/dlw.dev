import { parseCookies } from '~/util';

export const getCookie = (req, name) => {
  const cookies = parseCookies(req);
  const cookie = cookies[name];

  return cookie || null;
};
