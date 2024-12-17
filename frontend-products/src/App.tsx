import { useCallback, useEffect } from "react";
import FormCreateProduct from "./components/FormCreateProduct";
import ProductsTable from "./components/ProductsTable";
import useProductList from "./hooks/useProductList";
import { getProducts } from "./services/productListServices";

function App() {
  const {dispatch} = useProductList()
  
  const fetchProducts = useCallback(async () => {
    try {
      const products = await getProducts();
      dispatch({ type: 'set-products', payload: { products } });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProducts()
  },[fetchProducts])

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
