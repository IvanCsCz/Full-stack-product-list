import useProductList from "../hooks/useProductList"

function Product() {
  const {state, dispatch} = useProductList()

  return (
    <>
      {state.products.map(prod => (
        <tr key={prod.id} className="border-y-2">
          <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">
            {prod.name}
          </th>
          <td className="px-4 py-2">
            {prod.category}
          </td>
          <td className="px-4 py-2">
            ${prod.price}
          </td>
          <td className="px-4 py-2">
            <a 
              onClick={() => {dispatch({type:'set-selectedId', payload:{selectedId: prod.id}})}} 
              className="font-medium text-blue-600 hover:underline">
                Edit
            </a>
            <a 
              onClick={() => {dispatch({type:'delete-product', payload:{id: prod.id}})}} 
              className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                Remove
            </a>
          </td>
        </tr>
      ))}
    </>
  )
}

export default Product