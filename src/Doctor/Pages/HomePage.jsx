import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";



function HomePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
     
    </>
  );
}

export default HomePage;
