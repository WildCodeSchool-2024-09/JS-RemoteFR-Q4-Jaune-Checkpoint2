import axios from "axios";

const getCupcakes = async () => {
  const response = await axios.get("http://localhost:3310/api/cupcakes");
  return response.data;
};

export default getCupcakes;
