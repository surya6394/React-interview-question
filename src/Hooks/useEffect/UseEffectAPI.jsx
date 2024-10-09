import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {

    const [data, setData] = useState([]);

    const getUser = async () => {
        const response = await fetch('https://api.github.com/users')
        const data = await response.json();
        setData(data);
    }
    useEffect(() => {
        getUser();
    }, [])

    return (
        <>
            <div className='bg-[#30336b]'>
                <div className='example'>
                    <h1 className='underline'>useEffect() Hook Github User Project Example</h1>
                </div>
                <div className='flex mx-20 items-center'>
                    <div className='grid grid-cols-3 gap-10 mt-20'>
                        {data?.map((item) => {
                            const { login, avatar_url } = item;
                            return (
                                <div className='flex items-center bg-gray-50 p-3 rounded-lg gap-5'>
                                    <img src={avatar_url} alt="" width="32%" height="40%"/>
                                    <div>
                                        <h1 className='text-[22px] font-semibold'>{login}</h1>
                                        <p className='text-[19px] text-gray-700'>My name is Surya.</p>
                                        <div className='flex rounded-md justify-between bg-gray-200 px-4 py-1 mt-4 gap-8 text-center'>
                                            <div>
                                                <p className='text-gray-600'>Articles</p>
                                                <h2 className='text-[18px] font-semibold'>38</h2>
                                            </div>
                                            <div>
                                                <p className='text-gray-600'>Followers</p>
                                                <h2 className='text-[18px] font-semibold'>388</h2>
                                            </div>
                                            <div>
                                                <p className='text-gray-600'>Raiting</p>
                                                <h2 className='text-[18px] font-semibold'>4.5</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseEffectAPI