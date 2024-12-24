import React, { useCallback, useState } from 'react'
import Button from './Button';

const Counter = () => {

    const [count, setCount] = useState(0);

    // const increment = () => {
    //     console.log("Increment function triggered.")
    //     setCount(count + 1);
    // }

    const increment = useCallback(() => {
        console.log("Increment function triggered.")
        setCount((prev) => prev + 1);
    }, []);

    // const decrement = () => {
    //     console.log("Decrement function triggered.")
    //     setCount(count - 1);
    // }

    const decrement = useCallback(() => {
        console.log("Decrement function triggered.")
        setCount((prev) => prev - 1);
    }, [])

    return (
        <>
            <div className='bg-[#89ab4e] pb-10'>
                <div className='example'>
                    <h1 className='underline'>useCallback() Example</h1>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <div className='flex justify-center mb-5'>
                            <h1 className='text-[28px] text-[#FFFFFF] font-[400]'>Current value of count is: <span className='font-[700] '>{count}</span></h1>
                        </div>
                        <div>
                            <Button label="Increment" onClick={increment} />
                            <Button label="Decrement" onClick={decrement} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter