import { useState } from 'react'

function Delete() {
    const [deleteButter, setDeleteButter] = useState('');

const removeButter = () => {
  fetch('http://localhost:3000/butters', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ scents: deleteButter }),
    })
    .then((res) => res.json())
    .then((data) => {
      alert('Butter removed!');
    })
    .catch((error) => {
      console.error('Error', error)
      alert('Unable to remove butter')
    })
  }

  return (
    <div className="flex items-center space-x-2">
    <label> Remove a Scent: </label>
    <input className="border border-black rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
      placeholder='Insert scent to delete'
      type='text'
      value={deleteButter}
      onChange={(e) => setDeleteButter(e.target.value)}
    />
    <button className="border border-black rounded px-4 py-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300" onClick={removeButter}>Delete Butter</button>
    </div>
  )
}

export default Delete