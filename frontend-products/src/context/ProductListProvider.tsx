import { ReactNode, useReducer } from "react"
import { initialProductListState, productListReducer } from "../reducers/productsReducer"
import { ProductListContext } from "./ProductListContext"

type ProductListProviderProps = {
  children: ReactNode
}

function ProductListProvider({children}:ProductListProviderProps) {
  const [state, dispatch] = useReducer(productListReducer, initialProductListState)

  return (
    <ProductListContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ProductListContext.Provider>
  )
}

export default ProductListProvider