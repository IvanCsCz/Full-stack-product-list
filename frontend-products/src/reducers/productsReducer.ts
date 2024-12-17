import { PRODUCT_LIST } from "../data/Products";
import { DraftProduct, Product } from "../types";
const lastId:number = PRODUCT_LIST[4].id;

export type ProductListActions = 
{ type: 'set-products', payload: {products: Product[]} } |
{ type: 'add-product', payload: {product: DraftProduct} } |
{ type: 'update-product', payload: {product: DraftProduct} } |
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
  if(action.type === 'set-products'){
    return {
      ...state,
      products: [...action.payload.products]
    }
  }

  if(action.type === 'add-product'){
    return {
      ...state,
      products: [...state.products, {id:lastId+1, ...action.payload.product}]
    }
  }

  if(action.type === 'update-product'){
    const filteredProducts = state.products.map(product => {
      if(product.id === state.selectedId){
        return {
          id:lastId+1,
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