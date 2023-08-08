import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function VideoTimeModea({ closeModal }) {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div
            className=" bg-gray-200 absolute top-0 pt-12 h-screen  right-0 left-0"
            id="modal"
          >
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div className="flex items-center justify-center p-12 ">
                  {/* Author: FormBold Team */}
                  {/* Learn More: https://formbold.com */}
                  <div className="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                      <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label
                              htmlFor="fName"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              name="fName"
                              id="fName"
                              placeholder="First Name"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label
                              htmlFor="lName"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="lName"
                              id="lName"
                              placeholder="Last Name"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="guest"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          How many guest are you bringing?
                        </label>
                        <input
                          type="number"
                          name="guest"
                          id="guest"
                          placeholder={5}
                          min={0}
                          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label
                              htmlFor="date"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Date pick
                            </label>
                            {/* <input
                              type="date"
                              name="date"
                              id="date"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            /> */}
                             {/* <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
      /> */}
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label
                              htmlFor="VideoTIme"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              VideoTIkme
                            </label>
                            <input
                              type="VideoTIme"
                              name="VideoTIme"
                              id="VideoTIme"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Are you coming to the event?
                        </label>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="radio1"
                              id="radioButton1"
                              className="h-5 w-5"
                            />
                            <label
                              htmlFor="radioButton1"
                              className="pl-3 text-base font-medium text-[#07074D]"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="radio1"
                              id="radioButton2"
                              className="h-5 w-5"
                            />
                            <label
                              htmlFor="radioButton2"
                              className="pl-3 text-base font-medium text-[#07074D]"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => closeModal(false)}
                          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoTimeModea;
