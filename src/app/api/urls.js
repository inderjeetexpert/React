// export const PIWIK_TOKEN_AUTH = localStorage.getItem('piwik-key');
export const TOKEN_AUTH = localStorage.getItem('key')

// 'a4c652c9056734d8b9dcf385f1d3aca9';
export const SITE_URL = "https://piwik.carderockllc.com/";

export const LIVE_GET_COUNTER = info =>
  `${SITE_URL}?module=API&method=Live.getCounters&idSite=${info.idSite}&lastMinutes=${info.lastMinutes}&format=JSON&token_auth=${localStorage.getItem('piwik-key')}`;

export const GET_USER_DETAIL = 'https://carderockllc.com/api/v1/piwik/getuserdetail/';

export const GET_TOKEN_AUTH = data =>
  `${SITE_URL}?module=API&userLogin=${data.login}&method=UsersManager.getTokenAuth&format=JSON&md5Password=${data.password}`;

export const LIVE_GET_LAST_VISITS_DETAILS = data =>
  `${SITE_URL}?module=API&method=Live.getLastVisitsDetails&idSite=${data.idSite}&period=day&date=today&format=JSON&token_auth=${localStorage.getItem('piwik-key')}`

export const VISITS_SUMMARY_GET = data =>
  `${SITE_URL}?module=API&method=VisitsSummary.get&idSite=${data.idSite}&period=day&date=last2&format=json&token_auth=${localStorage.getItem('piwik-key')}`


