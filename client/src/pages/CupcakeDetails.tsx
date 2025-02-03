import { useLoaderData } from "react-router-dom";

interface DataTypes {
  name: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
}

export default function CupcakeDetails() {
  const data = useLoaderData() as DataTypes;
  return (
    <>
      <h3>{data.name}</h3>
      <h4>{data.accessory}</h4>
      <p>{data.color1}</p>
      <p>{data.color2}</p>
      <p>{data.color3}</p>
    </>
  );
}
