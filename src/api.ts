import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

const Error = {
  UNAUTHORIZED: 401
};


export const createAPI = (dispatch: () => void): AxiosInstance => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSucess = (response: AxiosResponse) => {
    return response;
  };

  const onFail = (err: AxiosError) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      dispatch();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSucess, onFail);

  return api;
};
