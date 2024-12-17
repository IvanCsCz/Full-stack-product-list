
function FormCreateProduct() {
  return (
    <form className="md:w-1/3 lg:w-2/5 mx-5 rounded-lg p-6 bg-gray-100">
        <div className="">
          <label htmlFor="base-input" className="block mb-2 font-medium">Name</label>
          <input type="text" id="base-input" className="p-3 w-full block rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mt-5">
          <label htmlFor="base-input" className="block mb-2 font-medium">Category</label>
          <input type="text" id="base-input" className="p-3 w-full block rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="mt-5">
          <label htmlFor="base-input" className="block mb-2 font-medium">Price</label>
          <input type="text" id="base-input" className="p-3 w-full block rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <input
          type="submit"
          className="mt-10 bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
          value='Create'
        />
    </form>
  )
}

export default FormCreateProduct