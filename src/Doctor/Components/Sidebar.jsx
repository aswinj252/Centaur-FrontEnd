import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
 

const navLinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
  };
};



function Sidebar() {
  const [dropdown1Visible, setDropdown1Visible] = useState(false)
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [dropdown3Visible, setDropdown3Visible] = useState(false);

  const token = useSelector(state => state.doctorToken.accessToken);
 console.log(token,"token from redux");
  useEffect(() => {
    // Set initial dropdown visibility here
    setDropdown1Visible(false);
    setDropdown2Visible(false);
    setDropdown3Visible(false);
 
  }, []);
  const toggleDropdown1 = () => {
    setDropdown1Visible(!dropdown1Visible);
  };
  const toggleDropdown2 = () => {
    setDropdown2Visible(!dropdown2Visible);
  };

  const toggleDropdown3 = () => {
    setDropdown3Visible(!dropdown3Visible);
  };
  return (
    
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-full pt-20 transition-transform -translate-x-full bg-blue-100 border-r border-gray-200 sm:translate-x-0 md:translate-x-0 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className=" px-3 pb-4 overflow-y-auto bg-blue-100 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                onClick={toggleDropdown1}
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-dark transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Appointments
                </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul id="dropdown-example" className={`${dropdown1Visible ? "" : "hidden"} py-2 space-y-2`}>
                <li>
                  {/* <a
                
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Video Consultation
                </a> */}
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    to="vbookingapp"
                  >
                    Video Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    to="booking"
                  >
                    Booking
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleDropdown2}
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example1"
                data-collapse-toggle="dropdown-example1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Time Scheduling
                </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul id="dropdown-example1" className={`${dropdown2Visible ? "" : "hidden"} py-2 space-y-2`}>
                <li>
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    to="video_time"
                  >
                    Video Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    to="time"
                  >
                    Booking
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                onClick={toggleDropdown3}
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example12"
                data-collapse-toggle="dropdown-example12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>

                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Blogs
                </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul id="dropdown-example12"className={`${dropdown3Visible ? "" : "hidden"} py-2 space-y-2`}>
                <li>
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    to="video_time"
                  >
                    Add blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    to="blogs"
                  >
                    Your Blogs
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                style={navLinkStyle}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                to="profile"
              >
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                }{" "}
                Profle
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    
  );
}

export default Sidebar;
