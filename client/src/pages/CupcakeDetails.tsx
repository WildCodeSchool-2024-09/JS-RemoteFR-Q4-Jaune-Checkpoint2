import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

interface CupcakeData {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

function CupcakeDetails() {
  const cupcakeDetails = useLoaderData() as CupcakeData;
  console.info(cupcakeDetails.name);
  return (
    <>
      <h1>Nom : {cupcakeDetails.name}</h1>
      <h2>Supplément : {cupcakeDetails.accessory}</h2>
      <h3>
        Couleurs : {cupcakeDetails.color1},{cupcakeDetails.color2},{" "}
        {cupcakeDetails.color3}{" "}
      </h3>
    </>
  );
}
export default CupcakeDetails;
