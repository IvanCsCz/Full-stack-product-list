import useProductList from "../hooks/useProductList"
import Product from "./Product"

function ProductsTable() {
  const {state} = useProductList()
  
  if(state.products.length === 0) return (
    <p className="md:w-1/3 lg:w-3/5 mx-5 px-6">No hay productos</p>
  )

  return (
    <div className="md:w-1/3 lg:w-3/5 mx-5 rounded-lg px-6">
      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-2">
                Product name
              </th>
              <th scope="col" className="px-4 py-2">
                Category
              </th>
              <th scope="col" className="px-4 py-2">
                Price
              </th>
              <th scope="col" className="px-4 py-2 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Product/>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductsTable