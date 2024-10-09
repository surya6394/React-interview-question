import React, { useEffect, useState } from 'react'

const UseEffectTitle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count >= 1) {
            document.title = `Chats (${count})`;
        } else {
            document.title = `Chats`;
        }
    },[count])
    return (
        <>
            <div className='bg-[#34495e]'>
                <div className='example'>
                    <h1 className='underline'>useEffect() Hook Counter & Title App Example</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='w-20 h-[30vh] gap-10'>
                        <h1 className='mt-3 text-[24px] font-semibold text-white'>{count}</h1>
                        <button onClick={() => setCount(count + 1)} type='submit' className='button-style'>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseEffectTitle