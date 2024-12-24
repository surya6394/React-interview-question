import React, { useState } from 'react'
import Count from './Count';

const ReactMemo = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className='bg-[#30336b] pb-10'>
                <div className='example'>
                    <h1 className='underline'>React.memo() Example</h1>
                </div>
                <div className='mx-20 items-center'>
                    <h1>{count}</h1>
                    <div className='flex'>
                        <button onClick={() => setCount((prev) => prev + 1)} className='button-style'>
                            Increment
                        </button>
                    </div>
                </div>
                <Count />
            </div>
        </>
    )
}

export default ReactMemo