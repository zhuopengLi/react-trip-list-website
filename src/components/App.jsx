import React from 'react'
import { useState } from 'react'
import TripList from './reactComponents/TripList'

export default function App() {

  const [showTrips, setShowTrips] = useState(true)

  return (
    <div className="App">
      {showTrips && <TripList />}

      <button onClick={() => { setShowTrips(prev => !prev) }}>Toggle show trips</button>
    </div>
  )
}