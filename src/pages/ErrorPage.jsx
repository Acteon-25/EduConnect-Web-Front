import Error404 from '../icons/Error404.svg'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <img src={Error404} alt="" className='aspect-video w-[1000px]' />
        <div className="bg-sky-500 rounded-full px-4 py-1 ">
          <button onClick={() => {
            navigate("/")
          }}>Volver a Home</button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;