
import "./graph.css"


 function Graph() {
    // 
    return (
        <>

<div className="p-4 sm:ml-64 ">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 ">
      

{/* //cards  */}
<div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
  Video booking
      </h3>
      <p className="my-4">
      5
      </p>
    </blockquote>
  
  </figure>
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Normal bookings
      </h3>
      <p className="my-4">
       40
      </p>
    </blockquote>
    
  </figure>
  
 
</div>






    <div className="flex flex-col items-center w-full max-w-screen-full p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8 ">
    <h2 className="text-xl font-bold">Monthly Revenue</h2>
    <span className="text-sm font-semibold text-gray-500">2020</span>
    <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $37,500
        </span>
        <div className="relative flex justify-center w-full h-8 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-6 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-16 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Jan</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $45,000
        </span>
        <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-6 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Feb</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $47,500
        </span>
        <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Mar</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $50,000
        </span>
        <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-6 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-24 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Apr</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $47,500
        </span>
        <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">May</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $55,000
        </span>
        <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-24 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Jun</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $60,000
        </span>
        <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-16 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Jul</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $57,500
        </span>
        <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-10 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-24 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Aug</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $67,500
        </span>
        <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-10 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-32 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Sep</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $65,000
        </span>
        <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-12 bg-indigo-300" />
        <div className="relative flex justify-center w-full bg-indigo-400 h-28" />
        <span className="absolute bottom-0 text-xs font-bold">Oct</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $70,000
        </span>
        <div className="relative flex justify-center w-full h-8 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-40 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Nov</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $75,000
        </span>
        <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
        <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
        <div className="relative flex justify-center w-full h-40 bg-indigo-400" />
        <span className="absolute bottom-0 text-xs font-bold">Dec</span>
      </div>
    </div>
    <div className="flex w-full mt-3">
      <div className="flex items-center ml-auto">
        <span className="block w-4 h-4 bg-indigo-400" />
        <span className="ml-1 text-xs font-medium">Existing</span>
      </div>
      <div className="flex items-center ml-4">
        <span className="block w-4 h-4 bg-indigo-300" />
        <span className="ml-1 text-xs font-medium">Upgrades</span>
      </div>
      <div className="flex items-center ml-4">
        <span className="block w-4 h-4 bg-indigo-200" />
        <span className="ml-1 text-xs font-medium">New</span>
      </div>
    </div>
  </div>




  <>
  {/* 
	NOTES
	For the purpose of this demo, the heights of the bars are simply relying on native Tailwind CSS classes.
	In a proper implementation, where it represents real data, these height should be dynamically generated based on the data that feeds them.
	*/}
  {/* Component Start */}
  <div className="flex flex-col items-center w-full max-w-screen-full p-6 pb-6 mt-10 bg-white rounded-lg shadow-xl sm:p-8">
    <h2 className="text-xl font-bold">Monthly Booking</h2>
    <span className="text-sm font-semibold text-gray-500">2020</span>
    <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $37,500
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-8 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-6 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-16 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Jan</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $45,000
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-10 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-6 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-20 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Feb</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $47,500
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-10 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-8 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-20 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Mar</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $50,000
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-10 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-6 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-24 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Apr</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $47,500
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-10 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-8 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-20 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">May</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $55,000
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-12 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-8 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-24 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Jun</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $60,000
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-12 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-16 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-20 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Jul</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $57,500
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-12 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-10 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-24 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Aug</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $67,500
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-12 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-10 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-32 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Sep</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $65,000
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-12 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-12 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow bg-indigo-400 h-28" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Oct</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $70,000
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-8 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-8 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-40 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Nov</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
          $75,000
        </span>
        <div className="flex items-end w-full">
          <div className="relative flex justify-center flex-grow h-12 bg-indigo-200" />
          <div className="relative flex justify-center flex-grow h-8 bg-indigo-300" />
          <div className="relative flex justify-center flex-grow h-40 bg-indigo-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold">Dec</span>
      </div>
    </div>
    <div className="flex w-full mt-3">
      <div className="flex items-center ml-auto">
        <span className="block w-4 h-4 bg-indigo-400" />
        <span className="ml-1 text-xs font-medium">Existing</span>
      </div>
      <div className="flex items-center ml-4">
        <span className="block w-4  h-4 bg-indigo-300" />
        <span className="ml-1 text-xs font-medium">Upgrades</span>
      </div>
      <div className="flex items-center ml-4">
        <span className="block w-4  h-4 bg-indigo-200" />
        <span className="ml-1 text-xs font-medium">New</span>
      </div>
    </div>
  </div>
  {/* Component End  */}
</>





    </div>
  </div>
           
  
  {/* Component End  */}




  
</>

       
    );
}


export default Graph