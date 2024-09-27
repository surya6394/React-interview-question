import React, { useState } from 'react'

const UseStateToDo = () => {

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

    const restoreData = () => {
        setMyArr(data);
    }

    const removeElem = (id) => {
        const myNewArr = myArr.filter((currElem) => {
            return currElem.id !== id;
        })

        setMyArr(myNewArr);
    }

    return (
        <>
            <div className='bg-orange-800 pb-20'>
                <div className='example'>
                    <h1 className='underline'>useState() To-Do remove</h1>
                </div>
                <div className='flex justify-center mt-10'>
                    <button onClick={restoreData} className='text-white text-xl bg-blue-700 px-3 py-2 rounded-lg'>
                        Restore Data
                    </button>
                </div>
                <div className='flex justify-center'>
                    <div className='mt-10'>
                        {myArr.map((item) => (
                            <div className='flex gap-5'>
                                <h1 className='heading-style' key={item.id}>My name is {item.name}, I am {item.age} year old.</h1>
                                <div className='flex justify-center items-center -mt-3'>
                                    <button onClick={() => removeElem(item.id)} className='bg-black text-white rounded-lg px-3 h-[45px]'>
                                        remove
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default UseStateToDo