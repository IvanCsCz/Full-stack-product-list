import { useContext } from "react"
import { ProductListContext } from "../context/ProductListContext"

function useProductList() {
  const context = useContext(ProductListContext)

  if(!context){
    throw new Error('useProductList must be used whitin a ProductListProvider')
  }
  return context
}

export default useProductList