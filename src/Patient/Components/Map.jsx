function Map() {
    return (
      <div className="flex flex-row bg-white ">
        <div className="w-1/2 md:w-2/5">
          <h2 className="text-2xl font-bold mb-2">Our Location<br/>You can reach our  hospital by using this  location </h2>
        </div>
        <div className="w-1/2 md:w-3/5">
          <div className="relative w-full h-96">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=brototype kochi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  
  export default Map;
  