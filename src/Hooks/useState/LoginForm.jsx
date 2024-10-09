import React, { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            const newEntry = { id: new Date().getTime().toString(), email, password }
            setAllEntry([...allEntry, newEntry]);
            setEmail('');
            setPassword('');
        } else {
            alert('Please enter the credentials.');
        }
    }


    return (
        <>
            <div className='bg-[#34495e]'>
                <div className='example'>
                    <h1 className='underline'>useState() Hook Login Example</h1>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='flex justify-center items-center py-28'>
                        <div className='bg-sky-500 p-14 w-96'>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white text-txtclr2 mb-1">Email</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name='email' className='input-style' placeholder='Enter your email' autoComplete='off' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="password" className="block text-sm font-medium text-white text-txtclr2 mb-1">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' className='input-style' placeholder='Enter your password' autoComplete='off' />
                            </div>
                            <div>
                                <button type='submit' className='button-style'>
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='flex justify-center pb-20'>
                    <div>
                        <div className='example mb-5'>
                            <h1 className='text-2xl'>Credentials</h1>
                        </div>
                        <div className='bg-sky-500 text-white px-20 rounded-lg'>
                            {allEntry.map((item) => {
                                const { id, email, password } = item;
                                return (
                                    <div key={id} className='flex gap-28 py-3 justify-between '>
                                        <h1>{id}</h1>
                                        <h1>{email}</h1>
                                        <h1>{password}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm