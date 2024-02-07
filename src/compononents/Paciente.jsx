import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const confirmarEliminar = () => {
        
        const confirmar = confirm('¿Estas seguro de que quieres eliminar el registro?')

        if(confirmar){
            eliminarPaciente(paciente.id)
        } else {
            alert('No se ha eliminado el registro')
        }
    }
    // console.log(paciente)
    return (
        <div className='bg-green-200 py-10 px-5 rounded-lg shadow-lg m-5'>
            <div className=' text-right'>
                <button className='m-2 bg-green-600 p-3 rounded-md text-white font-semibold uppercase hover:bg-green-700 cursor-pointer transition-all' 
                onClick={() => setPaciente(paciente)}>
                  <PencilIcon className="h-5 w-5 text-white"/>
                </button>
                <button className='m-2 bg-red-600 p-3 rounded-md text-white font-semibold uppercase hover:bg-red-700 cursor-pointer transition-all'
                onClick={confirmarEliminar}>
                    <TrashIcon className="h-5 w-5 text-white"/>
                </button>
            </div>

            <p className='font-semibold uppercase mb-3'>
                Nombre:{' '}
                <span className='font-normal normal-case'>{paciente.nombre}</span>
            </p>

            <p className='font-semibold uppercase mb-3'>
                Mascota:{' '}
                <span className='font-normal normal-case'>{paciente.mascota}</span>
            </p>

            <p className='font-semibold uppercase mb-3'>
                Email:{' '}
                <span className='font-normal normal-case'>{paciente.email}</span>
            </p>

            <p className='font-semibold uppercase mb-3'>
                Fecha de alta:{' '}
                <span className='font-normal normal-case'>{paciente.alta}</span>
            </p>

            <p className='font-semibold uppercase mb-3'>
                Sintomas:{' '}
                <span className='font-normal normal-case'>{paciente.sintomas}</span>
            </p>
        </div>
    )
}

export default Paciente