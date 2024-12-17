import { createContext, Dispatch } from "react"
import { ProductListActions, ProductListState } from "../reducers/productsReducer"

type ProductListContextProps = {
  state: ProductListState,
  dispatch: Dispatch<ProductListActions>
}

export const ProductListContext = createContext<ProductListContextProps>(null!)

