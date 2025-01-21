import axios from "axios";

const axiosRequest = (config) => {
  try {
    const data = axios.request(config);
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
    return error;
  }
};

export default axiosRequest;
