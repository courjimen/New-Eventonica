import { useState, useEffect } from "react"

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://localhost:3000/events')
        .then(res => res.json())
        .then(data => setEvents(data))
        .catch(error => console.error('Error fetching events: ', error))
    }, [])

  return (
    <>
    <h2>Events</h2>
    <ul>
        {events.map(event => (
            <li key={event.id}>
                Location: {event.location}, Date: {event.date}, Time: {event.time}
            </li>
        ))}
    </ul>
    </>
  )
}

export default Events