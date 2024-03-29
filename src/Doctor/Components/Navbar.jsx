
import  { useState,  } from "react";
import { Link } from "react-router-dom";

import {  useSelector } from "react-redux";


function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // useEffect(() => {
  //   // Set initial dropdown visibility here
  //   setDropdownVisible(false);
  // }, []);
  //  const token = useSelector(state => state.doctorData.accessToken);
  //  const id = useSelector(state => state.doctorData.docId);
  // useEffect(()=>{
  //   axios.get(`/docDetails/${id}`,{
  //     headers:{
  //        "Authorization": `Bearer ${token}`
  //     },
  //    withCredentials:true
  //   }
  //   ,
  //   ).then((response)=>{
  //     console.log(response);
  //     dispatch(docEmail(response.data.docDetails
  //       .data.email))
  //       dispatch(docName(response.data.docDetails
  //       .data.name))
      

  //   })
    
  // })

  return (
    <nav className="fixed top-0 z-50 w-full bg-blue-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              {/* Add your sidebar icon SVG here */}
              <svg
              className="w-6 h-6"
               aria-hidden="true"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                 d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
               />
            </svg>
            </button>
            <Link className="flex ml-2 md:mr-24" to={"/doctor/home"}>
              {/* Your logo and text */}
              <img
               src="/logo.png"
               className="h-8 mr-3"
               alt="FlowBite Logo"
             />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-blue-950">
               Centaur
             </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3 relative ">
              <div>
              <button
                type="button"
                onClick={toggleDropdown}
                className= " flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded={dropdownVisible}
                aria-haspopup="true"
                aria-controls="dropdown-user"
              >
                <span className="sr-only">Open user menu</span>
                {/* Your user photo */}
                 <img
                   className="w-8 h-8 rounded-full"
                   src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
             </div>
                <div
                  className= {`${dropdownVisible ? "" : "hidden"} top-5 right-0 absolute  z-50 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                  role="menu"
                  aria-label="User Menu"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                     Dr {useSelector(state => state.doctorData.docName)}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                     {useSelector(state => state.doctorData.docEmail)}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
