import React, { useContext } from 'react'
import { BioContext } from './ContextPage'

const PageTwo = () => {

    const {name, age, title} = useContext(BioContext);

  return (
    <div>
        <h1>I am {name}. My age is {age}.</h1>
        <h1>My Title is {title}</h1>
    </div>
  )
}

export default PageTwo