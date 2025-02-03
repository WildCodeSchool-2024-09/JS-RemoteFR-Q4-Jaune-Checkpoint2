import axios from "axios";

const getCupcakes = () => {
  return axios
    .get("http://localhost:3310/api/cupcakes")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getCupcakeDetails = (id: number) => {
  return axios
    .get("http://localhost:3310/api/cupcakes")
    .then((response) => response.data[id])
    .catch((error) => console.error(error));
};
export { getCupcakes, getCupcakeDetails };
