import { useLoaderData } from "react-router-dom";
import { useState } from "react";
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

type CupcakeArray = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  colors3?: string;
  name: string;
};

type AccessoryType = {
  id: string;
  name: string;
};

type LoaderData = {
  cupcakes: CupcakeArray[];
  accessories: AccessoryType[];
};
/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const { cupcakes, accessories } = useLoaderData() as LoaderData;

  console.info("cupcakes récupérés :", cupcakes);

  // console.info(useLoaderData() as AccessoryType);

  // Step 3: get all accessories
  const [selectedAccessory, setSelectedAccessory] = useState("");

  // Step 5: create filter state
  const filteredCupcakes = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === selectedAccessory)
    : cupcakes;

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
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake
              data={{ ...cupcake, color3: cupcake.colors3 ?? "white" }}
            />
          </li>
        ))}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          {filteredCupcakes.map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={sampleCupcakes[0]} />
            </li>
          ))}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
