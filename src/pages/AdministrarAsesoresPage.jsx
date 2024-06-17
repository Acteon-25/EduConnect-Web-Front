import { useParams } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Notification from '../icons/Notification.svg'
import Foto from '../img/Foto.png'
import AsesorList from '../components/AsesorList'


const AdministrarAsesoresPage = () => {

  const { id } = useParams()

  return (
    <div className="">
      <SideBar />

      <div className='flex px-10 pb-10 pt-20 gap-4 w-screen justify-between'>
        <div className='flex float-right'>
          <img src={""} alt="" />
          <input type="text" placeholder='' />
        </div>
        <div className='flex float-left gap-4'>

          <img src={Notification} alt="" />
          <img src={Foto} alt="" className='size-12 rounded-full' />
          <h2>Bienvenido Jean{id}</h2>
          <p>Admin</p>
        </div>
      </div>


      <div className='grid grid-cols-1 place-items-center w-screen'>
        <h3 className='text-3xl'>Administracion de solicitudes de Asesores</h3>
        <br />

        <AsesorList />
        
      </div>
    </div>
  )
}

export default AdministrarAsesoresPage