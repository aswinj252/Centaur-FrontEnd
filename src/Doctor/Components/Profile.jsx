

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"



function Profile() {

  return (
    <div className=" bg-white  p-4 sm:ml-64">
    <div className=" bg-white   border-dashed rounded-lg dark:border-gray-700 mt-">
      
  
    <div className="p-16">
  <div className="p-8 bg-white shadow mt-24">
    {" "}
    <div className="grid grid-cols-1 md:grid-cols-3">
      {" "}
      <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
        {" "}
        <div>
          {" "}
          <p className="font-bold text-gray-700 text-xl"></p>{" "}
          <p className="text-gray-400"></p>{" "}
        </div>{" "}
        <div>
          {" "}
          <p className="font-bold text-gray-700 text-xl"></p>{" "}
          <p className="text-gray-400"></p>{" "}
        </div>{" "}
        <div>
          {" "}
          <p className="font-bold text-gray-700 text-xl"></p>{" "}
          <p className="text-gray-400"></p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="relative">
        {" "}
        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
         <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkpRbsObBju8Hsn3FuRLm_UdfTy_HFuWM6Z15Y2DSu-7yxqn8rJy_zoKhMAAI6PhWbpo&usqp=CAU"}/>
        </div>{" "}
      </div>{" "}
      <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
       
          <Link className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" to="/doctor/home/edit"> Edit</Link>
          {" "}
        
      
        <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
          {" "}
          Message
        </button>{" "}
      </div>
    </div>{" "}
    <div className="mt-20 text-center border-b pb-12">
      {" "}
      <h1 className="text-4xl font-medium text-gray-700">
        {useSelector(state => state.doctorData.docName)} <span className="font-light text-gray-500">27</span>
      </h1>{" "}
      <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>{" "}
      <p className="mt-8 text-gray-500">
        Solution Manager - Creative Tim Officer
      </p>{" "}
      <p className="mt-2 text-gray-500">University of Computer Science</p>
    </div>{" "}
    <div className="mt-12 flex flex-col justify-center">
      {" "}
      <p className="text-gray-600 text-center font-light lg:px-16">
        An artist of considerable range, Ryan — the name taken by
        Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
        records all of his own music, giving it a warm, intimate feel with a
        solid groove structure. An artist of considerable range.
      </p>{" "}
      <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
        {" "}
        Show more
      </button>
    </div>
  </div>
</div>

  
  
  
  
     
    </div>
  </div>
  )
}

export default Profile