import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <>
            <div className='bg-[#34495e]'>
                <div className='example'>
                    <h1 className='underline'>useState() Hook Counter App Example</h1>
                </div>
                <div className='flex justify-center items-center h-[30vh] gap-10'>
                    <button onClick={decrement} type='submit' className='button-style'>
                        -
                    </button>
                    <h1 className='mt-3 text-[24px] font-semibold text-white'>{count}</h1>
                    <button onClick={increment} type='submit' className='button-style'>
                        +
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter