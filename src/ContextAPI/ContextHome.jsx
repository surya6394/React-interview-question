// Create Root file to wrap all the component through Provider component to pass the data to all wrapped component

import React from 'react'
import PageOne from './PageOne'
import { BioProvider } from './ContextPage'

const ContextHome = () => {

    return (
        <BioProvider>
            <PageOne />
        </BioProvider>
    )
}

export default ContextHome