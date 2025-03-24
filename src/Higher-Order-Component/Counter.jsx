import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className='flex justify-center pb-10'>
                <div className='text-center'>
                    <div className='example'>
                        <h1 className='underline'>Higher Order component Example</h1>
                    </div>
                    <h2>{count}</h2>
                    <div className='w-32 mx-auto'>
                        <button onClick={() => setCount(count + 1)} className='button-style'>Increase</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter