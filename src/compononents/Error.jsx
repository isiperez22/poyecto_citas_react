function Error({mensaje}) {
    return (
        <div className='bg-red-700 p-3 text-white text-center font-semibold uppercase rounded-md my-4'>
            <p> {mensaje}</p>
        </div>
    )
}

export default Error
