import React, { memo, useRef } from 'react'

const Count = () => {

    const renderCount = useRef(0);

  return (
 <>
    <div>
        <div>
            <h1>This is the count component {renderCount.current++} time(s).</h1>
        </div>
    </div>
 </>
  )
}

export default memo(Count);