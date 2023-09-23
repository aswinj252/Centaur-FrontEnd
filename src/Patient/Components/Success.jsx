import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "../utils/axios";
import { setBookingDetails } from "../../Redux/reducers/patientSlice";

function Success() {
  useEffect(() => {
    console.log("useEffect is running");
    if (details.patientId && details.dateId && details.docId != null) {
      console.log("Navigating to /success");
       navigate("/success");
  
      // Call bookAppontment here
      bookAppontment();
    } else {
      console.log("Navigating to /");
       navigate("/");
    }
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.PatientData.bookingDetails);
  console.log("Details:", details);

  const handelCLick = () => {
    dispatch(
      setBookingDetails({
        patientId: null,
        dateId: null,
        docId: null,
      })
    );
    navigate("/profile");
  };

  const bookAppontment = () => {
    const patientId = details.patientId;
    const dateId = details.dateId;
    const docId = details.docId;
    const body = JSON.stringify({ patientId, dateId, docId });
    console.log("Request Body:", body);
    console.log("bookAppontment called");

    axios
      .post("/book_appointment", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response);
      });
  };

  

  console.log("Component Rendered");

  return (
    <>
      {/* Hello world */}
      <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Appointment booked </span>
            <span className="block text-indigo-500"></span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            You will receive a email regarding the booking with details
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                onClick={handelCLick}
                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                View Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;



