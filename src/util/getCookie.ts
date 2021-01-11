import { parseCookies } from '~/util';

export const getCookie = (req, name) => {
  const cookies = parseCookies(req);
  console.log('🚀 ~ file: getCookie.ts ~ line 5 ~ getCookie ~ cookies', cookies);
  const cookie = cookies[name];
  console.log('🚀 ~ file: getCookie.ts ~ line 6 ~ getCookie ~ cookie', cookie);

  return cookie || null;
};
