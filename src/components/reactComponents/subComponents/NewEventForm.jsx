import React from 'react'
import { useState } from 'react'

export default function NewEventForm({ addEvent, setShowModal }) {

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("manchester")

    const resetForm = e => {
        e.preventDefault()
        setTitle("")
        setDate("")
        setLocation("manchester")
    }

    const handleSubmit = e => {
        e.preventDefault()

        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }

        resetForm(e)
        addEvent(event)
        setShowModal(false)
    }

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>

            <label>
                <span>Event Title:</span>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} required />
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date" onChange={e => setDate(e.target.value)} value={date} required />
            </label>
            <label>
                <span>Event location:</span>
                <select onChange={e => setLocation(e.target.value)} required>
                    <option value="manchester">Manchester</option>
                    <option value="london">London</option>
                    <option value="cardiff">Cardiff</option>
                </select>
            </label>

            {title && date && <p>{title} - {date}</p>}

            {title && date && location ? <button>Submit</button> : <button disabled style={{ cursor: 'default' }}>Submit</button>}
            
            <p onClick={e => { resetForm(e) }}>Reset form</p>
        </form>
    )
}