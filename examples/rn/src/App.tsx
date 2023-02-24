import React, { useEffect } from 'react'
import RNAirgramModule, { Counter } from '@airgram/rn'

const App = () => {
  useEffect(() => {
    console.log(RNAirgramModule)
  })

  return <Counter />
}

export default App
