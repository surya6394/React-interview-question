import React from 'react'
import UseEffectTitle from './UseEffectTitle'
import UseEffectScreenSize from './UseEffectScreenSize'
import UseEffectAPI from './UseEffectAPI'
import SetInterval from './CounterApps/SetInterval'

const UseEffectHome = () => {
  return (
    <>
        <UseEffectTitle />
        <UseEffectScreenSize />
        <UseEffectAPI />
        <SetInterval />
    </>
  )
}

export default UseEffectHome