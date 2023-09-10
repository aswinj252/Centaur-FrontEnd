import Slider from 'react-slick';
import {Link} from "react-router-dom"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css';
import { useEffect,useState } from 'react';
import axios from '../utils/axios'


function Doctors() {
  const [doctors,setDoctors] = useState([])

   useEffect(() =>{
    getAllDoc()
   },[])

   const getAllDoc = () =>{
    axios.get('/allDoc').then((response) =>{
      console.log(response,"jai");
      setDoctors(response.data.doctors.doctors)
    })
   }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
    
  return (
    <div style={{width:"100%",backgroundColor:"white"}}>
        <h1 style={{marginLeft:"20px",paddingTop:"20px"}}><b>Our Doctors</b></h1>
     <div className="App">
       
      <Slider {...settings}>
     
         
    {  doctors.map((obj,index)=>
      <div key={index} className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src={obj.picture}
    alt="avatar"
  />
  <div className="py-5 text-center">
    <Link    className="block text-xl font-bold text-gray-800 dark:text-white" to={`/singledoc/${obj._id}`}>Dr {obj.name}</Link>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      {obj.speciality
}
    </span>
  </div>
</div>
)
}

      </Slider>
    </div>
    </div>
  )
}

export default Doctors