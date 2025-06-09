import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    if(count === 5){
        throw new Error("Count value is = ",count);
    }

  return (
    <>
        <div className='flex justify-center items-center h-screen'>
            <div className=''>
                <h1 className='text-[32px] font-semibold'>
                Practical of Error Boundaries
                </h1>
                <p>{count}</p>
                <div className='flex'>
                    <button onClick={() => setCount((prev) => prev + 1)} className='px-5 py-2 bg-orange-500 text-slate-50 rounded-lg'>Increment</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter