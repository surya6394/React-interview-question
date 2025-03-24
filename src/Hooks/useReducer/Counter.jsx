// useReducer() hook example

import React, { useReducer } from 'react'

const Counter = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return state + 1;
            case "Decrement":
                return state - 1;
            case "Reset":
                return 0;
            default:
                break;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <div className='bg-[#30336b] pb-10'>
                <div className='example'>
                    <h1 className='underline'>useReducer() Hook Github User Project Example</h1>
                </div>
                <div className='flex mx-20 items-center'>
                    <div className='grid grid-cols-3 gap-10 mt-20'>
                        <button onClick={() => dispatch({ type: 'Increment' })} className='button-style'>
                            Increment
                        </button>
                        <h1>{count}</h1>
                        <button onClick={() => dispatch({ type: 'Decrement' })} className='button-style'>
                            Decrement
                        </button>
                        <button onClick={() => dispatch({ type: 'Reset' })} className='button-style'>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter



// import React, { useReducer } from 'react'

// const Counter = () => {

//     const initialState = {
//         count: 0,
//         inc: 2,
//         dec: 2
//     }

//     const reducer = (state, action) => {
//         switch (action.type) {
//             case "Increment":
//                 return { ...state, count: state.count + 1 };
//             case "Decrement":
//                 return { ...state, count: state.count - 1 };
//             case "Reset":
//                 return { ...state, count: 0 };
//             default:
//                 break;
//         }
//     }

//     const [state, dispatch] = useReducer(reducer, initialState);


//     return (
//         <>
//             <div className='bg-[#30336b] pb-10'>
//                 <div className='example'>
//                     <h1 className='underline'>useReducer() Hook Github User Project Example</h1>
//                 </div>
//                 <div className='flex mx-20 items-center'>
//                     <div className='grid grid-cols-3 gap-10 mt-20'>
//                         <button onClick={() => dispatch({ type: 'Increment' })} className='button-style'>
//                             Increment
//                         </button>
//                         <h1>{state.count}</h1>
//                         <button onClick={() => dispatch({ type: 'Decrement' })} className='button-style'>
//                             Decrement
//                         </button>
//                         <button onClick={() => dispatch({ type: 'Reset' })} className='button-style'>
//                             Reset
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Counter