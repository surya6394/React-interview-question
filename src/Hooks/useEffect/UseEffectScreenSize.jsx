// Cleanup function

import React, { useEffect, useState } from 'react'

const UseEffectScreenSize = () => {

    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    const currentWidth = () => {
        console.log(window.innerWidth)
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', currentWidth);

        return () => {
            window.removeEventListener('resize', currentWidth);
        }
    })


    return (
        <>
            <div className='bg-[#30336b]'>
                <div className='example'>
                    <h1 className='underline'>useEffect() Hook Screen size Example</h1>
                </div>
                <div className='flex justify-center items-center h-[50vh]'>
                    <h1 className='font-semibold text-3xl text-white'>{screenWidth}</h1>
                </div>
            </div>
        </>
    )
}

export default UseEffectScreenSize