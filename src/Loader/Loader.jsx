import { Circles } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>

            <Circles
                height="80"
                width="80"
                color="#cfda6c"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    )
}

export default Loader