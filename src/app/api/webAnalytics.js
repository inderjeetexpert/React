import {
  LIVE_GET_COUNTER,
  GET_USER_DETAIL,
  GET_TOKEN_AUTH,
  LIVE_GET_LAST_VISITS_DETAILS,
  API_GET,
  REFERRERS_GET_REFERRER_TYPE,
  USER_COUNTRY_GET_COUNTRY

} from './urls';

import axios from 'axios';

export function liveGetCounter(info) {
  return axios.get(LIVE_GET_COUNTER(info)).then(
    ({ data }) => data);
}


export function getUserDetailPiwik() {

  axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
  // axios.defaults.headers.common['Content-Type'] = 'application/json';
  return axios.get(GET_USER_DETAIL).then(({ data }) => data)
}

export function getTokenAuthPiwik(data) {
  delete axios.defaults.headers.common['Authorization'];
  return axios.get(GET_TOKEN_AUTH(data)).then(
    ({ data }) => data);
}

export function liveGetLastVisitsDetails(info) {
  return axios.get(LIVE_GET_LAST_VISITS_DETAILS(info)).then(
    ({ data }) => data);
}


export function getApi(info) {
  return axios.get(API_GET(info)).then(
    ({ data }) => data);
}


export function getReferrerType(info) {
  return axios.get(REFERRERS_GET_REFERRER_TYPE(info)).then(({ data }) => data)
}

export function getUserCountry(info) {
  return axios.get(USER_COUNTRY_GET_COUNTRY(info)).then(({ data }) => data)
}

