import Axios from 'axios';
import NProgress from 'nprogress';

const api = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

api.interceptors.request.use((config) => {
  if (config.method === 'get' && typeof window !== 'undefined') {
    NProgress.start();
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    response?.config?.method === 'get' &&
      typeof window !== 'undefined' &&
      NProgress.done();
    return response.data;
  },
  async (error) => {
    error?.response?.config?.method === 'get' &&
      typeof window !== 'undefined' &&
      NProgress.done();
    return Promise.reject(error);
  }
);

export function setRequesetAuthorizationHeader(token?: string) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  api?.defaults?.headers?.common['Authorization'] = token
    ? `Bearer ${token}`
    : '';
}

export default api;
