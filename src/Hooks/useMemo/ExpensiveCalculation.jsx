import React, { useMemo } from 'react'

const ExpensiveCalculation = () => {
    const sum = () => {
        let i;
        for (i = 0; i <= 1000000000; i++) {
            i = i + 1;
        }
        return i;
    }
    const total = useMemo(() => sum(), []);
    return (
        <>
            <div>
                <p className='text-[28px] text-[#FFFFFF] font-[400]'>Sum of expensive calculation is: <span className='font-[700] '>{total}</span></p>
            </div>
        </>
    )
}
export default ExpensiveCalculation