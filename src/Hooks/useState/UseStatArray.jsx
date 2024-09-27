import React, { useState } from 'react'

const UseStatArray = () => {

    const data = [
        {
            id: 0, name: "Surya", age: 23
        },
        {
            id: 1, name: "Ravi", age: 24
        },
        {
            id: 3, name: "Rahul", age: 22
        }
    ]

    const [myArr, setMyArr] = useState(data);

    const clearData = () => {
        setMyArr([]);
    }

    return (
        <>
            <div className='bg-orange-800 pb-20'>
                <div className='example'>
                    <h1 className='underline'>useState() Hook Example</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='mt-10'>
                        {myArr.map((item) => (
                            <div>
                                <h1 className='heading-style' key={item.id}>My name is {item.name}, I am {item.age} year old.</h1>
                            </div>
                        ))}
                        <button onClick={clearData} className='button-style'>
                            Clear Data
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseStatArray