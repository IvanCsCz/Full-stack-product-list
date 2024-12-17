import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import useProductList from "../hooks/useProductList"
import { DraftProduct } from "../types"
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
    }
  }, [isSelectedId, state,])

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = ev.target

    setProductState({
      ...productState,
      [name]: value
    })
  }

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    if(Object.values(productState).includes('')){
      setError('All fields are required')
      return
    }

    setError('')
    setProductState(productStateInitialState)

    if(isSelectedId){
      dispatch({type: 'update-product', payload:{product:productState}})
      dispatch({type: 'reset-selectedId'})
      return
    }

    dispatch({type: 'add-product', payload: {product: productState}})


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

        <input
          type="submit"
          className="mt-10 bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
          value={isSelectedId ? 'Update' : 'Create'}
        />

        {error && <ErrorMessage message={error} />}
    </form>
  )
}

export default FormCreateProduct