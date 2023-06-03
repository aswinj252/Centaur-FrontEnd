

function Landing() {
  return (
    <section className="text-gray-400 h-full bg-blue-100 body-font">
    <div className="container h-full px-5 py-24 mx-auto flex flex-wrap">
      <div className="lg:w-2/3 mx-auto">
        <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
            src="https://www.hopkinsmedicine.org/the_johns_hopkins_hospital/_images/landing/_JHU7988_1440.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          />
          <div className="text-center relative z-10 w-full">
            <h2 className="text-2xl text-white font-medium title-font mb-2">
              Welcome to Doctors Profile
            </h2>
            <p className="leading-relaxed">
              
            </p>
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-1/2">
            <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://media.istockphoto.com/id/979008970/photo/digital-communication-lifestyle-blog-writer-person-using-mobile-smart-device-or-woman-user.jpg?s=2048x2048&w=is&k=20&c=ld4OmpZVpsGUe1UBWs1eDCqoLDcmnR7hCH_8Aj_xStA="
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-xl text-white font-medium title-font mb-2">
                  Register
                </h2>
                <p className="leading-relaxed">
                 IF you are new You can register
                </p>
                <a className="mt-3 text-green-300 inline-flex items-center">
                  Register
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-xl text-white font-medium title-font mb-2">
                Login
                </h2>
                <p className="leading-relaxed">
                  You can login to your account 
                </p>
                <a className="mt-3 text-green-300 inline-flex items-center">
               Login
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Landing