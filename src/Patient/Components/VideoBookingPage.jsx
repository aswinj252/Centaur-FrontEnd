

import  { useState , useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from '../utils/axios';
import { useParams,useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';





function VideoBookingPage() {
  const { id } = useParams();
    const [selectedDate, setSelectedDate] = useState(null);
    const [appointmentTime,setappointmentTime ] = useState (null)
    const [ selectedTime,setSelectedTime] = useState(null)
    const [docDetails,setdocDetails] = useState({})
    const [timeDetails,setTimeDetails] = useState({})
    const navigate = useNavigate()
    const PatietnId = useSelector(state => state.PatientData.patinetId);

     const token= localStorage.getItem('PatientaccessToken')
  useEffect(() => {
   
    if (token === null) {
     navigate('/login')
      
    }
    else{
      axios.get(`/docDetails/${id}`).then((response)=>{
      console.log(response,"docDetails");
      setdocDetails({name:response.data.Details.details.name,
        department:response.data.Details.details.department,
        speciality:response.data.Details.details.speciality,
        picture:response.data.Details.details.picture})
      
    })
    }
    
  }, []); 


  const handleButtonClick = (obj) => {
    if (obj.booked !== "true") {
      console.log(obj,"obj");
      setSelectedTime(obj.time);
      setTimeDetails(obj)
    }
    
  };
  const handleSubmit =() =>{
    // const time= timeDetails._id
    // console.log(time,PatietnId,"jhiiajjdlkf");
    // const body = JSON.stringify({time,PatietnId})
    // console.log(body);
    // axios.post('/book_appointment' ,body,{headers:{
    //   "Content-Type": "application/json",
    //       "Authorization": `Bearer ${token}`
    // },
    // withCredentials: true
    // }).then((response) =>{
    //   console.log(response);
    // })
    
  axios.post("/create-checkout-session", { headers: { "Content-Type": "application/json" }}).then((response)=>{
    console.log(response);
    const redirectUrl = response.data.Intent;
    window.location.href = redirectUrl;

  })



  }
    const handleDateChange = (date) => {
      console.log(date);
      setSelectedDate(date);

      

       console.log(selectedDate,"haii");
        const initialDateString = date
        const initialDate = new Date(initialDateString);
        const utcDate = new Date(initialDate.toUTCString());
        const convertedDate = utcDate.toISOString();
        
console.log(convertedDate); // 
       
        
       
        axios.get('/video_appointment', { params: {id,convertedDate} })
        .then((response) => {
          console.log(response);
          if (response.data.noAppointment === true) {
           
            setappointmentTime(null)
            setSelectedTime(null);
            toast.warn( response.data.message , {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
          else{
            setappointmentTime(response.data.appointmetTime.Time)
          }
        })
        .catch((error) => {
          console.error(error);
        });
      
 
        
      };
      const minSelectableDate = new Date();
  
  return (

<div className="w-screen">
  <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
    <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">
      Book an appointment
    </h1>
    <p className="mt-6 text-lg text-white">
      Get an appointment with our experienced accountants
    </p>
    <img
      className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
      src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt=""
    />
  </div>
  <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
    
       <div className="flex  bg-white rounded-lg shadow dark:bg-gray-800">
    <div className="relative flex-none w-24 md:w-48">
      <img
        src={docDetails.picture}
        alt="shopping image"
        className="absolute inset-0 object-cover w-full h-full rounded-lg"
      />
    </div>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">Dr {" "}
 {docDetails.name}       </h1>
        <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
          $110.00
        </div>
        <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
          {docDetails.speciality}
        </div>
      </div>
      
      <div className="flex mb-4 text-sm font-medium">
       
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Free shipping on all continental US orders.
      </p>
    </form>
  
  
  
  </div>
    <div className="">
      <p className="mt-8 font-serif text-xl font-bold text-blue-900">
        Select a date
      </p>
      <div className="relative mt-4 w-56">
      <DatePicker
       
        onChange={ handleDateChange}
        dateFormat="MM/dd/yyyy"
        minDate={minSelectableDate} 
         selected={selectedDate}// Set the minimum selectable date
      />
      {selectedDate && (
        <p className='font-semibold	'>You selected: {selectedDate.toDateString()}</p>
      )}
      </div>
    </div>
   { appointmentTime ? 
   
   <div className="">
      <p className="mt-8 font-serif text-xl font-bold text-blue-900">
        Select a time
      </p>

      <div className="mt-4 flex flex-row">
      {appointmentTime.map((obj, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(obj)}
          style={{
            marginLeft: '2px',
            borderRadius: '8px',
            padding: '4px 8px',
            fontWeight: 'bold',
            backgroundColor: selectedTime === obj.time ? '#34D399' : obj.booked === "true" ? '#E2F7F1' : '#FFFFFF',
            color: selectedTime === obj.time ? 'white' : obj.booked === "true" ? '#CCCCCC' : '#059669',
          }}
          className={obj.booked === "true" ? "" : "active:scale-95"}
          disabled={obj.booked === "true"}
        >
          {obj.booked === "true" ? 'Booked' : obj.time}
        </button>
      ))}
    </div>



    </div>  
   

     : null}


    { selectedDate && selectedTime ?<button onClick={handleSubmit}  className="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">
      Book Now
    </button>
    :null}
  </div>
</div>

  );
}

export default VideoBookingPage;






