import { Outlet } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <main className="main-container">
        <Outlet />
      </main>
      <NavBar />
    </>
  );
}

export default App;
