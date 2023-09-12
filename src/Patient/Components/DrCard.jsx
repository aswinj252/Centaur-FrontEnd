

function DrCard() {
  return (
    <div className="flex  bg-white rounded-lg shadow dark:bg-gray-800">
    <div className="relative flex-none w-24 md:w-48">
      <img
        src="/images/object/8.jpg"
        alt="shopping image"
        className="absolute inset-0 object-cover w-full h-full rounded-lg"
      />
    </div>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
          Classic Utility Jacket
        </h1>
        <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
          $110.00
        </div>
        <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
          In stock
        </div>
      </div>
      
      <div className="flex mb-4 text-sm font-medium">
       
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Free shipping on all continental US orders.
      </p>
    </form>
  
  
  
  </div>
  )
}

export default DrCard