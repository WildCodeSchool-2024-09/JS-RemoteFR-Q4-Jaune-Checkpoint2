import Cupcake from "../components/Cupcake";
import { useLoaderData, useParams } from "react-router-dom";

interface CupcakeType {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

export default function CupcakeDetails() {
  const params = useParams();
  const cupcakes = useLoaderData() as CupcakeType[];

  const indexCupcake = cupcakes.find(
    (cupcake) => cupcake.id === Number(params.id),
  );

  return (
    <>
      <Cupcake data={indexCupcake as CupcakeType} />
    </>
  );
}
