import React, { useState, useEffect } from "react";

export default function Footer({ showModal, setShowModal }) {

    const [clock, setClock] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            let time = new Date
            let hms = [time.getHours(), time.getMinutes(), time.getSeconds()]

            setClock(`${hms[0]}:${hms[1]}:${hms[2]}`)
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer>
            <p className="footer">Cheer up, now is <span>{clock}</span></p>
            {!showModal && <button onClick={() => setShowModal(prev => !prev)}>Reopen modal</button>}
        </footer>
    )
}