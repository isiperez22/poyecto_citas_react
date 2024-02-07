import { useState, useEffect } from "react";
import Header from "./compononents/Header";
import Formulario from "./compononents/Formulario";
import ListadoPacientes from "./compononents/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const comprobarLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacienteLS)
      // console.log(pacienteLS)
    }
    comprobarLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const listaPacientes = pacientes.filter(eliminar => eliminar.id !== id)
    setPacientes(listaPacientes)
  }
  return (
    <>
      <div className="container mx-auto mt-3">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>

      </div>
    </>

  )
}



export default App
