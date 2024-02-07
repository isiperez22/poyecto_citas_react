import { useState, useEffect, useContext } from 'react'
import  Error  from './Error'


function Formulario({pacientes, setPacientes, paciente, setPaciente }) {

  const [nombre, setNombre] = useState('')
  const [mascota, setMascota] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0){ 
      setNombre(paciente.nombre)
      setMascota(paciente.mascota)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)

    }
  }, [paciente])

  function generarId(){
    return Math.random().toString(18).substring(2)
  }



  const registroMascota = (e) => {
    e.preventDefault()

    if ([nombre, mascota, email, alta, sintomas].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    //Objeto de paciente

    const objetoPaciente = {
      nombre,
      mascota,
      email,
      alta,
      sintomas,
    }
    

    if(paciente.id){
      //Editando
      objetoPaciente.id = paciente.id
      const pacienteActualizados = pacientes.map( pacienteRegistrado => pacienteRegistrado.id === paciente.id ? objetoPaciente : pacienteRegistrado)
      setPacientes(pacienteActualizados)
      setPaciente({})
    } else{
      //Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    //Vacia el formulario

    setNombre('')
    setMascota('')
    setEmail('')
    setAlta('')
    setSintomas('')
    
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 '>
      <h2 className='text-xl font-black text-center'>Añade pacientes</h2>

      <form
        action=""
        className='bg-green-200 py-10 px-5 rounded-lg shadow-lg m-5'
        onSubmit={registroMascota}
      >
        <div className='mb-5'>
          <label htmlFor="Nombre" className='font-semibold uppercase'>Nombre</label>
          <input
            type="text"
            id='Nombre'
            className='block w-full mt-1 rounded-md p-1'
            value={nombre}
            onChange={(e => { setNombre(e.target.value) })}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="Mascota" className='font-semibold uppercase'>Nombre de la mascota</label>
          <input
            type="text"
            id='Mascota'
            className='block w-full mt-1 rounded-md p-1'
            value={mascota}
            onChange={(e => { setMascota(e.target.value) })}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='font-semibold uppercase'>Email</label>
          <input
            type="email"
            id='email'
            className='block w-full mt-1 rounded-md p-1'
            value={email}
            onChange={(e => { setEmail(e.target.value) })}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="Alta" className='font-semibold uppercase'>Fecha de alta</label>
          <input
            type="date"
            id='alta'
            className='block w-full mt-1 rounded-md p-1'
            value={alta}
            onChange={(e => { setAlta(e.target.value) })}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="Sintomas" className='font-semibold uppercase'>Sintomas</label>
          <textarea
            id='sintomas'
            className='block w-full mt-1 rounded-md p-1'
            value={sintomas}
            onChange={(e => { setSintomas(e.target.value) })}
          />
        </div>

        {error && <Error mensaje = 'Asegurese de que todos los campos estan rellenados' />}

        <input
          type="submit"
          value= {paciente.id ? 'Editar paciente' : 'Añadir paciente'}
          className='bg-green-600 p-3 rounded-md w-full text-white font-semibold uppercase hover:bg-green-700 cursor-pointer transition-all'
        />
      </form>
    </div>
  )
}

export default Formulario