import React, { useRef } from 'react'

const UseRefHome = () => {

    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: ", email.current.value, ", Password: ", password.current.value);
    }

    return (
        <>
            <div className='bg-[#30336b] pb-20'>
                <div className='example'>
                    <h1 className='underline'>useRef() Hook Example</h1>
                </div>
                <div className='flex mx-20 justify-center items-center'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white text-txtclr2 mb-1">Email</label>
                            <input ref={email} type="text" className='input-style' placeholder='Enter your email' autoComplete='off' />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white text-txtclr2 mb-1">Password</label>
                            <input ref={password} type="text" className='input-style' placeholder='Enter your password' autoComplete='off' />
                        </div>
                        <div>
                            <button type='submit' className='button-style'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UseRefHome