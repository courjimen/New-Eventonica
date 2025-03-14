import { useState } from "react"

function Butters() {
  const [butters, setButters] = useState([])
  const [err, setErr] = useState(null)

  const handleClick = () => {
    fetch('http://localhost:3000/butters')
      .then((res) => res.json())
      .then((data) => setButters(data))
      .catch((error) => {
        console.error('Error fetching whipped butters: ', error)
        setErr('Error fetching whipped butters')
      })
  }

  return (
    <>
    <h2>Whipped Butters</h2>
      <ul>
        {butters.map(butter => (
          <li key={butter.id}>
            Scents: {butter.scents}, 
            Color: {butter.color},
            Quantity: {butter.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>See Whipped Butters</button>
        {err && <p>{err}</p>}
    </>
  )
}

export default Butters