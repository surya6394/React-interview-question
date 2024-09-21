import React, { useContext } from 'react'
import { BioContext } from './ContextPage'

const PageTwo = () => {

    const {name, age} = useContext(BioContext);

  return (
    <div>
        <h1>I am {name}. My age is {age}.</h1>
    </div>
  )
}

export default PageTwo