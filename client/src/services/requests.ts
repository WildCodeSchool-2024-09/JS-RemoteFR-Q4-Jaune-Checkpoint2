import axios from "axios";

const getAllCupcakes = () => {
  return axios
    .get("http://localhost:3310/api/cupcakes")
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};

export { getAllCupcakes };
