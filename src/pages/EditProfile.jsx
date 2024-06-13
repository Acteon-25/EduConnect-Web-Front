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
        <h3 className='text-3xl'>Editar perfil</h3>
        <img src={Foto} alt="" className='size-44 rounded-full m-3' />
        <button className='bg-sky-500 rounded-xl py-1 px-3'>Cambiar Foto</button>
        <div className='flex flex-col gap-2 m-3'>
          <h4 className='text-xl font-bold'>Nombre</h4>
          <input type="text" placeholder='Nombre' className='text-md px-2 py-1 rounded-xl border border-black' />
        </div>
        <div className='flex flex-col gap-2 m-3'>
          <h4 className='text-xl font-bold'>Email</h4>
          <input type="email" placeholder='Correo' className='text-md px-2 py-1 rounded-xl border border-black' />
        </div>
        <div className='flex flex-col gap-2 m-3'>
          <h4 className='text-xl font-bold'>Numero Celular</h4>
          <input type="text" placeholder='Numero' className='text-md px-2 py-1 rounded-xl border border-black' />
        </div>
        <div className='flex flex-col gap-2 m-3'>
          <h4 className='text-xl font-bold'>Contraseña</h4>
          <input type="password" placeholder='Contraseña' className='text-md px-2 py-1 rounded-xl border border-black' />
        </div>
        <button className='bg-lime-500 rounded-xl py-2 px-5'>Actualizar</button>
      </div>
    </div>
  )
}

export default DashboardPage