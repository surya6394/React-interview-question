import React, { useEffect, useState } from 'react'

const SetInterval = () => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        console.log("Handle count call:- ")
        setInterval(() => {
            console.log("timer count call:- ")
            if (count <= 10) {
                setCount((prev) => prev + 1);
            }
        }, 1000);

        // clearInterval();
    }

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCount((prev) => prev + 1);
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, [])

    return (
        <div className='bg-orange-800 pb-20'>
            <div className='example'>
                <h1 className='underline'>useState() To-Do remove</h1>
            </div>
            <div className='flex justify-center mt-10'>
                {count}
            </div>
            <div>
                <button type='submit' onClick={() => handleCount()} className='button-style'>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default SetInterval