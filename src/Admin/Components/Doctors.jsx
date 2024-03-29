
import axios from "../utils/axios"
import { useEffect,useState } from "react"


function Doctors() {
 const [doc,Setdoc] = useState([])

  useEffect(() =>{
   getDoctors()
  },[])

  const getDoctors = () =>{
    axios.get('/allDoc').then((response)=>{
      console.log(response);
      Setdoc(response.data.ApprovedDoc.doctors)

    })
  }
  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
    
    <>
  {/* component */}
  <div className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
         Our DOctors
        </h2>
        <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
          Tailus prides itself not only on award-winning technology, but also on
          the talent of its people of some of the brightest minds and most
          experienced executives in business.
        </p>
      </div>
      <div className="grid gap-12 items-center md:grid-cols-3">

        {
          doc.map((obj,index)=>
          
        <div key={index} className="space-y-4 text-center">
          <img
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
            src={obj.picture}
            alt="woman"
            loading="lazy"
            width={640}
            height={805}
          />
          <div>
            <h4 className="text-2xl"> Dr {obj.name}</h4>
            <span className="block text-sm text-gray-500">{obj.department}</span>
          </div>
          <button>{obj.speciality}</button>
        </div>
       
       )}
      </div>
    </div>
  </div>
</>

    </div>
  </div>
  )
}

export default Doctors