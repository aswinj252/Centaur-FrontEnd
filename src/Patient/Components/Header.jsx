import {Link} from "react-router-dom"
import  { useState,  } from "react";
import { useSelector } from "react-redux";
function Header() {
  const name = useSelector(state => state.PatientData.name);
 const handleLogout = () =>{
  
 }



  return (

<nav className="bg-blue-950 border-white bg-blue-950">
  <div className="max-w-screen-full flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center">
      <img
        src="/logo.png"
        className="h-8 mr-3"
        alt="Centaur"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
        Centaur
      </span>
    </a>
    
    <div className="flex items-center md:order-2">
      {/* <button
        type="button"
       
        className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="/logo.png"
          alt="user photo"
        />
      </button> */}
      {/* Dropdown menu */}
      
     
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-blue rounded-lg bg-blue md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-blue bg-blue md:bg-blue border-blue">
        <li>
          <Link to="/" className =" block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white ">Home</Link>
        </li>
        <li>
        <Link to="/Alldep" className =" block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white ">Our Departments</Link>
        </li>
        <li>
        <Link to="/Alldoc" className =" block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white ">Our Doctors</Link>
        </li>
        <li>
        <Link to="/" className =" block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white ">Contact Us</Link>

        </li>
       { name
       ?

        <><li>
                <Link to="/profile" className=" block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white "> {name}</Link>

              </li><li>
                  <Link onClick={handleLogout} to="/home" className=" block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white ">Logout</Link>

                </li>
                </>
      
        :
        <li>
        <Link to="/login" className =" block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white ">Login</Link>
        
        </li>}
        
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Header