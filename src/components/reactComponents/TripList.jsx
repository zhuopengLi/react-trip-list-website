import React, { useState } from 'react'
import useFetch from './hooks/useFetch'

export default function TripList() {

    const [url, setUrl] = useState('https://different-rose-beanie.cyclic.app/trips')

    const { data: trips, isPending, error } = useFetch(url, {type: "GET"})

    return (
        <div className="trip-list-wrapper">
            <div className='trip-list-container'>

                <h2>Trip List</h2>

                <div className="filter">
                    <button onClick={() => setUrl("https://different-rose-beanie.cyclic.app/trips?loc=europe")}>Europe Trips</button>
                    <button onClick={() => setUrl("https://different-rose-beanie.cyclic.app/trips")}>All Trips</button>
                </div>

                {isPending && <div className='pending'>Loading...</div>}

                {!isPending && error && <div className='error'>{error}</div>}

                {!isPending && !error && <ul>
                    {trips && trips.map((trip, i) => (
                        <li key={i}>
                            <h3>{trip.title}</h3>
                            <p>{trip.price}</p>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}

