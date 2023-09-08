
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
 import axios from '../utils/axios'


function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate();
 const handleSubmit = (e) =>{
  e.preventDefault()

     const body = JSON.stringify({email,password})
    console.log(body);
  
    axios.post('/login',body, { headers: { "Content-Type": "application/json" } }).then((response)=>{
      console.log(response);
      
      if (
        response.data.response.status === true &&
        response.data.response.user === true
      ) {
        toast.success( response.data.response.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        navigate("/admin/home");
      }
      else if (
        response.data.response.status === false &&
        response.data.response.user === true
      ) {
        toast.warn( response.data.response.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/admin/login");
      }
      else {
        toast.error( response.data.response.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",

        });
        navigate("/admin/login");
      } 
    })
  }
  return (
    <>
    {/* component */}
  <section className="flex flex-col md:flex-row h-screen items-center">
    <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img
        src="https://www.hopkinsmedicine.org/the_johns_hopkins_hospital/_images/landing/_JHU7988_1440.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    <div
      className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center"
    >
      <div className="w-full h-100">
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
          Log in to your account
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
             onChange={(e) =>setEmail(e.target.value)}
              
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
               onChange={(e)=>setPassword(e.target.value)}
    
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
              required
            />
          </div>
          <div className="text-right mt-2">
            <a
              href="#"
              className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
          >
            Log In
          </button>
        </form>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          type="button"
          className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
        >
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-6 h-6"
              viewBox="0 0 48 48"
            >
              <defs>
                <path
                  id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="b">
                <use xlinkHref="#a" overflow="visible" />
              </clipPath>
              <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path
                clipPath="url(#b)"
                fill="#EA4335"
                d="M0 11l17 13 7-6.1L48 14V0H0z"
              />
              <path
                clipPath="url(#b)"
                fill="#34A853"
                d="M0 37l30-23 7.9 1L48 0v48H0z"
              />
              <path
                clipPath="url(#b)"
                fill="#4285F4"
                d="M48 48L17 24l-4-3 35-10z"
              />
            </svg>
            <span className="ml-4">Log in with Google</span>
          </div>
        </button>
        {/* <p className="mt-8">
          Need an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an account
          </a>
        </p> */}
      </div>
    </div>
  </section>
    </>
  )
}

export default Login