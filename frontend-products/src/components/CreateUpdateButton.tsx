import useProductList from "../hooks/useProductList"

function CreateUpdateButton() {
  const {state, dispatch} = useProductList()

  return (
    <>
      {
        state.selectedId 
          ? (
            <>
              <input
                type="submit"
                className="mt-10 bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                value='Update'
              />
              <input
                type="button"
                className="mt-2 bg-red-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                value='Cancel'
                onClick={() => dispatch({type:'reset-selectedId'})}
              />
            </>
          )
          : (
            <input
              type="submit"
              className="mt-10 bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
              value='Create'
            />
          )
      }
    </>
  )
}

export default CreateUpdateButton