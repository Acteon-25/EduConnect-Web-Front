const Goals = ({ className, num, text }) => {

  return (
    <div>
      <h3 className={`${className} text-5xl text-sky-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-sky-400`}>{num}</h3>
      <p className="text-lg">{text}</p>
    </div>
  )
}

export default Goals