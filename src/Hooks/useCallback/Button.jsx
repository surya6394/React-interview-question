import React, { memo } from 'react'

const Button = ({ onClick, label }) => {

    console.log("Button rendered!!!!!!");

    return (
        <>
            <div className='flex justify-center'>
                <button className='w-[200px] h-16 bg-red-500 text-[#FFFFFF] text-[25px] rounded-[8px] mb-3' onClick={onClick}>{label}</button>
            </div>
        </>
    )
}

export default memo(Button);