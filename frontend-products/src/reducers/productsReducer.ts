import { Product } from "../types";

export type ProductListActions = 
{ type: 'add-product', payload: {product: Product} } |
{ type: 'update-product', payload: {product: Product} } |
{ type: 'delete-product', payload: {id: Product['id']} } |
{ type: 'set-selectedId', payload: {selectedId: Product['id']} } |
{ type: 'reset-selectedId' }

export type ProductListState = {
  products: Product[],
  selectedId: Product['id']
}

export const initialProductListState: ProductListState = {
  products: [],
  selectedId: 0
}

export const productListReducer = (
  state: ProductListState = initialProductListState,
  action: ProductListActions
) => {
  if(action.type === 'add-product'){
    return {
      ...state,
      products: [...state.products, action.payload.product]
    }
  }

  if(action.type === 'update-product'){
    const filteredProducts = state.products.map(product => {
      if(product.id === action.payload.product.id){
        return {
          ...action.payload.product
        }
      }
      return product
    })

    return {
      ...state,
      products: [...filteredProducts]
    }
  }

  if(action.type === 'delete-product'){
    const filteredProducts = state.products.filter(product => product.id !== action.payload.id)
    
    return {
      ...state,
      products: [...filteredProducts]
    }
  }

  if(action.type === 'set-selectedId'){
    return {
      ...state,
      selectedId: action.payload.selectedId
    }
  }

  if(action.type === 'reset-selectedId'){
    return {
      ...state,
      selectedId: initialProductListState.selectedId
    }
  }

  return state
}