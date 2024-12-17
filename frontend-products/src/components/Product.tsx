import { PRODUCT_LIST } from "../data/Products"

function Product() {
  const productList = PRODUCT_LIST

  return (
    <>
      {productList.map(prod => (
        <tr className="border-y-2">
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
          <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
          <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
        </td>
      </tr>
      ))}
    </>
  )
}

export default Product