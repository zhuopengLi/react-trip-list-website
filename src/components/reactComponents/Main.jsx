import React, { useState } from 'react'
import List from './subComponents/List'

function Main({events, setEvents,showEvents,setShowEvents}) {

    return (
        <main>
            {showEvents && <List events={events} setEvents={setEvents}/>}

            {!showEvents && (
                <p>Events hidden</p>
            )}

            {events.length !== 0 ? <button onClick={() => setShowEvents(prev => !prev)}>Toggle show events</button> : <p>No events</p>}
        </main>
    )
}

export default Main


