import { useState } from 'react'
import './App.css'

function App() {
const [err, setErr] = useState(null);

const connectToBackend = (event) => {
  event.preventDefault();
  fetch(`/events`)
    .then((res) => res.json())
    .catch((err) => {
      setErr("Event not found")
    })
};

console.log(events)
return (
  <>
  <button onClick={connectToBackend}>Click Me</button>
  </>

)
}

export default App
