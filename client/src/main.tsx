// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";

import CupcakeList from "./pages/CupcakeList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

const fetchCupcakes = async () => {
  const response = await fetch("http://localhost:3310/api/cupcakes");
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des cupcakes");
  }
  return response.json();
};

const fetchAccessories = async () => {
  const response = await fetch("http://localhost:3310/api/accessories");
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des accessoires");
  }
  return response.json();
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
        // Step 1: load data here
        loader: async () => {
          const [cupcakes, accessories] = await Promise.all([
            fetchCupcakes(),
            fetchAccessories(),
          ]);
          return { cupcakes, accessories };
        },
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
