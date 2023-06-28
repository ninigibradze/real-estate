
const LoginModal = ({setLogIn, onLogin, onCloseModal}) => {

    const handleChangeInput = (e) => {
        const {name, value} = e.target; 
        setLogIn(prev => ({...prev, [name]: value}))
    }

   return (
    <div className='flex-1 bg-white w-[400px] mb-8 border 
          border-gray-300 rounded-lg px-6 py-8 fixed aling-item-center'>
        <form className='flex flex-col gap-y-4' >
            <input name='name' className='border border-gray-300 focus:border-violet-700 
            outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Name*' onChange={handleChangeInput} />
             <input name='password' className='border border-gray-300 focus:border-violet-700 
            outline-none rounded w-full px-4 h-14 text-sm' type='password' placeholder='Password*' onChange={handleChangeInput} />
            <div className='flex gap-x-2'>
                <button className='bg-violet-700 hover:bg-violet-800 
                text-white rounded p-4 text-sm w-full transition' onClick={onLogin}>Log in</button>
                <button className='border border-violet-700 text-violet-700 
                hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'
                onClick={() => onCloseModal(false)}>Back</button>
            </div>
        </form>
    </div>
   )

}

export default LoginModal