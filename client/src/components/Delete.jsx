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
    <div>
    <label> Remove a Scent: </label>
    <input
      placeholder='Insert scent to delete'
      type='text'
      value={deleteButter}
      onChange={(e) => setDeleteButter(e.target.value)}
    />
    <button onClick={removeButter}>Delete Butter</button>
    </div>
  )
}

export default Delete