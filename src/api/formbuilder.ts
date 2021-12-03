import Axios from 'axios';
import NProgress from 'nprogress';
import { TaskData } from 'react-form-builder2';

const api = Axios.create({
  baseURL: ``,
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    NProgress.start();
  }
  config = {
    ...config,
    auth: {
      username: '',
      password: process.env.NEXT_PUBLIC_SUBMITTABLE_API_KEY as string,
    },
  };
  return config;
});

api.interceptors.response.use(
  (response) => {
    typeof window !== 'undefined' && NProgress.done();
    return response.data;
  },
  async (error) => {
    typeof window !== 'undefined' && NProgress.done();
    return Promise.reject(error);
  }
);

export const postForm = async (data: unknown) =>
  api.post('/api/post-formbuilder-json', data) as Promise<TaskData[]>;

export const loadForm = async () =>
  api.get('/formbuilder.json') as Promise<TaskData[]>;

export default api;
