
import axios from "../utils/axios"
import { useDispatch, useSelector } from "react-redux"
import { useState,useEffect } from "react"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { docEmail,docName} from "../../Redux/reducers/doctorSlice";


function EditDetails() {
  const id = useSelector(state => state.doctorData.docId)
  const [name,setName] = useState(null)
  const [email,setEmail] = useState(null)
  const [phone,setPhone] = useState(null)
  const [ specilization,setSpecialization] = useState(null)
  const [department,setDepartment] = useState(null)
  const navigate = useNavigate() 
  const dispatch = useDispatch()

  
  useEffect(() =>{
    docDetails()
  },[])

  const docDetails = () =>{
    
    axios.get(`/docDetails/${id}`).then((response)=>{
       console.log(response);
       setName(response.data.docDetails.Data.name)
       setEmail(response.data.docDetails.Data.email)
       setPhone(response.data.docDetails.Data.phone)
       setSpecialization(response.data.docDetails.Data.speciality)
       setDepartment(response.data.docDetails.Data.department)
           dispatch(docName(response.data.docDetails.Data.name))
            dispatch(docEmail(response.data.docDetails.Data.email))
       
       
    })
  }
  const handleSubmit = () => {
    // Make sure name, email, phone, specilization, department, and id are defined
    const body = JSON.stringify({ name, email, phone, specilization, department });
    console.log(body);
  
    axios.put(`/editDetails/${id}`, body, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        console.log(response);
        if (response.data.editDetails.edited === true) {
          toast.success( "Data Edited", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          docDetails()
          navigate('/doctor/home/profile')
          
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  return (
    <>
    {/* component */}
    <section className="max-w-4xl p-6 mx-auto bg-grey-800 rounded-md shadow-md dark:bg-gray-800 mt-20">
      <h1 className="text-xl font-bold text-dark capitalize dark:text-white">
        Account settings
      </h1>
      <form onSubmit={(e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  handleSubmit(); // Call your custom submit function
}}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-dark dark:text-gray-200" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={name}
              onChange={(e) =>setName(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-dark dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-dark dark:text-gray-200" htmlFor="password">
              phone
            </label>
            <input
              id="password"
              type="phone"
              value={phone}
              onChange={(e) =>setPhone(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
         
          <div>
            <label className="text-dark dark:text-gray-200" htmlFor="specialization">
              Specialization
            </label>
            <input
              id="specialization"
              type="specialization"
              value={specilization}
              onChange={(e) =>setSpecialization(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
         
          <div>
            <label
              className="text-dark dark:text-gray-200"
              htmlFor="passwordConfirmation"
            >
              Department
            </label>
            <select className="  block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              <option>{department}</option>
             
            </select>
          </div>
          
        
       
        </div>
        <div className="flex justify-end mt-6">
          <button type="submit" className="px-6 py-2 leading-5 text-dark transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </section>
    
  </>
  
  
  )
}

export default EditDetails