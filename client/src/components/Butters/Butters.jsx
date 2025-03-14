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
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Whipped Butters</h2>
      <div className="flex flex-wrap justify-center">
        <ul data-testid="list">
          <div>
            {butters.map(butter => (
              <li key={butter.id}
                className="rounded-full p-4 border border-orange-300 flex flex-col items-center justify-center text-center m-2">
                <div className="mb-1">Scents: {butter.scents}</div>
                <div className="mb-1">Color: {butter.color}</div>
                <div>Quantity: {butter.quantity}</div>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <button className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" data-testid="button" onClick={handleClick}>See Whipped Butters</button>
      {err && <p>{err}</p>}
    </div>
  )
}

export default Butters