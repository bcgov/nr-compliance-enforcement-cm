import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

const URL = process.env.BC_PARKS_API_URL;
const token = process.env.BC_PARKS_API_KEY;

axios.interceptors.response.use(undefined, (error: AxiosError) => {
  console.error(error.response);
  return Promise.reject(error as Error);
});

export const getAllParks = () => {
  let config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "None",
      "x-api-key": `${token}`,
    },
  };

  const getAllParksUrl = `${URL}/parks/names?status=established`;

  return axios
    .get(getAllParksUrl, config)
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data.data.items;
    })
    .catch((error: AxiosError) => {
      if (error.response) {
        const data = error.response?.data as any;
        throw new Error(`BC Parks API Request Failed: ${JSON.stringify(data?.errors)}`);
      } else if (error.request) {
        throw new Error(`No response received from the BC Parks API: ${URL}, ${token}, ${error.message}`);
      } else {
        throw new Error(`BC Parks API Error: ${error.message}`);
      }
    });
};
