import { useLoaderData, useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

interface CupcakeType {
  accessory: string;
  accessory_id: string;
  color1: string;
  color2: string;
  color3: string;
  id: number;
  name: string;
}

export default function CupcakeDetails() {
  const cupcakes = useLoaderData() as CupcakeType[];
  const { id } = useParams();

  const cupcake = cupcakes.find((cupcake) => cupcake.id === Number(id));
  if (!cupcake) return <div>Cupcake not found</div>;

  return <Cupcake data={cupcake} />;
}
