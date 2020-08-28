/* eslint-disable no-console */
// We use both axios module and @nuxtjs/axios throughout the application
import axios from 'axios';

const hideLogs = process.env.NODE_ENV !== 'development' || process.argv.includes('--silent');

const logRequest = (config) => {
  console.log(`[ Making request to ${config.url} ]`);
  return config;
};

const logError = (error) => {
  const { response, config } = error;
  const code = response && response.status;
  console.error(`[ Failed Request to: ${config.url} with status code ${code} ]`);
};

export default function ({ $axios }) {
  if (hideLogs || process.env.AXIOS_LISTENERS_LOADED) return;

  $axios.onRequest(logRequest);
  $axios.onError(logError);

  axios.interceptors.request.use(logRequest);
  axios.interceptors.response.use(res => res, logError);
  process.env.AXIOS_LISTENERS_LOADED = true;
}
