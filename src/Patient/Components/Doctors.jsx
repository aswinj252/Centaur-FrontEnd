import Slider from 'react-slick';
import {Link} from "react-router-dom"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css';

function Doctors() {
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
     
         
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="avatar"
  />
  <div className="py-5 text-center">
    <Link   className="block text-xl font-bold text-gray-800 dark:text-white" to="singledoc">Dr Alexander</Link>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      Cardiolagist
    </span>
  </div>
</div>
<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="avatar"
  />
  <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 dark:text-white"
      tabIndex={0}
      role="link"
    >
      John Doe
    </a>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      Software Engineer
    </span>
  </div>
</div>
<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="avatar"
  />
  <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 dark:text-white"
      tabIndex={0}
      role="link"
    >
      John Doe
    </a>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      Software Engineer
    </span>
  </div>
</div>

<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="avatar"
  />
  <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 dark:text-white"
      tabIndex={0}
      role="link"
    >
      John Doe
    </a>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      Software Engineer
    </span>
  </div>
</div>

<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="avatar"
  />
  <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 dark:text-white"
      tabIndex={0}
      role="link"
    >
      John Doe
    </a>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      Software Engineer
    </span>
  </div>
</div>

<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="avatar"
  />
  <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 dark:text-white"
      tabIndex={0}
      role="link"
    >
      John Doe
    </a>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      Software Engineer
    </span>
  </div>
</div>

<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="avatar"
  />
  <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 dark:text-white"
      tabIndex={0}
      role="link"
    >
      John Doe
    </a>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      Software Engineer
    </span>
  </div>
</div>

<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="avatar"
  />
  <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 dark:text-white"
      tabIndex={0}
      role="link"
    >
      John Doe
    </a>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      Software Engineer
    </span>
  </div>
</div>

<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <img
    className="object-cover w-full h-56"
    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="avatar"
  />
  <div className="py-5 text-center">
    <a
      href="#"
      className="block text-xl font-bold text-gray-800 dark:text-white"
      tabIndex={0}
      role="link"
    >
      John Doe
    </a>
    <span className="text-sm text-gray-700 dark:text-gray-200">
      Software Engineer
    </span>
  </div>
</div>


         
       
      </Slider>
    </div>
    </div>
  )
}

export default Doctors