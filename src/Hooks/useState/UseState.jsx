import React, { useState } from 'react'
import UseStatArray from './UseStatArray';
import UseStateArrValUpdate from './UseStateArrValUpdate';
import UseStateToDo from './UseStateToDo';

const UseState = () => {

    const [name, setName] = useState('Surya Pratap');

    const toggleName = () => {
        if (name === 'Surya Pratap') {
            setName('Ravi Nigam');
        } else {
            setName('Surya Pratap')
        }
    }
    console.log("Hitted");

    return (
        <>
            <div className='bg-cyan-600'>
                <div className='flex justify-center pt-10 text-white text-[30px]'>
                    <h1 className='underline'>useState() Hook</h1>
                </div>
                <div className="flex justify-center items-center h-[50vh] text-white text-[30px]">
                    <div>
                        <div className='text-center text-[24px] mb-10'>
                            {name}
                        </div>
                        <button onClick={toggleName} className='button-style'>
                            Change Name
                        </button>
                    </div>
                </div>
            </div>
            <UseStatArray />
            <UseStateArrValUpdate />
            <UseStateToDo />
        </>
    )
}

export default UseState