import { useState, useEffect } from "react"

function Events() {
    const [events, setEvents] = useState([])
  const [err, setErr] = useState(null)

  const handleClick = () => {
    fetch('http://localhost:3000/events')
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error('Error fetching events: ', error)
        setErr('Error fetching events')
      })
  }

  return (
    <>
    <h2>Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            Location: {event.location}, 
            Date: {new Date(event.date).toLocaleDateString()}, 
            Time: {new Date(`1970-01-01T${event.time}`).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true
            })
          }
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click for Events</button>
        {err && <p>{err}</p>}
    </>
  )
}

export default Events