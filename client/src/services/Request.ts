import axios from "axios";
const getCupcakeList = () => {
  return axios
    .get("http://localhost:3310/api/cupcakes")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getCupcakeList };
