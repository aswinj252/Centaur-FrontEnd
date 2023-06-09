import {Link} from "react-router-dom"
function Header() {
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
      <button
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
      </button>
      {/* Dropdown menu */}
      <div
        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Bonnie Green
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            name@flowbite.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
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
        
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Header