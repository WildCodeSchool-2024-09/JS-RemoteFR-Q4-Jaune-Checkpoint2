import axios from "axios";

const getCupcakes = () => {
  return axios
    .get("http://localhost:3310/api/cupcakes")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getCupcakes };
