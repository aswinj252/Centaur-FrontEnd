import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function TImeModal({ closeModal }) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
   closeModal();
  };

  const handleSubmit = () => {
    ////
    handleClose();
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                                Date
                              </label>
                              <input
                                type="date"
                                name="date"
                                id="date"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              />
                            </div>
                          </div>
                          <div className="w-full px-3 sm:w-1/2">
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
