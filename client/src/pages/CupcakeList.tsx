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

console.info(typeof sampleCupcakes);

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

interface AccessoryProps {
  id: number;
  name: string;
  slug: string;
}

function CupcakeList() {
  // Step 1: get all cupcakes
  console.info(useLoaderData() as CupcakeArray);
  const cupcakes = useLoaderData() as CupcakeArray;

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([] as AccessoryProps[]);
  const [selectAccessory, setSelectedAccessory] = useState("" as string);

  useEffect(() => {
    // do something
    axios
      .get("http://localhost:3310/api/accessories")
      .then((response) => setAccessories(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleChangeAccessory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAccessory(e.currentTarget.value);
  };

  console.info(selectAccessory);
  console.info(accessories);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChangeAccessory}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessoirie) => (
              <option key={accessoirie.id} value={accessoirie.id}>
                {accessoirie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakes
          .filter((cupcake) =>
            selectAccessory
              ? cupcake.accessory_id === selectAccessory
              : cupcake,
          )
          .map((cupcake) => (
            <Cupcake key={cupcake.id} data={cupcake} />
          ))}
        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
