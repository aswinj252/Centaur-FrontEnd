import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns'; // Import addDays from date-fns

function AppointmentDate() {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
      const minSelectableDate = new Date();
      return (
        <>
<div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Select Appontment date
    </h5>
  </a>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in
    reverse chronological order.
  </p>
 

        
  <label
    htmlFor="website-admin"
    className=" pt-8 block mb-2 text-lg font-bold text-gray-900 dark:text-white"
  >
   
  </label>
  <div className="flex">
    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

    </span>
    <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        minDate={minSelectableDate} // Set the minimum selectable date
      />
      {selectedDate && (
        <p className='font-semibold	'>You selected: {selectedDate.toDateString()}</p>
      )}



      
  </div>
</div>

 

  {/* <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
  <img
    alt="moto"
    src="/images/object/1.png"
    className="absolute w-40 h-40 mb-4 -right-20 -bottom-8"
  />
  <div className="w-4/6">
    <p className="mb-2 text-lg font-medium text-gray-800">Avg</p>
    <p className="text-xs text-gray-400">
      Detail is not an obsession, it is the very essence of perfection.
    </p>
    <p className="text-xl font-medium text-indigo-500">$399</p>
  </div>
</div> */}


{/* <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div className="flex items-center justify-between mb-4">
    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
      Latest Customers
    </h5>
    <a
      href="#"
      className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      View all
    </a>
  </div>
  <div className="flow-root">
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-1.jpg"
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Neil Sims
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              email@windster.com
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
          </div>
        </div>
      </li>
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Bonnie Green
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              email@windster.com
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $3467
          </div>
        </div>
      </li>
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-2.jpg"
              alt="Michael image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Michael Gough
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              email@windster.com
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $67
          </div>
        </div>
      </li>
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-4.jpg"
              alt="Lana image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Lana Byrd
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              email@windster.com
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $367
          </div>
        </div>
      </li>
      <li className="pt-3 pb-0 sm:pt-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Thomas image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Thomes Lean
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              email@windster.com
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $2367
          </div>
        </div>
      </li>
    </ul>
  </div>
</div> */}


</>

      

      );
}

export default AppointmentDate