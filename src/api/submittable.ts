import Axios from 'axios';
import NProgress from 'nprogress';
import { GetSubmissionsResponse, Submission } from 'type/idex';

const api = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SUBMITTABLE_API_URL}`,
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    NProgress.start();
  }
  console.log(config);
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
    console.log(response);
    typeof window !== 'undefined' && NProgress.done();
    return response.data;
  },
  async (error) => {
    typeof window !== 'undefined' && NProgress.done();
    return Promise.reject(error);
  }
);

export const getAllSubmission = async (projectId: Nullable<string>) =>
  api.get('/submissions', {
    params: {
      pageSize: 50,
      page: 1,
      'Projects.Include': projectId,
    },
  }) as Promise<GetSubmissionsResponse>;

export const getSubmission = async (submissionId: string) =>
  api.get(`/submissions/${submissionId}`) as Promise<Submission>;

export default api;
