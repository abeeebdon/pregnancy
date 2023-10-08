const Button = ({ text, onClick }) => {
  return (
    <button className="bg-blue-800 text-white px-8 py-4" onClick={onClick}>
      {text}
    </button>
  )
}
export default Button
