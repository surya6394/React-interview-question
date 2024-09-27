import React, { useState } from 'react'

const UseStateArrValUpdate = () => {

    const [myArrVal, setMyArrVal] = useState({
        name: 'Surya', age: 26, degree: 'B-Tech'
    })

    const updateArrVal = () => {
        setMyArrVal({ ...myArrVal, name: 'Ravi Nigam' })
    }

    return (
        <>
            <div className='bg-yellow-500 pb-20'>
                <div className='example'>
                    <h1 className='underline'>useState() Hook Example</h1>
                </div>
                <div className='flex justify-center mt-10'>
                    <div>
                        <h1 className='heading-style'>My name is {myArrVal?.name}. I'm {myArrVal?.age} old. My degree is {myArrVal?.degree}</h1>
                        <button onClick={updateArrVal} className='button-style'>
                            Update info
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseStateArrValUpdate