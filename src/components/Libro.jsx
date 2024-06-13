

const Libro = ({ title, imgUrl }) => {

  return (
    <div className='size-72 place-content-center'>
      <h3 className="text-3xl text-center font-bold">{title}</h3>
      <img src={imgUrl} alt={imgUrl} className="w-full  h-[200px] rounded-xl" />
    </div>
  )
}

export default Libro