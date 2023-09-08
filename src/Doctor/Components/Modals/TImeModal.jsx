import { Fragment, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function TImeModal({ closeModal }) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartingTime, setselectedStartingTime] = useState(null);
  const [selectedEndingTime, setselectedEndingTime] = useState(null);
  const [slots, setslots] = useState("");
  const docId = useSelector((state) => state.doctorData.docId);

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/doctor/login");
    } else {
      navigate("/doctor/home/time ");
    }
  }, [navigate]);

  const handleClose = () => {
    setOpen(false);
    closeModal();
  };

  const handleEndingTimeChange = (Etime) => {
    setselectedEndingTime(Etime);
  };

  const handleStartingTimeChange = (time) => {
    setselectedStartingTime(time);
  };
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const body = JSON.stringify({
        selectedStartingTime,
        selectedEndingTime,
        slots,
        selectedDate,
        docId,
      });

      const response = await axios.post("/addNApponitment", body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      console.log(response);

      if (
        response.data.success === true &&
        response.data.response.newAppontment
      ) {
        toast.success("new appontment added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        handleClose();
      } 
      else 
      {
        const refreshResponse = await axios.get("/refreshToken", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (
          refreshResponse &&
          refreshResponse.data &&
          refreshResponse.data.newToken
        ) {
          console.log(refreshResponse);
          const newToken = refreshResponse.data.newToken;
          localStorage.setItem("accessToken", newToken);
          await handleSubmit(); // Retry the submission with the new token
        } else {
          handleClose();
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                  <div className="flex items-center justify-center p-12 ">
                    {/* Author: FormBold Team */}
                    {/* Learn More: https://formbold.com */}
                    <div className="mx-auto w-full max-w-[550px]">
                      <form>
                        <div className="-mx-3 flex flex-wrap">
                          <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                              <label
                                htmlFor="fName"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                              >
                                Starting time
                              </label>
                              {/* <input
                                type="text"
                                name="fName"
                                id="fName"
                                placeholder="First Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              /> */}
                              <DatePicker
                                selected={selectedStartingTime}
                                onChange={handleStartingTimeChange}
                                showTimeSelect
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                showTimeSelectOnly
                                timeIntervals={30}
                                dateFormat="h:mm aa"
                              />
                            </div>
                          </div>
                          <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                              <label
                                htmlFor="lName"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                              >
                                Ending time{" "}
                              </label>
                              {/* <input
                                type="text"
                                name="lName"
                                id="lName"
                                placeholder="Last Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              /> */}
                              <DatePicker
                                selected={selectedEndingTime}
                                onChange={handleEndingTimeChange}
                                showTimeSelect
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                showTimeSelectOnly
                                timeIntervals={30}
                                dateFormat="h:mm aa"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor="guest"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            No of slots
                          </label>
                          <input
                            type="number"
                            name="guest"
                            id="guest"
                            onChange={(e) => setslots(e.target.value)}
                            placeholder={"no of slots"}
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
                                Date
                              </label>
                              {/* <input
                                type="date"
                                name="date"
                                id="date"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              /> */}
                              <DatePicker
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                minDate={new Date()}
                              />
                            </div>
                          </div>
                          {/* <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                              <label
                                htmlFor="VideoTIme"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                              >
                                VideoTIme
                              </label>
                              <input
                                type="VideoTIme"
                                name="VideoTIme"
                                id="VideoTIme"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              />
                            </div>
                          </div> */}
                        </div>
                        {/* <div className="mb-5">
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
                        </div> */}
                        <div>
                          <button
                            type="button"
                            onClick={handleSubmit}
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleSubmit}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={handleClose}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
