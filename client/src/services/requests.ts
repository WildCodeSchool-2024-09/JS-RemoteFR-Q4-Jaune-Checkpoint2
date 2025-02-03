import axios from "axios";

// const getAllCupcakes = () => {
//   return axios
//     .get("http://localhost:3310/api/cupcakes")
//     .then((response) => response)
//     .catch((error) => console.error(error));
// };
const getAllCupcakes = async () => {
  try {
    const response = await axios.get("http://localhost:3310/api/cupcakes");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des cupcakes :", error);
    return [];
  }
};

export { getAllCupcakes };
