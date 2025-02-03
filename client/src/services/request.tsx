import axios from "axios";

const getCupcakes = () => {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/cupcakes`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getCupcakes };
