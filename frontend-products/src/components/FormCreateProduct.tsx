import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import useProductList from "../hooks/useProductList"
import { createProduct, updateProduct } from "../services/productListServices"
import { DraftProduct } from "../types"
import CreateUpdateButton from "./CreateUpdateButton"
import ErrorMessage from "./ErrorMessage"

const productStateInitialState: DraftProduct = {
  name: '',
  category: '',
  price: 0
}

function FormCreateProduct() {
  const [productState, setProductState] = useState(productStateInitialState)
  const [error, setError] = useState('')
  const {state, dispatch} = useProductList()

  const isSelectedId = !!state.selectedId

  useEffect(() => {
    if(isSelectedId){
      const selectedProduct = state.products.filter(prod => prod.id === state.selectedId)[0]

      setProductState({
        name: selectedProduct.name,
        category: selectedProduct.category,
        price: selectedProduct.price
      })
    } else{
      setProductState(productStateInitialState)
    }
  }, [isSelectedId, state,])

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = ev.target

    setProductState({
      ...productState,
      [name]: value
    })
  }

  const handleSubmit = async(ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    if(Object.values(productState).includes('')){
      setError('All fields are required')
      return
    }

    setError('')
    setProductState(productStateInitialState)

    if(isSelectedId){
    const updatedProduct = await updateProduct({...productState, id:state.selectedId})
      dispatch({type: 'update-product', payload:{product:updatedProduct}})
      dispatch({type: 'reset-selectedId'})
      return
    }

    const createdProduct = await createProduct(productState)
    dispatch({type: 'add-product', payload: {product: createdProduct}})

  }

  return (
    <form onSubmit={handleSubmit} className="md:w-1/3 lg:w-2/5 mx-5 rounded-lg p-6 bg-gray-100">
        <div className="">
          <label htmlFor="base-input" className="block mb-2 font-medium">Name</label>
          <input 
            type="text" 
            name="name"
            id="base-input" 
            className="p-3 w-full block rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500" 
            value={productState.name}
            onChange={handleChange}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="base-input" className="block mb-2 font-medium">Category</label>
          <input 
            type="text" 
            name="category"
            id="base-input" 
            className="p-3 w-full block rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500" 
            value={productState.category}
            onChange={handleChange}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="base-input" className="block mb-2 font-medium">Price</label>
          <input 
            type="number" 
            name="price"
            id="base-input" 
            className="p-3 w-full block rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500" 
            value={productState.price}
            onChange={handleChange}
          />
        </div>

        <CreateUpdateButton />

        {error && <ErrorMessage message={error} />}
    </form>
  )
}

export default FormCreateProduct