import { useParams } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Notification from '../icons/Notification.svg'
import Foto from '../img/Foto.png'

const DashboardPage = () => {

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
        <ul className='flex flex-col gap-4'>
          <li className='flex gap-4 my-5'>
            <h4 className='text-xl font-bold'>Asesor 1</h4>
            <button className='bg-yellow-500 rounded-xl py-1 px-3'>Revisar documentos</button>
            <button className='bg-green-500 rounded-xl py-1 px-3'>Aceptar Asesor</button>
            <button className='bg-red-500 rounded-xl py-1 px-3'>Rechazar Asesor</button>
          </li>
          <li className='flex gap-4 my-5'>
            <h4 className='text-xl font-bold'>Asesor 2</h4>
            <button className='bg-yellow-500 rounded-xl py-1 px-3'>Revisar documentos</button>
            <button className='bg-green-500 rounded-xl py-1 px-3'>Aceptar Asesor</button>
            <button className='bg-red-500 rounded-xl py-1 px-3'>Rechazar Asesor</button>
          </li>
          <li className='flex gap-4 my-5'>
            <h4 className='text-xl font-bold'>Asesor 3</h4>
            <button className='bg-yellow-500 rounded-xl py-1 px-3'>Revisar documentos</button>
            <button className='bg-green-500 rounded-xl py-1 px-3'>Aceptar Asesor</button>
            <button className='bg-red-500 rounded-xl py-1 px-3'>Rechazar Asesor</button>
          </li>
          <li className='flex gap-4 my-5'>
            <h4 className='text-xl font-bold'>Asesor 4</h4>
            <button className='bg-yellow-500 rounded-xl py-1 px-3'>Revisar documentos</button>
            <button className='bg-green-500 rounded-xl py-1 px-3'>Aceptar Asesor</button>
            <button className='bg-red-500 rounded-xl py-1 px-3'>Rechazar Asesor</button>
          </li>
          <li className='flex gap-4 my-5'>
            <h4 className='text-xl font-bold'>Asesor 5</h4>
            <button className='bg-yellow-500 rounded-xl py-1 px-3'>Revisar documentos</button>
            <button className='bg-green-500 rounded-xl py-1 px-3'>Aceptar Asesor</button>
            <button className='bg-red-500 rounded-xl py-1 px-3'>Rechazar Asesor</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardPage