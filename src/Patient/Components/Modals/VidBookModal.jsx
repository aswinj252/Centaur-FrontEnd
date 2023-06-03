import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactCalender from "react-calendar";
import { add, format } from "date-fns";

// eslint-disable-next-line react/prop-types
export default function VidBookModal({ onClose }) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const [date, setDate] = useState({ justDate: null, dateTime: null });
  console.log(date.dateTime);

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: 10 });
    const end = add(justDate, { hours: 12 });
    const interval = 30;
    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };
  const times = getTimes();

  const HandleClose = () => {
    setOpen(false);
    onClose();
  };
  const HandleSubmit = () => {
    HandleClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={HandleSubmit}
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
                {date.justDate ? (
                  <div className="flex gap-4">
                    {times?.map((time, i) => (
                      <div
                        className="rounded-sm bg-gray-100 p-2"
                        key={`time-${i}`}
                      >
                        <button
                          onClick={() =>
                            setDate((prev) => ({ ...prev, dateTime: time }))
                          }
                          type="button"
                        >
                          {format(time, "kk:mm")}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {" "}
                    Choose Date
                    <ReactCalender
                      minDate={new Date()}
                      className="React-Calender p-2"
                      view="month"
                      onClickDay={(date) =>
                        setDate((prev) => ({ ...prev, justDate: date }))
                      }
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
