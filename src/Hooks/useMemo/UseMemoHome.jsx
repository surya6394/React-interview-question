import React, { useState } from 'react'
import ExpensiveCalculation from './ExpensiveCalculation';

const UseMemoHome = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <div className='bg-[#933373] pb-10'>
                <div className='example'>
                    <h1 className='underline'>useMemo() Example</h1>
                </div>
                <div className='flex justify-center mx-20 items-center'>
                    <ExpensiveCalculation />
                </div>
                <div className='mx-20 items-center text-center'>
                    <h1 className='text-[28px] text-[#FFFFFF] font-[400]'>The value of count is: <span className='font-[700] '>{count}</span></h1>
                    <div className='flex'>
                        <button onClick={() => setCount((prev) => prev + 1)} className='button-style'>
                            Increment
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseMemoHome;