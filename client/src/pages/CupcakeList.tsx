import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

type CupcakeArray = CupcakeData[];

interface CupcakeData {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

interface AccessoryData {
  accessory: {
    id: number;
    name: string;
    slug: string;
  };
}

function CupcakeList() {
  // Step 1: get all cupcakes
  const data = useLoaderData() as CupcakeArray;
  const [accessoryData, setAccessoryData] = useState([] as AccessoryData[]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/accessories")
      .then((response) => {
        setAccessoryData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAccessoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedAccessory(event.target.value);
  };

  // Step 3: get all accessories

  // Step 5: create filter state
  const filteredData = selectedAccessory
    ? data.filter((cupcake) => cupcake.accessory_id === selectedAccessory)
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
            required
            aria-label="sélectionner un supplément"
            value={selectedAccessory}
            onChange={handleAccessoryChange}
          >
            <option value="">---</option>
            <option value="1">Cherry</option>
            <option value="2">Donut</option>
            <option value="3">Chocolate</option>
            <option value="4">Wild</option>
            <option value="5">Christmas Candy</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          {filteredData.map((cupcake) => (
            <Cupcake key={cupcake.id} data={cupcake} />
          ))}
        </li>
      </ul>
    </>
  );
}

export default CupcakeList;
