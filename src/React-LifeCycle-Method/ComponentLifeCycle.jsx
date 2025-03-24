import React, { useState } from 'react'
import OldComponent from './OldComponent'
import NewComponent from './NewComponent'

const ComponentLifeCycle = () => {
  const [page, setPage] = useState('old')

  const toggleComponent = () => {
    if (page === 'old') {
      setPage('new')
    } else {
      setPage('old')
    }
  }

  return (
    <>
      <div>
        <button
          onClick={toggleComponent}
          className='px-3 py-2 bg-orange-600 text-[16px] text-white'
        >
          Toggle
        </button>
      </div>
      {page === 'old' && <OldComponent />}
      {page === 'new' && <NewComponent />}
    </>
  )
}

export default ComponentLifeCycle
