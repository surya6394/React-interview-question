//To access the data from here

import React, { useContext } from 'react'
import { BioContext } from './ContextPage'
import PageTwo from './PageTwo';

const PageOne = () => {

    const { name, age } = useContext(BioContext);

    return (
        <>
            <div className='flex justify-center bg-purple-800 pt-10 text-white text-[30px]'>
                <h1 className='underline'>ContextAPI Example</h1>
            </div>
            <div className="flex justify-center items-center h-[50vh] bg-purple-800 text-white text-[30px]">
                <div className='text-center'>
                    <h1>My name is {name}. I am {age} years old.</h1>
                    <PageTwo />
                </div>
            </div>
        </>
    )
}

export default PageOne