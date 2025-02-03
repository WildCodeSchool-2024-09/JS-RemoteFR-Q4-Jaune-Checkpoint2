import axios from "axios";
// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";

import CupcakeDetails from "./pages/CupcakeDetails";
import CupcakeList from "./pages/CupcakeList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

const getCupcakes = () => {
  return axios
    .get("http://localhost:3310/api/cupcakes")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getCupcakeById = (id: number) => {
  return axios
    .get(`http://localhost:3310/api/cupcakes/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/cupcakes",
        element: <CupcakeList />,
        loader: getCupcakes,
      },
      {
        path: "/cupcakes/:id",
        element: <CupcakeDetails />,
        loader: ({ params }) => getCupcakeById(Number(params.id)),
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
