import React from 'react'

export default function List({ setEvents, events }) {
    const handleClick = id => {
        setEvents(prev => prev.filter(e => e.id !== id))

        console.log(events)
    }

    return (
        events.map((e, i) => (
            <div key={i + 1}>
                <h2><span>{i + 1}</span> - {e.title}</h2>
                <p>{e.location} - {e.date}</p>
                <button onClick={() => handleClick(e.id)}>Delete event</button>
            </div>
        ))
    )
}