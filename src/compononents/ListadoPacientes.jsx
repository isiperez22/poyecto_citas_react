import Paciente from "./Paciente"
import { useEffect } from "react";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (

    <div className='md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='text-xl font-black text-center'>Listado de pacientes</h2>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente = {eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='text-xl font-black text-center'>No hay pacientes aún</h2>
        </>
      )
      }
    </div>
  )
}

export default ListadoPacientes