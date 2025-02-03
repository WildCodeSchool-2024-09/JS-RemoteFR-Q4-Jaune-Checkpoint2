import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
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

type AccessoryArray = { id: number; name: string; slug: string }[];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const cupcakes = useLoaderData() as CupcakeArray;
  console.info("cupcake with loader", cupcakes);

  // Step 3: get all accessories

  const [allAccessories, setAllAccessories] = useState([] as AccessoryArray);

  useEffect(() => {
    axios
      .get(" http://localhost:3310/api/accessories ")
      .then((response) => {
        setAllAccessories(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.info("all accessories : ", allAccessories);

  // Step 5: create filter state

  const [filter, setFilter] = useState("");

  const handleChangeAccessorie = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFilter(event.currentTarget.value);
  };

  const filteredCupcakes = cupcakes
    .filter((cupcake) =>
      filter === "" ? cupcake : cupcake.accessory === filter,
    )
    .filter((cupcake) => cupcake.accessory.includes(filter));

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChangeAccessorie}>
            <option value={""}>all</option>
            {allAccessories.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.slug}>
                {accessorie.name}
              </option>
            ))}

            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 5: filter cupcakes before repeating */}

        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Link key={cupcake.id} to={`/cupcakes/${cupcake.id}`}>
              <Cupcake data={cupcake} />
            </Link>
          </li>
        ))}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
