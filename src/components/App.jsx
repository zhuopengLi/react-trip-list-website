import React, { useState } from 'react'
import Title from './reactComponents/Title'
import Footer from './reactComponents/Footer'
import Main from './reactComponents/Main'
import Modal from './reactComponents/Modal'


export default function App() {

  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "Ea veniam aute ipsum nulla proident in anim fugiat voluptate qui consectetur.", location: "Guangzhou", date: "2023-01-05", id: 1 },
    { title: "Exercitation proident duis elit ex eu laborum esse.", location: "Aachen", date: "1991-01-05", id: 2 },
    { title: "Esse aliqua et excepteur Lorem officia tempor anim ea in exercitation incididunt laboris.", location: "New York", date: "2000-01-01", id: 3 },
  ])

  const addEvent = event => {
    setEvents(prev => {
      return [...prev, event]
    })
  }


  const [showModal, setShowModal] = useState(true)

  return (
    <div className="App">

      <Title title="Events" subtitle="LOLLOL" />

      <Main events={events} setEvents={setEvents} showEvents={showEvents} setShowEvents={setShowEvents} />

      <Footer showModal={showModal} setShowModal={setShowModal} />

      <Modal showModal={showModal} setShowModal={setShowModal} addEvent={addEvent} />

    </div>
  )
}