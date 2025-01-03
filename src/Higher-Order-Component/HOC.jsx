import React from 'react'
import Counter from './Counter'

const HOC = () => {
    return (
        <div>
            <CounterRed cmp={<Counter />} />
            <CounterGreen cmp={<Counter />} />
            <CounterBlue cmp={<Counter />} />
        </div>
    )
}

function CounterRed(props) {
    return (
        <>
            <div className='text-center bg-red-700 text-white'>
                <h2>Red Counter</h2>
                {props.cmp}
            </div>
        </>
    )
}

function CounterGreen(props) {
    return (
        <>
            <div className='text-center bg-green-600 text-white'>
                <h2>Green Counter</h2>
                {props.cmp}
            </div>
        </>
    )
}

function CounterBlue(props) {
    return (
        <>
            <div className='text-center bg-blue-700 text-white'>
                <h2>Blue Counter</h2>
                {props.cmp}
            </div>
        </>
    )
}

export default HOC