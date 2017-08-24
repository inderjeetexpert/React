import {
  TOKEN_AUTH,
  LIVE_GET_COUNTER,
  GET_USER_DETAIL,
  GET_TOKEN_AUTH,
  LIVE_GET_LAST_VISITS_DETAILS,
  VISITS_SUMMARY_GET

} from './urls';

import axios from 'axios';

export function liveGetCounter(info) {
  return axios.get(LIVE_GET_COUNTER(info)).then(
    ({ data }) => data);
}


export function getUserDetailPiwik() {

  axios.defaults.headers.common['Authorization'] = "Token " + TOKEN_AUTH;
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


export function visitsSummaryGet(info) {
  return axios.get(VISITS_SUMMARY_GET(info)).then(
    ({ data }) => data);
}
