import FormCreateProduct from "./components/FormCreateProduct"
import ProductsTable from "./components/ProductsTable"

function App() {

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
