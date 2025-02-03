import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
interface AccessoryArray {
  id: number;
  name: string;
  slug: string;
}

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

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [filter, setFilter] = useState("");
  const cupcakes = useLoaderData() as CupcakeArray;
  console.info(cupcakes);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([] as AccessoryArray[]);
  useEffect(() => {
    axios.get("http://localhost:3310/api/accessories").then((response) => {
      setAccessories(response.data);
    });
  }, []);
  console.info(accessories);

  // Step 5: create filter state
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value === "---" ? "" : e.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={handleFilterChange}
            value={filter}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option value={accessory.slug} key={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {cupcakes
          .filter((cupcake) => filter === "" || cupcake.accessory === filter)
          .map((cupcake) => (
            <Link to={`/cupcakes/${cupcake.id}`} key={cupcake.id}>
              <li className="cupcake-item">
                <Cupcake data={cupcake} />
              </li>
            </Link>
          ))}
        {/* end of block */}
      </ul>
    </>
  );
}
export default CupcakeList;
