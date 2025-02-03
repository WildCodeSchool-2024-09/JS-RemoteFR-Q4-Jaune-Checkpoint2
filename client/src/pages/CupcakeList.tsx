import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

type CupcakeArray = typeof sampleCupcakes;

interface AccessoryTypes {
  id: number;
  name: string;
  slug: string;
}

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const data = useLoaderData() as CupcakeArray;
  console.info("Valeur de data :", data);
  console.info("Type de data :", typeof data);

  // console.info(useLoaderData() as CupcakeArray);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<AccessoryTypes[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/accessories")
      .then((response) => {
        console.info("Accessoires récupérés :", response.data);
        setAccessories(response.data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération : ", error),
      );
  }, []);

  console.info(accessories);

  // Step 5: create filter state
  const [selectedAccessory, setSelectedAcessory] = useState("");
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAcessory(event.target.value);
  };
  const filteredCupcakes = selectedAccessory
    ? data.filter((cupcakes) => cupcakes.accessory === selectedAccessory)
    : data;

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={handleFilterChange}
          >
            <option value="">---</option>
            <option value="cherry">Cherry</option>
            <option value="donut">Donut</option>
            <option value="chocolate">Chocolate</option>
            <option value="wcs">Wild</option>
            <option value="christmas-candy">Christmas Candy</option>

            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {filteredCupcakes.map((cupcakes) => (
          <li className="cupcake-item" key={cupcakes.id}>
            <Cupcake data={cupcakes} />
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
