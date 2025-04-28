import React, { Suspense, lazy } from 'react'

const MyComponent = lazy(() => import('./MyComponent'));

const SuspenseReact = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
    </Suspense> 
    </>
  )
}

export default SuspenseReact