import { useEffect } from "react"
import FormCreateProduct from "./components/FormCreateProduct"
import ProductsTable from "./components/ProductsTable"
import { PRODUCT_LIST } from "./data/Products"
import useProductList from "./hooks/useProductList"

function App() {
  const productList = PRODUCT_LIST
  const {dispatch} = useProductList()

  useEffect(() => {
    dispatch({type: 'set-products', payload:{products:productList}})
  },[dispatch, productList])

  return (
    <div className="container mx-auto mt-14">
      <h1 className="text-3xl font-bold text-center">Product list</h1> 

      <div className="mt-8 md:flex justify-center">
        <FormCreateProduct />
        <ProductsTable />
      </div>
    </div>
  )
}

export default App
