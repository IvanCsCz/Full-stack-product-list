type ErrorMessageProps = {
  message: string
}

function ErrorMessage({message}:ErrorMessageProps) {
  return (
    <p className="bg-red-600 text-white font-bold p-3 mt-2 uppercase text-center rounded-lg">{message}</p>
  )
}

export default ErrorMessage