import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
