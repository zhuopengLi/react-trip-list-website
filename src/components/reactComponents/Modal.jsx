import React from 'react'
import NewEventForm from './subComponents/NewEventForm'

export default function Modal({ showModal, setShowModal, addEvent }) {

    return (
        <>
            {
                showModal && <div className="modal-wrapper">
                    <div className="modal-container">
                        <button onClick={() => setShowModal(prev => !prev)}>X</button>

                        <h2>10% Off Coupon Code</h2>
                        <p>Use the code GFYS10 at the checkout.</p>
                        <a href="#">Find out more</a>

                        <NewEventForm addEvent={addEvent} setShowModal={setShowModal} />
                    </div>
                </div>
            }
        </>
    )
}